import React from "react";
import { Link } from "@inertiajs/react";
import FormInput from "./components/FormInput";
import Button from "./components/Button";

const SignIn = () => {
    return (
        <>
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
                                    href="/"
                                    className="underline text-accent"
                                >
                                    Log in
                                </Link>
                            }
                        </p>
                        <form action="" method="post" className="mt-4">
                            <div className="lg:flex lg:gap-2">
                                <FormInput
                                    className="w-full p-4 bg-secondary placeholder:text-color-text rounded-md"
                                    placeholder="First Name"
                                ></FormInput>
                                <FormInput
                                    className="w-full p-4 mt-4 lg:mt-0 bg-secondary placeholder:text-color-text rounded-md"
                                    placeholder="Last Name"
                                ></FormInput>
                            </div>
                            <FormInput
                                className="w-full p-4 bg-secondary placeholder:text-color-text rounded-md mt-4"
                                placeholder="Email"
                            ></FormInput>
                            <div className="mt-4">
                                <div className="relative">
                                    <FormInput
                                        className="w-full p-4 bg-secondary placeholder:text-color-text rounded-lg"
                                        type="password"
                                        placeholder="Password"
                                    ></FormInput>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6 absolute top-1/2 -translate-y-1/2 right-4"
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
                                </div>
                            </div>
                            <Button className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-xl">
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
