import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderReturn } from "../../assets/img";
import OrderBillCompleted from "../../component/OrderBillCompleted";
import { selectCurrentUser } from "../../features/auth/authSlice";
import { useGetAllOrderQuery } from "../../services/order/orderAPI";

const OrderReturn: React.FunctionComponent = () => {
  const pathAfterDomain = window.location.pathname;
  const location = useLocation();
  const navigate = useNavigate();

  const dataPayment = location.state?.data;
  const userInfo = useSelector(selectCurrentUser);

  const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  const initialRenderRef = useRef(true);

  const { data: order = [] } = useGetAllOrderQuery();

  console.log(dataPayment);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (!dataPayment && !isToastDisplayed) {
      setIsToastDisplayed(true);
      navigate("/");
      toast.error("You haven't paid for the product");
    }
  }, [dataPayment, isToastDisplayed, navigate]);

  return (
    <div className="order-info order-payment order-return mt-[76px]">
      <div className="container-nmc mx-auto">
        <div className="w-full flex justify-center mb-8 order-return__img">
          <img className="" src={orderReturn} alt="orderReturn" />
        </div>
        <h1>You Have Successfully Ordered</h1>
        <div className="order-info__form__btn flex justify-between items-center">
          <button onClick={() => navigate("/")}>Back To Home Page</button>
        </div>
        <div className="flex flex-wrap lg:mx-0 mx-[-12px]">
          <div className="md:w-full w-[50%] px-3 md:mb-6">
            <div className="mb-10">
              <div className="mb-6">
                <div className="order-return__list">
                  <div className="w-full">
                    <div className="order-return__list__item">
                      <p className="order-return__list__item__label">
                        Order Code:
                      </p>
                      <p className="order-return__list__item__input">
                        {dataPayment?.id}NMXCID
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="order-return__list__item">
                      <p className="order-return__list__item__label">
                        Date Of The Order:
                      </p>
                      <p className="order-return__list__item__input">
                        {dataPayment?.created_at}
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="order-return__list__item">
                      <p className="order-return__list__item__label">
                        Order Status:
                      </p>
                      <p className="order-return__list__item__input">
                        {dataPayment?.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-second-color">Shipping Details</h2>
              <div className="order-info__form">
                <div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-user inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.full_name}</p>
                    </div>
                  </div>
                  <div className="sm:w-full w-[49%]">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-phone inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.phone_number}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-email inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{userInfo?.email}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-location inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{dataPayment?.to_address}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-group input-group__textarea">
                      <span className="input-group-text align-items-start">
                        <i className="bdx-note inline-flex items-center"></i>
                      </span>
                      <p className="form-control">{dataPayment?.note ? dataPayment?.note : "You have no note" }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-full w-[50%] px-3">
            <OrderBillCompleted dataPayment={dataPayment} order={order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReturn;
