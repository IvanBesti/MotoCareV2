import UserLayout from "@/Layouts/UserLayout";
import styles from "../../../css/User/Booking.module.css";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm, router } from "@inertiajs/react";
import ReactSelect from "react-select";

export default function Booking({ users, katalogs, auth, jenisLayanans }) {
    const [errorMessages, setErrorMessages] = useState({});
    const [reload, setReload] = useState(false);

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
        label: jenisLayanan.jenis_layanan, // Gunakan nama kolom yang sesuai
    }));
    
    console.log(jenisLayananOptions); // Debug untuk memastikan hasil pemetaan

    const handleSubmit = (e) => {
        e.preventDefault();
        if (auth.user) {
            post(route("user.booking.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    setReload(!reload);
                    alert("Data booking berhasil ditambahkan.");
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

    useEffect(() => {
        setErrorMessages(errors);
    }, [errors]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <UserLayout auth={auth}>
            <main>
                <article>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Booking</h1>
                        <form onSubmit={handleSubmit}>
                            <section className={styles["form-booking"]}>
                                <Row>
                                    <Col md={6}>
                                        <div style={{ marginBottom: "20px" }}>
                                            <h3 className={styles["jenis-layanan"]}>
                                                Jenis Layanan
                                            </h3>
                                            <ReactSelect
                                                id="jenis_layanan"
                                                options={jenisLayananOptions}
                                                value={jenisLayananOptions.find(
                                                    (option) => option.value === data.jenis_layanan_id
                                                )}
                                                onChange={(selectedOption) =>
                                                    setData((prevData) => ({
                                                        ...prevData,
                                                        jenis_layanan_id: selectedOption.value,
                                                    }))
                                                }
                                                placeholder="Pilih Jenis Layanan"
                                            />
                                            {errorMessages.jenis_layanan_id && (
                                                <p className={styles.error}>
                                                    {errorMessages.jenis_layanan_id}
                                                </p>
                                            )}
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <h3>Jadwal Booking</h3>
                                        <input
                                            type="date"
                                            id="jadwal_booking"
                                            name="jadwal_booking"
                                            value={data.jadwal_booking}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        {errorMessages.jadwal_booking && (
                                            <p className={styles.error}>
                                                {errorMessages.jadwal_booking}
                                            </p>
                                        )}
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "20px" }}>
                                    <Col md={6}>
                                        <h3>Informasi Motor</h3>
                                        <ReactSelect
                                            id="katalog"
                                            options={katalogOptions}
                                            value={katalogOptions.find(
                                                (option) => option.value === data.katalog_id
                                            )}
                                            onChange={(selectedOption) =>
                                                setData((prevData) => ({
                                                    ...prevData,
                                                    katalog_id: selectedOption.value,
                                                }))
                                            }
                                            placeholder="Pilih Katalog"
                                        />
                                        {errorMessages.katalog_id && (
                                            <p className={styles.error}>
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
                                        />
                                        {errorMessages.tahun_pembuatan && (
                                            <p className={styles.error}>
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
                                        />
                                        {errorMessages.nomor_polisi && (
                                            <p className={styles.error}>
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
                                        />
                                        {errorMessages.km_kendaraan && (
                                            <p className={styles.error}>
                                                {errorMessages.km_kendaraan}
                                            </p>
                                        )}
                                    </Col>
                                    <Col md={6}>
                                        <h3>Catatan</h3>
                                        <textarea
                                            id="catatan"
                                            name="catatan"
                                            value={data.catatan}
                                            onChange={handleInputChange}
                                        />
                                        {errorMessages.catatan && (
                                            <p className={styles.error}>
                                                {errorMessages.catatan}
                                            </p>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className={styles["tombol-submit"]}>
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </form>
                    </div>
                </article>
            </main>
        </UserLayout>
    );
}