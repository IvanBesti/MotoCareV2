import UserLayout from "@/Layouts/UserLayout";
import styles from "../../../css/User/Riwayat.module.css";
import React, { useState, useEffect } from "react";
import { Link, useForm, Head, router } from "@inertiajs/react";
import { Button, Col, Row } from "react-bootstrap";

export default function Riwayat({ bookings, users, invoices, auth }) {
    console.log("Bookings:", bookings);
    const [selectedBookingId, setSelectedBookingId] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [bookingList, setBookingList] = useState(bookings);
    const [number, setNumber] = useState(1);

    console.log(bookings);

    useEffect(() => {
        console.log("Selected Booking:", selectedBooking);
        console.log("Selected Booking User:", selectedBooking?.user);
        if (auth.user) {
            setBookingList(
                bookings.filter((booking) => booking.user_id === auth.user.id)
            );
        } else {
            router.visit(route("auth"), {
                method: "GET",
                headers: {
                    "Content-type": "Application/json",
                },
            });
        }
    }, [auth.user, bookings]);

    const handleBookingClick = (id) => {
        setSelectedBookingId(id);

        // Pastikan data booking valid
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
        .sort((a, b) => a.id - b.id); // Urutkan berdasarkan ID secara ascending

    useEffect(() => {
        console.log(bookings, users); // Check the initial values
        setBookingList(bookings);
    }, [bookings]);

    return (
        <UserLayout auth={auth}>
            <main>
                <article>
                    {/* <h1 className={styles["user"]}>
            <i className="bx bxs-user" style={{ color: '#ffffff' }}></i> Hi 
          </h1> */}
                    <div className={styles["container"]}>
                        <h1 className={styles["title"]}>RIWAYAT SERVICE</h1>
                        <section className={styles["history-booking"]}>
                            <Row>
                                <Col
                                    md={{ span: 6 }}
                                    className={styles["laporan-kondisi"]}
                                >
                                    <h3>Laporan Kondisi Motor</h3>
                                    <div className={styles["search"]}>
                                        <div className={styles["search-input"]}>
                                            {/* button search */}
                                            <Button
                                                type="button"
                                                value="search"
                                                id="btn-search"
                                                title="Search"
                                                className={
                                                    styles["search-button"]
                                                }
                                            >
                                                <box-icon name="search"></box-icon>
                                            </Button>
                                            {/* input search */}
                                            <input
                                                type="text"
                                                id={styles["search-input"]}
                                                placeholder="Cari Riwayat Booking"
                                                value={searchTerm}
                                                onChange={handleSearchChange}
                                            />
                                        </div>
                                        <ul id={styles["booking-list"]}>
                                            {filteredBookings.map(
                                                (booking, index) => (
                                                    <li
                                                        key={booking.id}
                                                        id={`list-${booking.id}`}
                                                        className={
                                                            selectedBookingId ===
                                                            booking.id
                                                                ? `${styles.selected} ${styles.highlighted}`
                                                                : ""
                                                        }
                                                        onClick={() =>
                                                            handleBookingClick(
                                                                booking.id
                                                            )
                                                        }
                                                    >
                                                        Booking {index + 1}{" "}
                                                        {/* Urutan sesuai dengan daftar terurut */}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>

                                <Col
                                    md={{ span: 6 }}
                                    id={styles["info-booking-pemilik"]}
                                >
                                    <h3>
                                        {selectedBooking?.katalog?.merk ||
                                            "Merk tidak tersedia"}{" "}
                                        -
                                        {selectedBooking?.jenis_layanan
                                            ?.jenis_layanan ||
                                            "Jenis layanan tidak tersedia"}
                                    </h3>
                                    <table className={styles["info-pemilik"]}>
                                        <tbody>
                                            <tr>
                                                <td>Nama Pemilik</td>
                                                {/* AMBIL DARI TABEL USERS */}
                                                <td>{selectedBooking?.user?.nama || "Nama tidak tersedia"}</td>
                                            </tr>
                                            <tr>
                                                <td>No. Polisi</td>
                                                <td>
                                                    {selectedBooking &&
                                                        selectedBooking.nomor_polisi}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Merk</td>
                                                {/* AMBIL DARI TABEL KATALOG */}
                                                <td>
                                                    {selectedBooking &&
                                                        selectedBooking.katalog
                                                            .merk +
                                                            " " +
                                                            selectedBooking
                                                                .katalog.model}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Jenis Layanan</td>
                                                <td>
                                                    {selectedBooking &&
                                                        selectedBooking
                                                            .jenis_layanan
                                                            .jenis_layanan}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Status</td>
                                                {/* AMBIL DARI TABEL INVOICES */}
                                                <td>
                                                    {selectedBooking &&
                                                    selectedBooking.status !==
                                                        undefined &&
                                                    selectedBooking.invoice &&
                                                    selectedBooking.invoice
                                                        .status
                                                        ? `${
                                                              selectedBooking.status ??
                                                              "Diproses"
                                                          } - ${
                                                              selectedBooking
                                                                  .invoice
                                                                  .status ??
                                                              "Unpaid"
                                                          }`
                                                        : "Status tidak tersedia"}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />

                                    {/* INVOICE */}
                                    <div
                                        className={
                                            styles["info-booking-invoice"]
                                        }
                                    >
                                        <h3>Invoice</h3>
                                        <table
                                            className={styles["info-invoice"]}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {
                                                            selectedBooking
                                                                ?.jenis_layanan
                                                                ?.jenis_layanan
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            selectedBooking
                                                                ?.jenis_layanan
                                                                ?.harga
                                                        }
                                                    </td>
                                                    <td>
                                                        {selectedBooking?.jenis_layanan
                                                            ? 1
                                                            : ""}
                                                    </td>
                                                </tr>
                                                {selectedBooking &&
                                                selectedBooking.invoice
                                                    ?.items ? (
                                                    selectedBooking.invoice.items.map(
                                                        (item) => (
                                                            <tr key={item.id}>
                                                                <td>
                                                                    {
                                                                        item
                                                                            .produk
                                                                            .nama_produk
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {item.harga.toLocaleString(
                                                                        "id-ID",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "IDR",
                                                                        }
                                                                    )}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        width: "10%",
                                                                    }}
                                                                >
                                                                    {
                                                                        item.jumlah
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td colSpan="3">
                                                            Invoice belum
                                                            tersedia
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        <hr />
                                    </div>
                                    <div
                                        className={
                                            styles["info-booking-total-bayar"]
                                        }
                                    >
                                        <table
                                            className={styles["total-bayar"]}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>Total Bayar:</td>
                                                    <td>
                                                        {selectedBooking &&
                                                        selectedBooking.invoice ? (
                                                            <div>
                                                                {/* hitung total harga termasuk harga jenis layanan */}
                                                                {selectedBooking.invoice.items
                                                                    .reduce(
                                                                        (
                                                                            total,
                                                                            item
                                                                        ) =>
                                                                            total +
                                                                            item.jumlah *
                                                                                item.harga,
                                                                        selectedBooking
                                                                            .jenis_layanan
                                                                            ?.harga ||
                                                                            0 // Menambahkan harga layanan sebagai nilai awal
                                                                    )
                                                                    .toLocaleString(
                                                                        "id-ID",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "IDR",
                                                                        }
                                                                    )}
                                                            </div>
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </article>
            </main>
        </UserLayout>
    );
}
//
