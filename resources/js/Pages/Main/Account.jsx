import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Head, Link, useForm } from "@inertiajs/react";
import SettingsWrapper from "../components/SettingsWrapper";
import SettingsTopBoard from "../components/SettingsTopBoard";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
const Account = ({ user }) => {
    const [image, setImage] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        username: user.username,
        email: user.email,
        phone: user.phone,
        date: user.date,
        month: user.month,
        year: user.year,
        gender: user.gender,
        avatar: null,
    });
    function submit(e) {
        post(route("account.update"), data);
    }
    // If the component unmounts, revoke the object URL
    useEffect(() => {
        return () => {
            if (image) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);

    return (
        <>
            <Head title="Account" />
            <Layout user={user}>
                <SettingsWrapper>
                    <SettingsTopBoard
                        title="Account"
                        desc="Manage your account settings"
                    />
                    <div>
                        <form onSubmit={submit} className="flex gap-2">
                            <div className="flex-1">
                                <div className="flex gap-2 items-center mt-4">
                                    <label htmlFor="username">Username</label>
                                    <FormInput
                                        type="text"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        className="p-4 border border-gray-500 rounded-md w-full"
                                    />
                                </div>
                                {errors.username && (
                                    <span className="text-body-small">
                                        {errors.username}
                                    </span>
                                )}
                                <div className="flex gap-2 items-center mt-4">
                                    <label htmlFor="name">Email</label>
                                    <FormInput
                                        type="text"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="p-4 border border-gray-500 rounded-md w-full"
                                    />
                                </div>
                                {errors.email && (
                                    <span className="text-body-small">
                                        {errors.email}
                                    </span>
                                )}
                                <div className="flex gap-2 items-center mt-4">
                                    <label htmlFor="phone">Phone</label>
                                    <FormInput
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        className="p-4 border border-gray-500 rounded-md w-full"
                                    />
                                </div>
                                {errors.phone && (
                                    <span className="text-body-small">
                                        {errors.phone}
                                    </span>
                                )}
                                <div className="flex gap-2 items-center mt-4">
                                    <label htmlFor="phone">Gender</label>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="size-5"
                                                value="male"
                                                checked={data.gender === "male"}
                                                onChange={(e) =>
                                                    setData(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label>Male</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="size-5"
                                                value="female"
                                                checked={
                                                    data.gender === "female"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label>Female</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="size-5"
                                                value="other"
                                                checked={
                                                    data.gender === "other"
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label>Other</label>
                                        </div>
                                    </div>
                                </div>
                                {errors.gender && (
                                    <span className="text-body-small">
                                        {errors.gender}
                                    </span>
                                )}
                                <div className="flex gap-2 items-center mt-4">
                                    <label htmlFor="date_of_birth">
                                        Date of Birth
                                    </label>
                                    <div className="flex gap-2">
                                        <select
                                            className="p-4 border border-gray-500 rounded-md w-full"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                        >
                                            <option value="">Day</option>
                                            {[...Array(31)].map((_, i) => (
                                                <option
                                                    key={i + 1}
                                                    value={i + 1}
                                                >
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Month Dropdown */}
                                        <select
                                            className="p-4 border border-gray-500 rounded-md w-full"
                                            value={data.month}
                                            onChange={(e) =>
                                                setData("month", e.target.value)
                                            }
                                        >
                                            <option value="">Month</option>
                                            {[
                                                "January",
                                                "February",
                                                "March",
                                                "April",
                                                "May",
                                                "June",
                                                "July",
                                                "August",
                                                "September",
                                                "October",
                                                "November",
                                                "December",
                                            ].map((month, i) => (
                                                <option key={i} value={i + 1}>
                                                    {month}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Year Dropdown */}
                                        <select
                                            className="p-4 border border-gray-500 rounded-md w-full"
                                            value={data.year}
                                            onChange={(e) =>
                                                setData("year", e.target.value)
                                            }
                                        >
                                            <option value="">Year</option>
                                            {[...Array(100)].map((_, i) => {
                                                const year =
                                                    new Date().getFullYear() -
                                                    i;
                                                return (
                                                    <option
                                                        key={year}
                                                        value={year}
                                                    >
                                                        {year}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                {errors.date && (
                                    <span className="text-body-small">
                                        {errors.date}
                                    </span>
                                )}
                                {errors.month && (
                                    <span className="text-body-small">
                                        {errors.month}
                                    </span>
                                )}
                                {errors.year && (
                                    <span className="text-body-small">
                                        {errors.year}
                                    </span>
                                )}
                                <Button
                                    className="mt-8 ml-20 py-4 px-8 bg-accent text-white rounded-md"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Save
                                </Button>
                            </div>
                            <div className="border-l-2 border-gray-500 basis-80 flex flex-col items-center gap-2 justify-center">
                                <img
                                    className="max-w-20"
                                    src={
                                        image ||
                                        (user.avatar &&
                                            `/storage/${user.avatar}`)
                                    }
                                    alt="profile picture"
                                />
                                <label className="cursor-pointer bg-accent text-white px-4 py-2 rounded">
                                    Choose File
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setData("avatar", file);
                                            if (file) {
                                                setImage(
                                                    URL.createObjectURL(file)
                                                );
                                            }
                                        }}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </label>
                                <div>
                                    <p>File size: maximum 1 MB</p>
                                    <p>File type: jpg, jpeg, png</p>
                                </div>
                                {errors.avatar && (
                                    <span className="text-body-small">
                                        {errors.avatar}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </SettingsWrapper>
            </Layout>
        </>
    );
};

export default Account;
