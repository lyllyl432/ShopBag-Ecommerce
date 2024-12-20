import React from "react";
import { Link } from "@inertiajs/react";

const Layout = ({ children, user }) => {
    return (
        <>
            <main className="px-4 max-w-screen-xl mx-auto min-h-screen">
                <header header className="flex justify-between items-center">
                    <div>
                        <img src="/images/logo-mobile.png" alt="logo" />
                    </div>
                    <div className="lg:hidden cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </div>
                    <ul className="hidden lg:flex lg:gap-x-6 lg:flex-1 lg:justify-center">
                        <li>
                            <Link href={route("shop.index")}>Shop</Link>
                        </li>
                        <li>
                            <Link href="#">Collection</Link>
                        </li>
                        <li>
                            <Link href="#">Explore</Link>
                        </li>
                    </ul>
                    <div className="lg:flex lg:gap-4 hidden lg:items-center">
                        <Link
                            href="/cart"
                            className="lg:flex lg:gap-x-2 cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            <p>Cart</p>
                        </Link>

                        <div className="lg:flex lg:gap-x-2 cursor-pointer items-center relative group">
                            <img
                                src={user.avatar && `/storage/${user.avatar}`}
                                alt="Profile Picture"
                                className="w-10 h-10 rounded-full"
                            />
                            <p className="font-bold">{user.username}</p>
                            <div className="hidden group-hover:block absolute top-10 right-0 bg-white p-4 rounded-md shadow-md ">
                                <div className="flex flex-col gap-2">
                                    <Link href={route("account.index")}>
                                        Account
                                    </Link>
                                    <Link href={route("purchase.index")}>
                                        Purchase
                                    </Link>
                                    <Link href={route("auth.logout")}>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="mt-8">{children}</section>
            </main>
        </>
    );
};

export default Layout;
