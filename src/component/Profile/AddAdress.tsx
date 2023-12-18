import { Combobox, Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { City, District } from "../../interface/Address";
import {
  useCreateAddressMutation,
  useGetAddressDetailQuery,
} from "../../services/address/addressAPI";

interface AddressProps {
  mode: string;
  addressId?: number;
  amountAddress: number;
  citiesData: City[];
  districtData: District[];
  idCity: number | null;
  idDistrict: number | null;
  setIdCity: React.Dispatch<React.SetStateAction<number | null>>;
  setIdDistrict: React.Dispatch<React.SetStateAction<number | null>>;
}

const AddAdressComponent: React.FunctionComponent<AddressProps> = ({
  mode,
  addressId,
  amountAddress,
  citiesData,
  districtData,
  idCity,
  idDistrict,
  setIdCity,
  setIdDistrict,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  const openModal = () => {
    const isCreateMode = mode === "create";

    const canCreateMoreAddresses = amountAddress > 4;

    isCreateMode
      ? canCreateMoreAddresses
        ? toast.error("You can't create more than 5 addresses")
        : setIsOpen(true)
      : setIsOpen(true);
  };

  const [select, setSelect] = useState<City>(citiesData[0]);
  const [district, setDistrict] = useState<District>(districtData[0]);
  const [query, setQuery] = useState<string>("");

  const [inputNewAddress, setInputNewAddress] = useState<string>("");

  const [addAddress, { isError, isLoading }] = useCreateAddressMutation();
  const { data: addressDetail, isFetching } = useGetAddressDetailQuery(
    Number(addressId)
  );
  
  const commonCity = citiesData?.filter(
    (item) => item.id === addressDetail?.city_id
  )?.[0]?.name;

  const commonCityId = citiesData?.filter(
    (item) => item.id === addressDetail?.city_id
  )?.[0]?.id;

  const handleCreateAddress = async () => {
    const v = await addAddress({
      address: inputNewAddress,
      city_id: idCity,
      district_id: idDistrict,
    });
    if ("error" in v) {
      toast.error("Failed to add address");
    } else {
      toast.success("Address created");
      closeModal();
    }
  };

  const filteredCity =
    query === ""
      ? citiesData
      : citiesData.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const filteredDistrict =
    query === ""
      ? districtData
      : districtData.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div>
      {mode === "create" ? (
        <button
          disabled={amountAddress > 5}
          type="button"
          onClick={openModal}
          className=""
        >
          Add address
        </button>
      ) : (
        <i onClick={openModal} className="bdx-note"></i>
      )}

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
                  {mode === "create" ? (
                    <Dialog.Title as="h3" className="mb-4">
                      Add Your Address To Delivery
                    </Dialog.Title>
                  ) : (
                    <Dialog.Title as="h3" className="mb-4">
                      Edit your address
                    </Dialog.Title>
                  )}
                  <div className="">
                    <div className="text-left mb-4">
                      <label
                        className="block text-[16px] leading-normal mb-2"
                        htmlFor="name"
                      >
                        Address<span>*</span>
                      </label>
                      <input
                        className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                        type="text"
                        name="adress"
                        placeholder="Your address"
                        onChange={(e) => setInputNewAddress(e.target.value)}
                      />
                    </div>
                    <div className="text-left mb-4">
                      <label
                        className="block text-[16px] leading-normal mb-2"
                        htmlFor="City"
                      >
                        City<span>*</span>
                      </label>
                      <Combobox defaultValue={commonCity}>
                        <div className="relative w-full md:grow">
                          <div className="relative md:grow border border-[#BFBFBF] border-solid w-full cursor-default overflow-hidden rounded-full text-left shadow-md focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                            <Combobox.Input
                              className="w-full md:grow border-none py-3 px-6 text-[16px] leading-[150%] focus:ring-0 capitalize  bg-[transparent] focus:outline-none"
                              displayValue={(city: City) =>
                                city?.name || commonCity
                              }
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="Select or search city..."
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
                            afterLeave={() => setQuery("")}
                          >
                            <Combobox.Options className="absolute mt-1 max-h-[264px] w-fit overflow-auto rounded-md bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[100]">
                              {filteredCity.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none px-4 py-2 ">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredCity.map((city) => (
                                  <Combobox.Option
                                    key={city.id}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 px-6 rounded-xl ${
                                        active ? "bg-primary text-white" : ""
                                      }`
                                    }
                                    value={city}
                                    onClick={() => {
                                      setIdCity(city?.id);
                                    }}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block leading-[24px] truncate`}
                                        >
                                          {city.name}
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
                    <div className="text-left mb-4">
                      <label
                        className="block text-[16px] leading-normal mb-2"
                        htmlFor="City"
                      >
                        District<span>*</span>
                      </label>
                      <Combobox defaultValue={addressDetail?.district}>
                        <div className="relative w-full md:grow">
                          <div className="relative md:grow border border-[#BFBFBF] border-solid w-full cursor-default overflow-hidden rounded-full text-left shadow-md focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                            <Combobox.Input
                              className="w-full md:grow border-none py-3 px-6 text-[16px] leading-[150%] focus:ring-0 capitalize  bg-[transparent] focus:outline-none"
                              displayValue={(district: District) =>
                                district?.name ||String(addressDetail?.district)
                              }
                              placeholder="Select or search district..."
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
                            afterLeave={() => setQuery("")}
                          >
                            <Combobox.Options className="absolute mt-1 max-h-[264px] w-fit overflow-auto rounded-md bg-white p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[100]">
                              {filteredDistrict.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none px-4 py-2 ">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredDistrict.map((district) => (
                                  <Combobox.Option
                                    key={district.id}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 px-6 rounded-xl ${
                                        active ? "bg-primary text-white" : ""
                                      }`
                                    }
                                    value={district}
                                    onClick={() => setIdDistrict(district?.id)}
                                  >
                                    {/* {({ selected, active }) => ( */}
                                    <>
                                      <span
                                        className={`block leading-[24px] truncate`}
                                      >
                                        {district?.name}
                                      </span>
                                    </>
                                    {/* )} */}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                      disabled={isLoading}
                      onClick={handleCreateAddress}
                    >
                      {isLoading ? "Creating Address..." : "Add Address"}
                    </button>
                  </div>
                  <button
                    className="btn-close absolute top-10 right-10 z-11 focus-visible:outline-0"
                    onClick={() => {
                      setIdCity(null);
                      setIdDistrict(null);
                      closeModal();
                      console.log("close clicked");
                    }}
                    ref={cancelButtonRef}
                    disabled={isLoading}
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

export default AddAdressComponent;
