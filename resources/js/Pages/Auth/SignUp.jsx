import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useForm, Head } from "@inertiajs/react";

const SignIn = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        username: "",
        email: "",
        password: "",
    });
    const [passwordMode, setPasswordMode] = useState(true);
    const [passwordValue, setPasswordValue] = useState("");
    const handlePasswordMode = () => {
        setPasswordMode(!passwordMode);
    };
    const handleChangePassword = (e) => {
        setData("password", e.target.value);
        setPasswordValue(e.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("auth.store"), { onSuccess: () => reset() });
    };
    return (
        <>
            <Head title="Sign Up" />
            <main className="flex items-center justify-center min-h-screen px-4 lg:px-0 lg:max-w-screen-xl lg:mx-auto lg:relative">
                <div>
                    <img
                        className="lg:block hidden lg:max-w-lg"
                        src={`images/shopping.png`}
                    />
                </div>
                <div className="flex-1">
                    <div className="lg:max-w-lg lg:mx-auto">
                        <img
                            className="mx-auto lg:absolute lg:-top-2 lg:-left-10"
                            src="images/logo.png"
                            alt="logo"
                        />
                        <h1 className="lg:text-display-2 text-display-4 font-semibold">
                            CREATE AN ACCOUNT
                        </h1>
                        <p className="mt-4 text-body-small">
                            Already have an account?{" "}
                            {
                                <Link
                                    href="/signin"
                                    className="underline text-accent"
                                >
                                    Log in
                                </Link>
                            }
                        </p>
                        <form onSubmit={submit} className="mt-4">
                            <div className="lg:flex lg:gap-2">
                                <div className="lg:flex-1">
                                    <FormInput
                                        className="w-full p-4 bg-secondary placeholder:text-color-text rounded-md"
                                        placeholder="Username"
                                        name="username"
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        value={data.username}
                                    ></FormInput>
                                    {errors.username && (
                                        <span className="text-body-small">
                                            {errors.username}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <FormInput
                                className="w-full p-4 bg-secondary placeholder:text-color-text rounded-md mt-4"
                                placeholder="Email"
                                name="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                value={data.email}
                            ></FormInput>
                            {errors.email && (
                                <span className="text-body-small">
                                    {errors.email}
                                </span>
                            )}
                            <div className="mt-4">
                                <div className="relative">
                                    <FormInput
                                        className="w-full p-4 bg-secondary placeholder:text-color-text rounded-lg"
                                        type={
                                            passwordMode ? "password" : "text"
                                        }
                                        onChange={handleChangePassword}
                                        placeholder="Password"
                                        name="password"
                                    ></FormInput>
                                    {errors.password && (
                                        <span className="text-body-small">
                                            {errors.password}
                                        </span>
                                    )}
                                    {passwordValue !== "" ? (
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                                            onClick={handlePasswordMode}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className={`size-6 ${
                                                    passwordMode ? "" : "hidden"
                                                }`}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className={`size-6 ${
                                                    passwordMode ? "hidden" : ""
                                                }`}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                            <Button
                                className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-xl"
                                disabled={processing}
                            >
                                Log in
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SignIn;
