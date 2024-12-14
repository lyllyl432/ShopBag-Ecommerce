import React from "react";
import Layout from "../components/Layout";
import { Head } from "@inertiajs/react";
import SettingsTopBoard from "../components/SettingsTopBoard";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useForm } from "@inertiajs/react";
import AddressList from "../components/AddressList";
import SettingsWrapper from "../components/SettingsWrapper";

const Address = ({ user, addresses }) => {
    const { post, data, setData, processing, progress, errors } = useForm({
        full_name: "",
        full_address: "",
        postal_code: "",
        street_address: "",
        type: "",
        is_default: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("address.store"));
        document.getElementById("my_modal").close();
    };
    return (
        <Layout user={user}>
            <Head title="Address" />
            <SettingsWrapper>
                <SettingsTopBoard title="My Addresses" desc="">
                    <button
                        className="btn"
                        onClick={() =>
                            document.getElementById("my_modal").showModal()
                        }
                    >
                        Add New Address
                    </button>
                    <dialog id="my_modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">New Address</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        name="full_name"
                                        placeholder="Full Name"
                                        required
                                        className="p-4 border border-gray-300 rounded-md w-full"
                                        onChange={(e) =>
                                            setData("full_name", e.target.value)
                                        }
                                    />
                                    {errors.full_name && (
                                        <p className="text-red-500">
                                            {errors.full_name}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        name="full_address"
                                        placeholder="Full Address"
                                        required
                                        className="p-4 border border-gray-300 rounded-md w-full"
                                        onChange={(e) =>
                                            setData(
                                                "full_address",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.full_address && (
                                        <p className="text-red-500">
                                            {errors.full_address}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        name="postal_code"
                                        placeholder="Postal Code"
                                        required
                                        className="p-4 border border-gray-300 rounded-md w-full"
                                        onChange={(e) =>
                                            setData(
                                                "postal_code",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.postal_code && (
                                        <p className="text-red-500">
                                            {errors.postal_code}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <FormInput
                                        type="text"
                                        name="street_address"
                                        placeholder="Street Address"
                                        required
                                        className="p-4 border border-gray-300 rounded-md w-full"
                                        onChange={(e) =>
                                            setData(
                                                "street_address",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.street_address && (
                                        <p className="text-red-500">
                                            {errors.street_address}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <div>
                                        <label htmlFor="">Label as</label>
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <div>
                                            <input
                                                type="radio"
                                                name="type"
                                                id=""
                                                value="home"
                                                onChange={(e) =>
                                                    setData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label className="ml-2" htmlFor="">
                                                Home
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="type"
                                                id=""
                                                value="office"
                                                onChange={(e) =>
                                                    setData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label className="ml-2" htmlFor="">
                                                Office
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type="radio"
                                                name="type"
                                                id=""
                                                value="pickup"
                                                onChange={(e) =>
                                                    setData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label className="ml-2" htmlFor="">
                                                Pickup
                                            </label>
                                        </div>
                                    </div>
                                    {errors.type && (
                                        <p className="text-red-500">
                                            {errors.type}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="is_default"
                                        id=""
                                        onChange={(e) =>
                                            setData(
                                                "is_default",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <label htmlFor="">Set as default</label>
                                    {errors.is_default && (
                                        <p className="text-red-500">
                                            {errors.is_default}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <Button
                                        className="w-full bg-accent text-white p-4 rounded-md"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        {progress ? "Submitting..." : "Submit"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </SettingsTopBoard>
                {addresses.map((address) => (
                    <AddressList key={address.id} address={address} />
                ))}
            </SettingsWrapper>
        </Layout>
    );
};

export default Address;
