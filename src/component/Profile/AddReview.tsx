import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import StarRating from "./Rating";
const AddReviewComponent: React.FunctionComponent = () => {
    let [isOpen, setIsOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    let [starNumber, setStarNumber] = useState(0);
    


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleRatingChange = (newRating: number) => {
        setStarNumber(newRating);
    };
    return (
        <div className="profile__user__right__adress">
            <button
                type="button"
                onClick={openModal}
                className=""
            >
                Review
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
                                <Dialog.Panel className="w-full lg:max-w-[100vw] max-w-[80vw] min-w-[50vw] transform rounded-2xl bg-white sm:px-4 p-10 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mb-4 modal__title"
                                    >
                                        Add You Review
                                    </Dialog.Title>
                                    <StarRating outOf={5} onChange={handleRatingChange} />
                                    <textarea className="w-full sm:px-3 p-6 textarea_edit" rows={10}></textarea>
                                    <div className="mt-8">
                                        <button
                                            type="button"
                                            className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Post Review
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

export default AddReviewComponent;