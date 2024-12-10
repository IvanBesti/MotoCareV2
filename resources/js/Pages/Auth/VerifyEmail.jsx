import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-200 to-white flex items-center justify-center font-sans">
            <Head title="Email Verification" />

            <div className="bg-white max-w-md w-full shadow-lg rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white p-6 text-center">
                    <img
                        src="./images/logo.png"
                        alt="Logo"
                        className="w-25 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold">
                        Verifikasi Email Anda
                    </h2>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <p className="text-gray-600 text-justify">
                        Terima kasih telah mendaftar! Sebelum memulai, mohon
                        verifikasi alamat email Anda dengan mengeklik tautan
                        yang baru saja kami kirimkan. Jika Anda tidak menerima
                        email, kami dengan senang hati akan mengirimkan ulang.
                    </p>

                    {status === "verification-link-sent" && (
                        <div className="bg-green-100 text-green-700 p-3 rounded text-center">
                            Tautan verifikasi baru telah dikirim ke email yang
                            Anda gunakan saat mendaftar.
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition ${
                                processing ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={processing}
                        >
                            Resend Verification Email
                        </button>
                    </form>

                    <div className="text-center">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="text-sm text-gray-500 underline hover:text-gray-700 transition"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-100 text-center py-4 text-sm text-gray-500">
                    &copy; 2024 Ruang Eskalasi. All rights reserved.
                </div>

            </div>
        </div>
    );
}