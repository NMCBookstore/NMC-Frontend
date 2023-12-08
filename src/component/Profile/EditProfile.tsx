import { Combobox, Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { defaultAvatar } from "../../assets/img";

interface Person {
    id: number;
    name: string;
}
const people: Person[] = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Other' },
];

const EditProfileComponent: React.FunctionComponent = () => {
    let [isOpen, setIsOpen] = useState(false)
    const cancelButtonRef = useRef(null);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const [city, setCity] = useState<Person>(people[0]);
    const [query, setQuery] = useState<string>('');
    const filteredPeople =  query === ''
                                ? people
                                : people.filter((person) =>
                                    person.name
                                        .toLowerCase()
                                        .replace(/\s+/g, '')
                                        .includes(query.toLowerCase().replace(/\s+/g, ''))
                                );
    return (
        <div>
            <button
                type="button"
                onClick={openModal}
                className=""
            >
                Edit Profile
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
                        <div className="flex height-modal edit-profile items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full min-w-[50vw] max-w-xl transform rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="mb-4"
                                    >
                                        Edit Your Profile
                                    </Dialog.Title>
                                    <div>
                                        <div className="mb-4">
                                            <img src={defaultAvatar} alt="avatar" />
                                            <label> 
                                                <i className="bdx-note"></i>
                                                <input type="file"></input>
                                            </label> 
                                        </div>
                                        <div className="text-left mb-4">
                                            <label
                                                className="block text-[16px] leading-normal mb-2"
                                                htmlFor="name"
                                            >
                                                Full Name<span>*</span>
                                            </label>
                                            <input
                                                className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                type="text"
                                                name="name"
                                                placeholder="Nguyen Van A"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-left mb-4">
                                                <label
                                                    className="block text-[16px] leading-normal mb-2"
                                                    htmlFor="age"
                                                >
                                                    Age<span>*</span>
                                                </label>
                                                <input
                                                    className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                    type="text"
                                                    name="age"
                                                    placeholder="18"
                                                />
                                            </div>
                                            <div className="text-left mb-4">
                                                <label
                                                    className="block text-[16px] leading-normal mb-2"
                                                    htmlFor="Gender"
                                                >
                                                    Gender<span>*</span>
                                                </label>
                                                <Combobox value={city} onChange={setCity}>
                                                    <div className="relative w-full md:grow">
                                                        <div className="relative md:grow border border-[#BFBFBF] border-solid w-full cursor-default overflow-hidden rounded-full text-left shadow-md focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                                                            <Combobox.Input
                                                                className="w-full md:grow border-none py-3 px-6 text-[16px] leading-[150%] focus:ring-0 capitalize  bg-[transparent] focus:outline-none"
                                                                displayValue={(person: Person) => person.name}
                                                                onChange={(event) => setQuery(event.target.value)}
                                                            />
                                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pb-6 rotate-[-90deg]">
                                                                <i className="bdx-caret "></i>
                                                            </Combobox.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                            afterLeave={() => setQuery('')}
                                                        >
                                                            <Combobox.Options className="absolute mt-1 max-h-[264px] w-fit overflow-auto rounded-md bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[100]">
                                                                {filteredPeople.length === 0 && query !== '' ? (
                                                                    <div className="relative cursor-default select-none px-4 py-2 ">
                                                                        Nothing found.
                                                                    </div>
                                                                ) : (
                                                                    filteredPeople.map((person) => (
                                                                        <Combobox.Option
                                                                            key={person.id}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 px-6 rounded-xl ${active ? 'bg-primary text-white' : ''
                                                                                }`
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ selected, active }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block leading-[24px] truncate`}
                                                                                    >
                                                                                        {person.name}
                                                                                    </span>
                                                                                </>
                                                                            )}
                                                                        </Combobox.Option>
                                                                    ))
                                                                )}
                                                            </Combobox.Options>
                                                        </Transition>
                                                    </div>
                                                </Combobox>
                                            </div>
                                        </div>
                                        <div className="text-left mb-4">
                                            <label
                                                className="block text-[16px] leading-normal mb-2"
                                                htmlFor="Email"
                                            >
                                                Email<span>*</span>
                                            </label>
                                            <input
                                                className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                type="text"
                                                name="Email"
                                                placeholder="abc@gmail.com"
                                            />
                                        </div>
                                        <div className="text-left mb-4">
                                            <label
                                                className="block text-[16px] leading-normal mb-2"
                                                htmlFor="Phone Number"
                                            >
                                                Phone Number<span>*</span>
                                            </label>
                                            <input
                                                className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                                                type="text"
                                                name="Phone Number"
                                                placeholder="0123456789"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="button"
                                            className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Save Changes
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

export default EditProfileComponent;