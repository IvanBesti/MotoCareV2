import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import styles from "../../../css/User/Home.module.css";

const HeroSection = ({ auth, results }) => {
    console.log(auth);
    return (
        <UserLayout auth={auth}>
            <section>
                <div className="container">
                    <div className={styles.hero}>
                        <p
                            className={`${styles["section-subtitle"]} ${styles[":dark"]}`}
                        >
                            Dengan Mekanik Berpengalaman
                        </p>

                        <h1 className={`${styles.h1} ${styles.sectionTitle}`}>
                            Motocare
                        </h1>

                        <p className={styles.sectionText}>
                            Di MotoCare, kami memastikan setiap perjalanan Anda
                            lancar dan setiap motor terawat dengan baik.
                            Platform digital kami menyediakan semua yang Anda
                            butuhkan untuk perawatan motor tanpa repot.
                        </p>

                        <a href="../booking/index.html" className={styles.btn}>
                            <span className="span">Booking Sekarang</span>
                        </a>
                    </div>
                    <img
                        src="/images/hero-vehicle.png"
                        alt="red motor vehicle"
                        className="move-anim"
                    />
                </div>
            </section>

            <section
                className="section work bg-gray-800 shadow-2xl"
                // style={{ padding: "0 0 50px" }}
                aria-labelledby="work-label"
            >
                <div className={`${styles["container"]}`}>
                    {/* <p
                        className={`${styles["section-subtitle"]} ${styles["light"]}`}
                        style={{
                            color: "white",
                        }}
                        id="work-label"
                    >
                        TOTAL
                    </p> */}

                    <h2
                        className={`${styles["h2"]} ${styles["section-title"]}`}
                        style={{
                            color: "white",
                        }}
                    >
                        Customer Teratas
                    </h2>
                    <p className="text-base-2xl  text-gray-200 leading-relaxed max-w-5xl mx-auto text-center mb-20">
                        Di MotoCare, kami bangga memiliki pelanggan yang setia
                        dan sering menggunakan layanan kami. Berikut adalah
                        daftar pelanggan teratas yang telah mempercayakan
                        perawatan kendaraan mereka kepada kami. Kami sangat
                        menghargai kepercayaan Anda dan akan terus memberikan
                        pelayanan terbaik.
                    </p>

                    <ul className={`${styles["has-scrollbar"]}`}>
                        {results.map((result) => (
                            <li className={`${styles["scrollbar-item"]}`}>
                                <div className={`${styles["work-card"]}`}>
                                    <figure
                                        className="m-auto"
                                        style={{
                                            width: "350px",
                                            height: "406px",
                                        }}
                                    >
                                        <img
                                            src={
                                                result.foto
                                                    ? "/storage/" + result.foto
                                                    : "/images/user.jpeg"
                                            }
                                            width="350"
                                            height="406"
                                            loading="lazy"
                                            alt="Engine Repair"
                                            className={`${styles["img-cover"]}`}
                                        />
                                    </figure>

                                    <div
                                        className={`${styles["card-content"]}`}
                                    >
                                        <p
                                            className={`${styles["card-subtitle"]}`}
                                        >
                                            Jumlah Booking{" "}
                                            {result.total_booking}
                                        </p>

                                        <h3
                                            className={`${styles["h3"]} ${styles["card-title"]}`}
                                        >
                                            {result.nama}
                                        </h3>

                                        <a
                                            href="#"
                                            className={`${styles["card-btn"]}`}
                                        >
                                            <span
                                                className={`${styles["next-icon"]}`}
                                            >
                                                {result.rank}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </UserLayout>
    );
};

export default HeroSection;
