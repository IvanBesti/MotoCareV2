import React, { useState, useEffect } from "react";
import { route } from "ziggy-js";
import { useForm, Link, router } from "@inertiajs/react";
import UserLayout from "../../Layouts/UserLayout";

export default function TambahProfil({ auth, userId, user }) {
    const { data, setData, errors } = useForm({
        userId: userId || "",
        nama: user?.nama || "",
        tanggal_lahir: user?.tanggal_lahir || "",
        no_telepon: user?.no_telepon || "",
        jenis_kelamin: user?.jenis_kelamin || "",
        foto: null,
    });

    const [previewImage, setPreviewImage] = useState(
        user?.foto ? `/storage/${user.foto}` : null
    );

    const [alert, setAlert] = useState({
        type: "",
        message: "",
        visible: false,
    }); // Alert State

    const handleFotoChange = (event) => {
        const file = event.target.files[0];
        setData("foto", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("userId", data.userId);
        formData.append("nama", data.nama);
        formData.append("tanggal_lahir", data.tanggal_lahir);
        formData.append("no_telepon", data.no_telepon);
        formData.append("jenis_kelamin", data.jenis_kelamin);
        if (data.foto) formData.append("foto", data.foto);

        formData.append("_method", "PUT");

        router.post(route("user.profile.store", { id: userId }), formData, {
            onSuccess: () => {
                setAlert({
                    type: "success",
                    message: "Profil berhasil diperbarui!",
                    visible: true,
                });
                setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
            },
            onError: (error) => {
                setAlert({
                    type: "error",
                    message: "Terjadi kesalahan saat memperbarui profil.",
                    visible: true,
                });
                console.error("An error occurred", error);
                setTimeout(() => setAlert({ ...alert, visible: false }), 3000);
            },
        });
    };

    return (
        <UserLayout auth={auth}>
            <h1 className="mt-4 text-6xl font-bold text-center text-gray-200 mb-12">
                LENGKAPI PROFIL ANDA
            </h1>
            <section className="py-10 px-8 max-w-7xl mx-auto bg-gradient-to-r from-gray-100 to-white rounded-3xl shadow-lg mb-60">
                {/* Alert Notification with Transition */}
                <div
                    className={`mb-6 p-2 rounded-lg transform transition-all duration-300 ${
                        alert.visible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                    } ${
                        alert.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {alert.message}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Foto Profil */}
                    <div>
                        {previewImage && (
                            <div className="mt-4">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto transition duration-300 transform hover:scale-110"
                                />
                            </div>
                        )}
                        {errors.foto && (
                            <span className="text-red-500 text-sm">
                                {errors.foto}
                            </span>
                        )}
                        <label className="block text-3xl font-medium text-gray-700 mb-2">
                            Foto Profil
                        </label>
                        <input
                            type="file"
                            name="foto"
                            onChange={handleFotoChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                        />
                    </div>

                    {/* Nama dan Tanggal Lahir */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-2">
                                Nama
                            </label>
                            <input
                                type="text"
                                name="nama"
                                value={data.nama}
                                onChange={handleChange}
                                className="w-full p-3 text-2xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                                placeholder="John Doe"
                            />
                            {errors.nama && (
                                <span className="text-red-500 text-sm">
                                    {errors.nama}
                                </span>
                            )}
                        </div>
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-2">
                                Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                name="tanggal_lahir"
                                value={data.tanggal_lahir}
                                onChange={handleChange}
                                className="w-full text-2xl p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                            />
                            {errors.tanggal_lahir && (
                                <span className="text-red-500 text-sm">
                                    {errors.tanggal_lahir}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* No Telepon dan Jenis Kelamin */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-2">
                                No Telepon
                            </label>
                            <input
                                type="text"
                                name="no_telepon"
                                value={data.no_telepon}
                                onChange={handleChange}
                                className="w-full text-2xl p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                                placeholder="08123456789"
                            />
                            {errors.no_telepon && (
                                <span className="text-red-500 text-sm">
                                    {errors.no_telepon}
                                </span>
                            )}
                        </div>
                        <div>
                            <label className="block text-3xl font-medium text-gray-700 mb-2">
                                Jenis Kelamin
                            </label>
                            <select
                                name="jenis_kelamin"
                                value={data.jenis_kelamin}
                                onChange={handleChange}
                                className="w-full text-2xl p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                                required
                            >
                                <option value="" disabled>
                                    Pilih Jenis Kelamin
                                </option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                            {errors.jenis_kelamin && (
                                <span className="text-red-500 text-sm">
                                    {errors.jenis_kelamin}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <Link
                            href="/"
                            className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition duration-300"
                        >
                            Kembali
                        </Link>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition duration-300"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </section>
        </UserLayout>
    );
}
