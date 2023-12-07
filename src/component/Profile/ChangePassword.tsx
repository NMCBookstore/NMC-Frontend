import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
const ChangePasswordComponent: React.FunctionComponent = () => {
    let [isOpen, setIsOpen] = useState(false)
    const cancelButtonRef = useRef(null);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <button
                type="button"
                onClick={openModal}
                className=""
            >
                Change Password
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-backdrop" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex height-modal items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mb-4"
                                    >
                                        Change Your Password Here
                                    </Dialog.Title>
                                    <div className="">
                                        <div className="text-left mb-4">
                                            <label
                                                className="block text-[16px] leading-normal mb-2"
                                                htmlFor="oldpassword"
                                            >
                                                Old Password<span>*</span>
                                            </label>
                                            <input
                                                className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                type="text"
                                                name="oldpassword"
                                                placeholder="*******"
                                            />
                                        </div>
                                        <div className="text-left mb-4">
                                            <label
                                                className="block text-[16px] leading-normal mb-2"
                                                htmlFor="newpassword"
                                            >
                                                New Password<span>*</span>
                                            </label>
                                            <input
                                                className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                type="text"
                                                name="newpassword"
                                                placeholder="*******"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="button"
                                            className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                           Save Change
                                        </button>
                                    </div>
                                    <button
                                    className="btn-close absolute top-10 right-10 z-11 focus-visible:outline-0"
                                    onClick={() => closeModal()}
                                    ref={cancelButtonRef}
                                    >
                                    <i className="bdx-close"></i>
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ChangePasswordComponent;