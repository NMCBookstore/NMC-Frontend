import { Combobox, Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { defaultAvatar } from "../../assets/img";
import { useSelector } from "react-redux";
import {
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
  selectCurrentUser,
  setCredentials,
} from "../../features/auth/authSlice";
import { isValidImage } from "../../utils/helper";
import toast from "react-hot-toast";
import { User } from "../../interface/User";
import {
  useGetUserQuery,
  useSendVerifyEmailMutation,
  useUpdateUserMutation,
} from "../../services/user/userAPI";
import { useDispatch } from "react-redux";

interface Person {
  id: number;
  name: string;
}
const people: Person[] = [
  { id: 1, name: "Male" },
  { id: 0, name: "Female" },
  { id: 2, name: "Other" },
];

const EditProfileComponent: React.FunctionComponent = () => {
  const { data: userData } = useGetUserQuery();

  const user = useSelector(selectCurrentUser) as User;
  const [userInfo, setUserInfo] = useState(user);
  const token = useSelector(selectCurrentAccessToken);
  const refresh_token = useSelector(selectCurrentRefreshToken);

  const dispatch = useDispatch();

  let [isOpen, setIsOpen] = useState(false);
  const [idGender, setIdGender] = useState(1);

  const cancelButtonRef = useRef(null);

  const [avatar, setAvatar] = useState<any | undefined>();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    if (isValidImage(file)) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    } else {
      toast.error("Only  png, jpeg, jpg files accepted");
    }
    console.log(file);
  };

  //Update user info
  // const 
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const handleUpdateInfo = async () => {
    const formData = new FormData();
    const regex = /^0[0-9]{9}$/;
    const regex2 = /^\+84[0-9]{9}$/;
    if(!userInfo.full_name){
      toast.error("Name is required!");
      return;
    }
    if(!userInfo.phone_number){
      toast.error("Phone is required!");
      return;
    }
    if(regex.test(userInfo.phone_number)||regex2.test(userInfo.phone_number)){
      toast.error("Phone invalid!");
      return;
    }
    if(!userInfo.age.toString()){
      toast.error("Age is required!");
      return;
    }
    if(!userInfo.sex.toString()){
      toast.error("Gender is required!");
      return;
    }
    formData.append("full_name", userInfo.full_name);
    formData.append("phone_number", userInfo.phone_number);
    formData.append("age", userInfo.age.toString());
    formData.append("sex", userInfo.sex);
    if (avatar) {
      formData.append("image", avatar);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    const v = await updateProfile(formData);
    if ("data" in v) {
      const { ...user } = v.data;
      dispatch(
        setCredentials({
          user,
          access_token: token,
          refresh_token: refresh_token,
        })
      );
      toast.success("Profile updated");
      closeModal();
    } else {
      console.log("can't dispatch credentials");
      toast.error("Update failed");
    }
  };

  //Send verify email
  const [sendEmail] = useSendVerifyEmailMutation();
  
  const sendVerifyEmail = async () => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
    const v = await sendEmail() ;
    if ("data" in v) {
      toast("Please check your email", {
        icon: "📬",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [city, setCity] = useState<Person>(people[0]);
  const [query, setQuery] = useState<string>("");
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div>
      <button type="button" onClick={openModal} className="">
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
                  <Dialog.Title as="h3" className="mb-4">
                    Edit Your Profile
                  </Dialog.Title>
                  <div>
                    <div className="mb-4">
                      <img
                        src={avatar?.preview ? avatar.preview : user?.image}
                        alt="avatar"
                      />
                      <label>
                        <i className="bdx-note"></i>
                        <input
                          hidden
                          type="file"
                          onChange={handlePreviewAvatar}
                        />
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
                        defaultValue={userInfo?.full_name}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            full_name: e.target.value,
                          })
                        }
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
                        {userInfo?.age === 0 ? (
                          <input
                            className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                            type="text"
                            name="age"
                            placeholder="Your age"
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                age: Number(e.target.value),
                              })
                            }
                          />
                        ) : (
                          <input
                            className="rounded-full border-[1px] border-[#BFBFBF] border-solid px-4 py-3 w-full shadow-md"
                            type="text"
                            name="age"
                            placeholder="Your age"
                            defaultValue={userInfo?.age}
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                age: Number(e.target.value),
                              })
                            }
                          />
                        )}
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
                                onChange={(event) =>
                                  setQuery(event.target.value)
                                }
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
                                {filteredPeople.length === 0 && query !== "" ? (
                                  <div className="relative cursor-default select-none px-4 py-2 ">
                                    Nothing found.
                                  </div>
                                ) : (
                                  filteredPeople.map((person) => (
                                    <Combobox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-6 rounded-xl ${
                                          active ? "bg-primary text-white" : ""
                                        }`
                                      }
                                      value={person}
                                      onClick={() =>
                                        setUserInfo({
                                          ...userInfo,
                                          sex: String(person.id),
                                        })
                                      }
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
                        value={userInfo?.email}
                        disabled
                      />
                      {userData?.is_email_verified ? (
                        <button disabled>Your email has been verified</button>
                      ) : (
                        <button ref={buttonRef} onClick={sendVerifyEmail} className="verify-email">
                          Your email is not verified, click here to verify
                        </button>
                      )}
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
                        placeholder="Your phone number"
                        defaultValue={userInfo?.phone_number}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="w-full py-3 px-6 block rounded-[12px] bg-orange-orange-4 hover:bg-orange-orange-6 focus:outline-none"
                      onClick={handleUpdateInfo}
                      disabled={isLoading}
                    >
                      {isLoading ? "Updating..." : "Save Changes"}
                    </button>
                  </div>
                  <button
                    className="btn-close absolute top-10 right-10 z-11 focus-visible:outline-0"
                    disabled={isLoading}
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
