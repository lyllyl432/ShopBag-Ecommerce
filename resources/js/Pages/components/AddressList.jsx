import React from "react";
import { useForm } from "@inertiajs/react";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useEffect } from "react";
const AddressList = ({ address }) => {
    const {
        put,
        data,
        setData,
        processing,
        progress,
        errors,
        delete: destroy,
    } = useForm({
        full_name: address ? address.full_name : "",
        full_address: address ? address.full_address : "",
        postal_code: address ? address.postal_code : "",
        street_address: address ? address.street_address : "",
        type: address ? address.type : "",
        is_default: address ? address.is_default : false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("address.update", { id: address.id }));
        document.getElementById(`my_modal_${address.id}`).close();
    };
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this address?")) {
            destroy(route("address.destroy", { id: address.id }));
        }
    };
    // Update the form data when the address prop changes
    useEffect(() => {
        setData({
            full_name: address.full_name,
            full_address: address.full_address,
            postal_code: address.postal_code,
            street_address: address.street_address,
            type: address.type,
            is_default: address.is_default,
        });
    }, [address]);
    return (
        <>
            <div className="flex justify-between items-center mt-4">
                <div className="max-w-md">
                    <div>
                        <h1>
                            {address.full_name}{" "}
                            {address.phone_number
                                ? `| ${address.phone_number}`
                                : ""}
                        </h1>
                    </div>
                    <div>
                        <p>{address.street_address}</p>
                        <p>
                            {address.full_address + " " + address.postal_code}
                        </p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {address.is_default ? (
                            <div
                                className={
                                    address.is_default
                                        ? "bg-blue-500 text-white p-2 rounded-md"
                                        : "bg-gray-200 text-gray-500 p-2 rounded-md"
                                }
                            >
                                Default
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <div className="bg-gray-200 text-gray-500 p-2 rounded-md">
                                    Pickup
                                </div>
                                <div className="bg-gray-200 text-gray-500 p-2 rounded-md">
                                    Return Address
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => {
                            document
                                .getElementById(`my_modal_${address.id}`)
                                .showModal();
                        }}
                    >
                        Edit
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <dialog id={`my_modal_${address.id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Address</h3>
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
                                value={data.full_name || ""}
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
                                    setData("full_address", e.target.value)
                                }
                                value={data.full_address}
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
                                    setData("postal_code", e.target.value)
                                }
                                value={data.postal_code}
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
                                    setData("street_address", e.target.value)
                                }
                                value={data.street_address}
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
                                            setData("type", e.target.value)
                                        }
                                        checked={data.type === "home"}
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
                                            setData("type", e.target.value)
                                        }
                                        checked={data.type === "office"}
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
                                            setData("type", e.target.value)
                                        }
                                        checked={data.type === "pickup"}
                                    />
                                    <label className="ml-2" htmlFor="">
                                        Pickup
                                    </label>
                                </div>
                            </div>
                            {errors.type && (
                                <p className="text-red-500">{errors.type}</p>
                            )}
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="is_default"
                                id=""
                                onChange={(e) =>
                                    setData("is_default", e.target.checked)
                                }
                                checked={data.is_default}
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
        </>
    );
};

export default AddressList;
