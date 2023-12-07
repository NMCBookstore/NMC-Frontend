import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
const AddBlogComponent: React.FunctionComponent = () => {
    let [isOpen, setIsOpen] = useState(false)
    const cancelButtonRef = useRef(null);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="profile__user__right__adress">
            <button
                type="button"
                onClick={openModal}
                className=""
            >
                Add Blog
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
                                        className="mb-4"
                                    >
                                        Add You Blog
                                    </Dialog.Title>
                                    <Editor
                                        apiKey='fjo87umyn28bhlog6ey9ym0j3av357syryjwrnyltl215r8u'
                                        init={{
                                            plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                            tinycomments_mode: 'embedded',
                                            tinycomments_author: 'Author name',
                                            mergetags_list: [
                                                { value: 'First.Name', title: 'First Name' },
                                                { value: 'Email', title: 'Email' },
                                            ],
                                            ai_request: ( respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                        }}
                                        initialValue="Welcome to TinyMCE!"
                                    />

                                    <div className="mt-8">
                                        <button
                                            type="button"
                                            className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Create Blog
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

export default AddBlogComponent;