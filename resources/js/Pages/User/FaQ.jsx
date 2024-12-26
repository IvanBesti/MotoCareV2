import React from "react";
import UserLayout from "../../Layouts/UserLayout";

const FaQ = ({ auth }) => {
    return (
        <UserLayout auth={auth}>
            <div className="max-w-7xl mx-auto rounded-3xl bg-white py-16 px-6 md:px-16 mb-40">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-orange-600 text-center mb-16">
                        Frequently Asked Questions
                    </h1>
                    <div className="space-y-12">
                        {/* Pertanyaan 1 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apa itu website MotoCare?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Website MotoCare adalah platform online yang memungkinkan
                                Anda untuk membuat janji temu dengan bengkel mobil atau
                                motor untuk perawatan, perbaikan, atau layanan lainnya
                                secara mudah dan cepat.
                            </p>
                        </div>

                        {/* Pertanyaan 2 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Bagaimana cara melakukan booking layanan di website ini?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Untuk melakukan booking layanan, Anda cukup memilih jenis
                                layanan yang diinginkan, memilih bengkel yang tersedia,
                                menentukan tanggal dan waktu yang sesuai, lalu mengisi
                                informasi kendaraan dan data diri Anda. Setelah itu, Anda
                                dapat mengonfirmasi pemesanan.
                            </p>
                        </div>

                        {/* Pertanyaan 3 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apakah saya perlu membuat akun untuk melakukan booking?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Ya, Anda perlu membuat akun untuk melakukan booking. Hal
                                ini untuk memastikan bahwa informasi kendaraan dan
                                pemesanan Anda tercatat dengan baik, serta memudahkan
                                proses tindak lanjut.
                            </p>
                        </div>

                        {/* Pertanyaan 4 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apakah ada biaya untuk mendaftar atau menggunakan layanan
                                booking ini?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Tidak, pendaftaran dan penggunaan layanan booking di
                                website ini gratis. Anda hanya akan dikenakan biaya untuk
                                layanan yang Anda pesan di bengkel.
                            </p>
                        </div>

                        {/* Pertanyaan 5 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apa saja jenis layanan yang tersedia untuk booking?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Kami melayani berbagai layanan seperti ganti oli, servis
                                rutin, bore up / tune up, perbaikan khusus, cek kendaraan
                                dan lain-lain. Anda bisa melihat daftar lengkap layanan di
                                halaman "booking" di website kami.
                            </p>
                        </div>

                        {/* Pertanyaan 6 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apakah saya bisa mendapatkan estimasi biaya sebelum
                                melakukan booking?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Ya, Anda bisa mendapatkan estimasi biaya layanan sebelum
                                melakukan booking. Silakan pilih layanan yang diinginkan
                                dan informasi estimasi biaya akan ditampilkan.
                            </p>
                        </div>

                        {/* Pertanyaan 7 */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                                Apakah data pribadi saya aman di website ini?
                            </h3>
                            <p className="text-xl text-gray-600 mt-4">
                                Kami sangat menjaga privasi dan keamanan data pribadi Anda.
                                Informasi Anda akan dienkripsi dan tidak akan dibagikan
                                kepada pihak ketiga tanpa izin Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default FaQ;