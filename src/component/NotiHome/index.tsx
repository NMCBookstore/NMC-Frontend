import React from "react";
import { logo } from "../../assets/img";
const NoteNotify: React.FunctionComponent = () => {
    return (
        <div className="notiHome bg-primary py-5">
            <div className="mx-auto px-3 container-nmc flex flex-wrap">
                <div className="w-1/3 sm:w-full flex justify-center sm:mb-4">
                    <div className="w-1/2 flex justify-center items-center">
                        <img className="max-h-[120px]" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="w-2/3 sm:w-full flex items-center">
                    <p className="pl-6 sm:p-0 text-white text-[16px] sm:text-[14px] leading-[24px] sm:text-center sm:border-0 border-l-2 border-[#FFCA41] border-solid">
                        At NMC, we're more than just a bookstore; we're a community of book enthusiasts, scholars, and lifelong learners. Our mission is to provide you with a diverse selection of books that cater to your interests, whether you're a seasoned bibliophile or a student embarking on an academic journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NoteNotify;