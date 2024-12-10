import React, { useEffect, useRef } from "react";
import UserLayout from "@/Layouts/UserLayout";
import styles from "../../css/Register.module.css";
import { useForm, router } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function Register({ auth, flash }) {
    const wrapperRef = useRef(null);
    const loginLinkRefFromRegister = useRef(null);
    const loginLinkRefFromForgot = useRef(null);
    const registerLinkRef = useRef(null);
    const forgotLinkRef = useRef(null);
    const [showPassword, setShowPassword] = React.useState(false);

    // console.log(flash);

    useEffect(() => {
        if (auth.user) {
            router.visit(route("user.home"), {
                onSuccess: () => {
                    console.log("User is logged in");
                },
            });
        }
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const loginLinkFromRegister = loginLinkRefFromRegister.current;
        const loginLinkFromForgot = loginLinkRefFromForgot.current;
        const registerLink = registerLinkRef.current;
        const forgotLink = forgotLinkRef.current;

        const showLoginFromRegister = () => {
            setLoginData({
                email: "",
                password: "",
            });

            setRegisterData({
                username: "",
                email: "",
                password: "",
                konfirmasi_password: "",
                isAgree: false,
            });

            setForgotData({
                username: "",
                email: "",
            });
            wrapper.classList.remove(styles.activeRegister);
            wrapper.classList.remove(styles.activeForgot);
            wrapper.classList.remove(styles.activeLoginFromForgot);
            wrapper.classList.add(styles.activeLoginFromRegister);
        };

        const showLoginFromForgot = () => {
            setLoginData({
                email: "",
                password: "",
            });

            setRegisterData({
                username: "",
                email: "",
                password: "",
                konfirmasi_password: "",
                isAgree: false,
            });

            setForgotData({
                username: "",
                email: "",
            });
            wrapper.classList.remove(styles.activeRegister);
            wrapper.classList.remove(styles.activeForgot);
            wrapper.classList.remove(styles.activeLoginFromRegister);
            wrapper.classList.add(styles.activeLoginFromForgot);
        };

        const showRegister = () => {
            setLoginData({
                email: "",
                password: "",
            });

            setRegisterData({
                username: "",
                email: "",
                password: "",
                konfirmasi_password: "",
                isAgree: false,
            });

            setForgotData({
                username: "",
                email: "",
            });
            wrapper.classList.remove(styles.activeLoginFromRegister);
            wrapper.classList.remove(styles.activeLoginFromForgot);
            wrapper.classList.remove(styles.activeForgot);
            wrapper.classList.add(styles.activeRegister);
        };

        const showForgot = () => {
            setLoginData({
                email: "",
                password: "",
            });

            setRegisterData({
                username: "",
                email: "",
                password: "",
                konfirmasi_password: "",
                isAgree: false,
            });

            setForgotData({
                username: "",
                email: "",
            });
            wrapper.classList.remove(styles.activeLoginFromRegister);
            wrapper.classList.remove(styles.activeLoginFromForgot);
            wrapper.classList.remove(styles.activeRegister);
            wrapper.classList.add(styles.activeForgot);
        };

        if (
            registerLink &&
            loginLinkFromRegister &&
            loginLinkFromForgot &&
            forgotLink &&
            wrapper
        ) {
            registerLink.addEventListener("click", showRegister);
            loginLinkFromRegister.addEventListener(
                "click",
                showLoginFromRegister
            );
            loginLinkFromForgot.addEventListener("click", showLoginFromForgot);
            forgotLink.addEventListener("click", showForgot);
        }

        showLoginFromRegister();
        return () => {
            if (
                registerLink &&
                loginLinkFromRegister &&
                loginLinkFromForgot &&
                forgotLink
            ) {
                registerLink.removeEventListener("click", showRegister);
                loginLinkFromRegister.removeEventListener(
                    "click",
                    showLoginFromRegister
                );
                loginLinkFromForgot.removeEventListener(
                    "click",
                    showLoginFromForgot
                );
                forgotLink.removeEventListener("click", showForgot);
            }
        };
    }, []);

    const {
        data: registerData,
        setData: setRegisterData,
        post: postRegister,
        errors: registerErrors,
    } = useForm({
        username: "",
        email: "",
        password: "",
        konfirmasi_password: "",
        isAgree: false,
    });

    const {
        data: loginData,
        setData: setLoginData,
        post: postLogin,
        errors: loginErrors,
    } = useForm({
        email: "",
        password: "",
    });

    const {
        data: forgotData,
        setData: setForgotData,
        post: postForgot,
        errors: forgotErrors,
    } = useForm({
        username: "",
        email: "",
    });

    const handleRegisterChange = (e) => {
        setRegisterData(e.target.name, e.target.value);
    };

    const handleRegisterSubmit = (e) => {
        if (!registerData.isAgree) {
            alert("You must agree to the terms & conditions");
            return;
        }
        e.preventDefault();
        postRegister(route("register"));
    };

    const handleForgotSubmit = (e) => {
        e.preventDefault();
        postForgot("/forgot");
    };

    const handleLoginChange = (e) => {
        setLoginData(e.target.name, e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        postLogin("/login");
    };

    useEffect(() => {
        console.log(registerErrors);
    }, [registerErrors]);

    useEffect(() => {
        console.log(loginErrors);
    }, [loginErrors]);

    useEffect(() => {
        console.log(forgotErrors);
    }, [forgotErrors]);

    return (
        <UserLayout auth={auth}>
            <main>
                <article>
                    <section
                        className={`${styles.section} ${styles["login-register"]}`}
                    >
                        <div className={styles.container}>
                            <div className={styles.wrapper} ref={wrapperRef}>
                                <div
                                    className={`${styles["form-box"]} ${styles["login"]}`}
                                >
                                    <h2>Login</h2>
                                    {loginErrors.error && (
                                        <h3
                                            style={{
                                                color: "white",
                                                backgroundColor: "red",
                                                padding: "10px",
                                                marginTop: "10px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {loginErrors.error}
                                        </h3>
                                    )}

                                    {/* {flash.success && (
                                        <h3
                                            style={{
                                                color: "white",
                                                backgroundColor: "green",
                                                padding: "10px",
                                                marginTop: "10px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {flash.success}
                                        </h3>
                                    )} */}
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className={styles["input-box"]}>
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="envelope"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={loginData.email}
                                                onChange={handleLoginChange}
                                                required
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <label>Email</label>
                                            {loginErrors.email && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{ color: "red" }}
                                                >
                                                    {loginErrors.email}
                                                </small>
                                            )}
                                        </div>
                                        <div
                                            className={`${styles["input-box"]} relative`}
                                        >
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="lock-alt"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                value={loginData.password}
                                                onChange={handleLoginChange}
                                                required
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute inset-y-0 right-0 pr-16 text-gray-500 hover:text-gray-700 flex items-center gap-2"
                                            >
                                                {showPassword ? (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8"
                                                        >
                                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8 text-orange-500"
                                                        >
                                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                            <label>Password</label>
                                            {loginErrors.password && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{ color: "red" }}
                                                >
                                                    {loginErrors.password}
                                                </small>
                                            )}
                                        </div>
                                        <div
                                            className={
                                                styles["remember-forgot"]
                                            }
                                            style={{ marginTop: "10px" }}
                                        >
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="peer w-5 h-5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500 transition-all"
                                                />
                                                <span className="text-gray-700 peer-checked:text-orange-600">
                                                    Remember me
                                                </span>
                                            </label>
                                            <a href="#" ref={forgotLinkRef}>
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <button
                                            type="submit"
                                            className={styles["btn-login"]}
                                        >
                                            Login
                                        </button>
                                        <div
                                            className={styles["login-register"]}
                                        >
                                            <p>
                                                Don't have an account?
                                                <a
                                                    href="#"
                                                    className={
                                                        styles["register-link"]
                                                    }
                                                    ref={registerLinkRef}
                                                >
                                                    Register
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                <div
                                    className={`${styles["form-box"]} ${styles["register"]}`}
                                >
                                    <h2>Registration</h2>
                                    <form onSubmit={handleRegisterSubmit}>
                                        <div
                                            className={styles["input-box"]}
                                            style={{ marginBottom: "10px" }}
                                        >
                                            <span className={styles.icon}>
                                                <box-icon
                                                    type="solid"
                                                    name="user"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                value={registerData.username}
                                                onChange={handleRegisterChange}
                                                required
                                                style={{ marginBottom: "10px" }}
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <label>Username</label>
                                            {registerErrors.username && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {registerErrors.username}
                                                </small>
                                            )}
                                        </div>
                                        <div className={styles["input-box"]}>
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="envelope"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={registerData.email}
                                                onChange={handleRegisterChange}
                                                required
                                                style={{ marginBottom: "10px" }}
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <label>Email</label>
                                            {registerErrors.email && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {registerErrors.email}
                                                </small>
                                            )}
                                        </div>
                                        <div className={styles["input-box"]}>
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="lock-alt"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                value={registerData.password}
                                                onChange={handleRegisterChange}
                                                required
                                                style={{ marginBottom: "10px" }}
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute inset-y-0 right-0 pr-16 text-gray-500 hover:text-gray-700 flex items-center gap-2"
                                            >
                                                {showPassword ? (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8"
                                                        >
                                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8 text-orange-500"
                                                        >
                                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                            <label>Password</label>
                                            {registerErrors.password && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {registerErrors.password}
                                                </small>
                                            )}
                                        </div>
                                        <div className={styles["input-box"]}>
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="lock-alt"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="konfirmasi_password"
                                                value={
                                                    registerData.konfirmasi_password
                                                }
                                                onChange={handleRegisterChange}
                                                required
                                                style={{ marginBottom: "10px" }}
                                                className="block w-full pr-12 border-none focus:ring-0 focus:outline-none rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className="absolute inset-y-0 right-0 pr-16 text-gray-500 hover:text-gray-700 flex items-center gap-2"
                                            >
                                                {showPassword ? (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8"
                                                        >
                                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8 text-orange-500"
                                                        >
                                                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                            <label>Konfirmasi Password</label>
                                            {registerErrors.konfirmasi_password && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {
                                                        registerErrors.konfirmasi_password
                                                    }
                                                </small>
                                            )}
                                        </div>
                                        <div
                                            className={
                                                styles["remember-forgot"]
                                            }
                                            style={{ marginTop: "10px" }}
                                        >
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="isAgree"
                                                    checked={
                                                        registerData.isAgree
                                                    }
                                                    onChange={(e) =>
                                                        setRegisterData(
                                                            "isAgree",
                                                            e.target.checked
                                                        )
                                                    }
                                                    required
                                                    className="peer w-5 h-5 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500 transition-all"
                                                />
                                                <span className="text-gray-700 peer-checked:text-orange-600">
                                                    I agree to the terms &
                                                    conditions
                                                </span>
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className={styles["btn-register"]}
                                        >
                                            Register
                                        </button>
                                        <div
                                            className={styles["login-register"]}
                                        >
                                            <p>
                                                Remember your password?
                                                <a
                                                    href="#"
                                                    className={
                                                        styles["login-link"]
                                                    }
                                                    ref={
                                                        loginLinkRefFromRegister
                                                    }
                                                >
                                                    Login
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                <div
                                    className={`${styles["form-box"]} ${styles["forgot"]}`}
                                >
                                    <h2>Forgot Password</h2>
                                    {forgotErrors.user && (
                                        <h3
                                            style={{
                                                color: "white",
                                                backgroundColor: "red",
                                                padding: "10px",
                                                marginTop: "10px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            {forgotErrors.user}
                                        </h3>
                                    )}
                                    <form onSubmit={handleForgotSubmit}>
                                        <div
                                            className={styles["input-box"]}
                                            style={{ marginBottom: "10px" }}
                                        >
                                            <span className={styles.icon}>
                                                <box-icon
                                                    type="solid"
                                                    name="user"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                value={forgotData.username}
                                                onChange={(e) =>
                                                    setForgotData(
                                                        e.target.name,
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                style={{ marginBottom: "10px" }}
                                            />
                                            <label>Username</label>
                                            {forgotErrors.username && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {forgotErrors.username}
                                                </small>
                                            )}
                                        </div>
                                        <div className={styles["input-box"]}>
                                            <span className={styles.icon}>
                                                <box-icon
                                                    name="envelope"
                                                    type="solid"
                                                    color="#f16211"
                                                ></box-icon>
                                            </span>
                                            <input
                                                type="email"
                                                name="email"
                                                value={forgotData.email}
                                                onChange={(e) =>
                                                    setForgotData(
                                                        e.target.name,
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                style={{ marginBottom: "10px" }}
                                            />
                                            <label>Email</label>
                                            {forgotErrors.email && (
                                                <small
                                                    className={styles["error"]}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    {forgotErrors.email}
                                                </small>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className={styles["btn-register"]}
                                        >
                                            Submit
                                        </button>
                                        <div
                                            className={styles["login-register"]}
                                        >
                                            <p>
                                                Remember your password?
                                                <a
                                                    href="#"
                                                    className={
                                                        styles["login-link"]
                                                    }
                                                    ref={loginLinkRefFromForgot}
                                                >
                                                    Login
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </UserLayout>
    );
}
