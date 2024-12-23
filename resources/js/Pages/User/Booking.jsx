import React, { useEffect, useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import ReactSelect from "react-select";
import { useForm, router } from "@inertiajs/react";

export default function Booking({ users, katalogs, auth, jenisLayanans }) {
    const [alertMessage, setAlertMessage] = useState(null);
    const [errorMessages, setErrorMessages] = useState({});
    const { data, setData, post, errors } = useForm({
        id: "",
        user_id: auth?.user?.id || (users && users[0]?.id) || null,
        jenis_layanan_id: "",
        katalog_id: "",
        tahun_pembuatan: "",
        nomor_polisi: "",
        km_kendaraan: "",
        jadwal_booking: "",
        catatan: "",
    });

    const katalogOptions = katalogs.map((katalog) => ({
        value: katalog.id,
        label: `${katalog.merk} ${katalog.model}`,
    }));

    const jenisLayananOptions = jenisLayanans.map((jenisLayanan) => ({
        value: jenisLayanan.id,
        label: jenisLayanan.jenis_layanan,
    }));

    const customStyles = {
        control: (base) => ({
            ...base,
            padding: "5px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            boxShadow: "none",
            "&:hover": {
                borderColor: "#93c5fd",
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: "#9ca3af",
            fontSize: "0.875rem",
        }),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (auth.user) {
            post(route("user.booking.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    setAlertMessage("Data booking berhasil ditambahkan.");
                    setData({
                        id: "",
                        user_id: auth?.user?.id || null,
                        jenis_layanan_id: "",
                        katalog_id: "",
                        tahun_pembuatan: "",
                        nomor_polisi: "",
                        km_kendaraan: "",
                        jadwal_booking: "",
                        catatan: "",
                    });
                    setTimeout(() => setAlertMessage(null), 5000);
                },
                onError: (error) => {
                    console.error(error);
                    setErrorMessages(error);
                },
            });
        } else {
            router.visit(route("auth"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        setErrorMessages(errors);
    }, [errors]);

    return (
        <UserLayout auth={auth}>
            <main>
                <article>
                    <h1 className="mt-4 text-6xl font-bold text-center text-gray-200 mb-12">
                        BOOKING
                    </h1>
                    <div className="max-w-7xl py-10 px-8 mx-auto bg-white p-8 rounded-3xl shadow-md mb-60">
                        {alertMessage && (
                            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg shadow">
                                {alertMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <section>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-3xl mb-2 text-orange-500">
                                            Jenis Layanan
                                        </h3>
                                        <ReactSelect
                                            id="jenis_layanan"
                                            options={jenisLayananOptions}
                                            value={jenisLayananOptions.find(
                                                (option) =>
                                                    option.value ===
                                                    data.jenis_layanan_id
                                            )}
                                            onChange={(selectedOption) =>
                                                setData((prevData) => ({
                                                    ...prevData,
                                                    jenis_layanan_id:
                                                        selectedOption.value,
                                                }))
                                            }
                                            placeholder="Pilih Jenis Layanan"
                                        />
                                        {errorMessages.jenis_layanan_id && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.jenis_layanan_id}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-500 text-3xl mb-2">
                                            Jadwal Booking
                                        </h3>
                                        <input
                                            type="date"
                                            id="jadwal_booking"
                                            name="jadwal_booking"
                                            value={data.jadwal_booking}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full text-2xl p-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                        />
                                        {errorMessages.jadwal_booking && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.jadwal_booking}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <h3 className="font-bold text-orange-500 text-3xl mb-2">
                                            Informasi Motor
                                        </h3>
                                        <ReactSelect
                                            id="katalog"
                                            options={katalogOptions}
                                            value={katalogOptions.find(
                                                (option) =>
                                                    option.value ===
                                                    data.katalog_id
                                            )}
                                            onChange={(selectedOption) =>
                                                setData((prevData) => ({
                                                    ...prevData,
                                                    katalog_id:
                                                        selectedOption.value,
                                                }))
                                            }
                                            placeholder="Pilih Katalog"
                                        />
                                        {errorMessages.katalog_id && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.katalog_id}
                                            </p>
                                        )}
                                        <input
                                            type="text"
                                            id="tahun_pembuatan"
                                            name="tahun_pembuatan"
                                            placeholder="Tahun Pembuatan"
                                            value={data.tahun_pembuatan}
                                            onChange={handleInputChange}
                                            maxLength="4"
                                            className="w-full text-2xl p-2 mt-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                        />
                                        {errorMessages.tahun_pembuatan && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.tahun_pembuatan}
                                            </p>
                                        )}
                                        <input
                                            type="text"
                                            id="nomor_polisi"
                                            name="nomor_polisi"
                                            placeholder="Nomor Polisi"
                                            value={data.nomor_polisi}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full text-2xl p-2 mt-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                        />
                                        {errorMessages.nomor_polisi && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.nomor_polisi}
                                            </p>
                                        )}
                                        <input
                                            type="text"
                                            id="km_kendaraan"
                                            name="km_kendaraan"
                                            placeholder="Kilometer Kendaraan"
                                            value={data.km_kendaraan}
                                            onChange={handleInputChange}
                                            className="w-full text-2xl p-2 mt-4 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                        />
                                        {errorMessages.km_kendaraan && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.km_kendaraan}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-orange-500 mb-2">
                                            Catatan
                                        </h3>
                                        <textarea
                                            id="catatan"
                                            name="catatan"
                                            value={data.catatan}
                                            onChange={handleInputChange}
                                            className="w-full text-2xl p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                                        />
                                        {errorMessages.catatan && (
                                            <p className="text-red-500 text-sm">
                                                {errorMessages.catatan}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="place-items-end mt-8">
                                    <button
                                        type="submit"
                                        className="py-2 px-6 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </section>
                        </form>
                    </div>
                </article>
            </main>
        </UserLayout>
    );
}
