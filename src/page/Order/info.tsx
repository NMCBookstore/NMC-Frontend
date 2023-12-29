import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderBill from "../../component/OrderBill";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { setAddressInfo, setNoteInfo } from "../../features/cart/cartSlice";
import { useGetListAddressQuery } from "../../services/address/addressAPI";

const OrderInfo: React.FunctionComponent = () => {
  const pathAfterDomain = window.location.pathname;

  const { data: address = [] } = useGetListAddressQuery();

  const [userAddress, setUserAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);

  const [note, setNote] = useState("");

  const handleNote = () => {
    dispatch(setNoteInfo(note));
  };

  const handleAddress = () => {
    dispatch(setAddressInfo(userAddress));
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    handleNote();
    if (userAddress) {
      handleAddress();
      navigate("/user/order/payment");
    } else {
      toast.error("You must provide an address");
    }
  };

  return (
    <div className="order-info mt-[76px]">
      <div className="container-nmc mx-auto">
        <div className="flex flex-wrap lg:mx-0 mx-[-12px]">
          <div className="md:w-full w-[50%] px-3 md:mb-6">
            <h1>Shipping Details</h1>
            <form className="order-info__form">
              <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                <div className="sm:w-full w-[49%]">
                  <div className="input-group">
                    <span className="input-group-text align-items-start">
                      <i className="bdx-user inline-flex items-center"></i>
                    </span>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      value={user?.full_name}
                    ></input>
                  </div>
                </div>
                <div className="sm:w-full w-[49%]">
                  <div className="input-group">
                    <span className="input-group-text align-items-start">
                      <i className="bdx-phone inline-flex items-center"></i>
                    </span>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      value={user?.phone_number}
                    ></input>
                  </div>
                </div>
                <div className="w-full">
                  <div className="input-group">
                    <span className="input-group-text align-items-start">
                      <i className="bdx-email inline-flex items-center"></i>
                    </span>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={user?.email}
                    ></input>
                  </div>
                </div>
                <div className="w-full">
                  <div className="input-group">
                    <span className="input-group-text align-items-start">
                      <i className="bdx-location inline-flex items-center"></i>
                    </span>
                    <select
                      className="form-control"
                      onClick={(e) =>
                        setUserAddress((e.target as HTMLSelectElement).value)
                      }
                    >
                      <option disabled selected value="">
                        Choose an address
                      </option>
                      {address?.map((item, index) => (
                        <React.Fragment key={index}>
                          <option
                            value={`${item.address}, ${item.district}, ${item.city}`}
                          >
                            {`${item.address}, ${item.district}, ${item.city}`}
                          </option>
                        </React.Fragment>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <div className="input-group input-group__textarea">
                    <span className="input-group-text align-items-start">
                      <i className="bdx-note inline-flex items-center"></i>
                    </span>
                    <textarea
                      className="form-control"
                      placeholder="Note..."
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="order-info__form__btn flex justify-between items-center">
                <a href="javascript:history.back()">Return</a>
                <button
                  onClick={(e) => {
                    handleNext(e);
                  }}
                >
                  Accept
                  <i className="bdx-cart"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-full w-[50%] px-3">
            <OrderBill></OrderBill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
