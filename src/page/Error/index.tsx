import React from "react";
import { page404 } from "../../assets/img";
import { Link } from "react-router-dom";

const NotFound: React.FunctionComponent = () => {

  return (
    <div className="bg-[#FBF4EA] flex flex-col items-center py-[104px] px-3 mt-[76px]">
      <div>
        <img className="mb-4" src={page404} alt="404 page" />
        <h1 className="text-primary text-center mb-6">Page Not Found</h1>
        <p className="text-[#707070] text-[16px] text-center mb-8">
          The page you are looking for is not available or has been deleted
        </p>
      </div>
      <div>
        <Link
          to="/"
          className="px-6 py-3 uppercase rounded-xl border border-primary border-solid text-primary font-semibold ease-out duration-300 hover:text-white hover:border-orange-orange-6 hover:bg-orange-orange-6"
        >
          Go Back To HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
