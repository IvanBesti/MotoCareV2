import React, { useState, useEffect } from "react";
import UserLayout from "../../Layouts/UserLayout";
import { router } from "@inertiajs/react";

export default function Riwayat({ bookings, users, invoices, auth }) {
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [bookingList, setBookingList] = useState(bookings);

    useEffect(() => {
        if (auth.user) {
            setBookingList(
                bookings.filter((booking) => booking.user_id === auth.user.id)
            );
        } else {
            router.visit(route("auth"), {
                method: "GET",
                headers: { "Content-type": "Application/json" },
            });
        }
    }, [auth.user, bookings]);

    const handleBookingClick = (id) => {
        setSelectedBookingId(id);
        const booking = bookings.find((booking) => booking.id === id);
        if (booking) {
            setSelectedBooking(booking);
        } else {
            console.error("Booking tidak ditemukan");
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredBookings = bookingList
        .filter((booking) =>
            booking.id.toString().toLowerCase().includes(searchTerm)
        )
        .sort((a, b) => b.id - a.id); // Urutkan berdasarkan ID terbaru ke lama

    return (
        <UserLayout auth={auth}>
            <main className="py-8 px-4 lg:px-16 mb-20">
                <h1 className="mt-4 text-6xl font-bold text-center text-gray-200 mb-12">
                    RIWAYAT SERVIS
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Booking List Section */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-4xl font-semibold mb-4 text-gray-800">
                            Laporan Kondisi Motor
                        </h3>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Cari Riwayat Booking"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full text-2xl py-2 px-4 border rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
                            />
                        </div>
                        <ul className="space-y-2">
                            {filteredBookings.map((booking, index) => (
                                <li
                                    key={booking.id}
                                    className={`p-4 border rounded-lg cursor-pointer ${
                                        selectedBookingId === booking.id
                                            ? "bg-orange-100 border-orange-500"
                                            : "bg-white hover:bg-gray-50"
                                    }`}
                                    onClick={() =>
                                        handleBookingClick(booking.id)
                                    }
                                >
                                    Booking {filteredBookings.length - index}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Booking Details Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-4xl font-bold mb-6 text-gray-800">
                            {selectedBooking?.katalog?.merk ||
                                "Merk tidak tersedia"}{" "}
                            -{" "}
                            {selectedBooking?.jenis_layanan?.jenis_layanan ||
                                "Jenis layanan tidak tersedia"}
                        </h3>
                        <table className="w-full text-left border-separate border-spacing-4">
                            <tbody>
                                <tr>
                                    <td className="py-4 text-2xl font-semibold">
                                        Nama Pemilik
                                    </td>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.user?.nama ||
                                            "Nama tidak tersedia"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-2xl font-semibold">
                                        No. Polisi
                                    </td>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.nomor_polisi ||
                                            "Tidak tersedia"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-2xl font-semibold">
                                        Merk
                                    </td>

                                    <td>
                                        {(selectedBooking &&
                                            selectedBooking.katalog.merk +
                                                " " +
                                                selectedBooking.katalog
                                                    .model) ||
                                            "Tidak tersedia"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-2xl font-semibold">
                                        Jenis Layanan
                                    </td>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.jenis_layanan
                                            ?.jenis_layanan || "Tidak tersedia"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 text-2xl font-semibold">
                                        Status
                                    </td>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.status || "Diproses"}{" "}
                                        -{" "}
                                        {selectedBooking?.invoice?.status ||
                                            "Unpaid"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className="my-8 border-gray-500 border-2" />

                        {/* Invoice Section */}
                        <h3 className="text-3xl font-bold mb-6 text-gray-800">
                            Invoice
                        </h3>
                        <table className="w-full border-separate border-spacing-4">
                            <thead>
                                <tr>
                                    <th className="py-4 text-2xl text-left">
                                        Layanan
                                    </th>
                                    <th className="py-4 text-2xl text-left">
                                        Harga
                                    </th>
                                    <th className="py-4 text-2xl text-left">
                                        Jumlah
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.jenis_layanan
                                            ?.jenis_layanan || "Tidak tersedia"}
                                    </td>
                                    <td className="py-4 text-2xl">
                                        {selectedBooking?.jenis_layanan
                                            ?.harga || "Tidak tersedia"}
                                    </td>
                                    <td className="py-4 text-2xl">1</td>
                                </tr>
                                {selectedBooking?.invoice?.items ? (
                                    selectedBooking.invoice.items.map(
                                        (item) => (
                                            <tr key={item.id}>
                                                <td className="py-4 text-2xl">
                                                    {item.produk.nama_produk}
                                                </td>
                                                <td className="py-4 text-2xl">
                                                    {item.harga.toLocaleString(
                                                        "id-ID",
                                                        {
                                                            style: "currency",
                                                            currency: "IDR",
                                                        }
                                                    )}
                                                </td>
                                                <td className="py-4 text-2xl">
                                                    {item.jumlah}
                                                </td>
                                            </tr>
                                        )
                                    )
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="py-4 text-2xl text-center"
                                        >
                                            Invoice belum tersedia
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <hr className="my-8 border-gray-500 border-2" />

                        {/* Total Payment */}
                        <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-gray-800">
                                Total Bayar:
                            </span>
                            <span className="text-3xl font-bold text-gray-800">
                                {selectedBooking?.invoice
                                    ? selectedBooking.invoice.items
                                          .reduce(
                                              (total, item) =>
                                                  total +
                                                  item.jumlah * item.harga,
                                              selectedBooking?.jenis_layanan
                                                  ?.harga || 0
                                          )
                                          .toLocaleString("id-ID", {
                                              style: "currency",
                                              currency: "IDR",
                                          })
                                    : "Tidak tersedia"}
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
}
