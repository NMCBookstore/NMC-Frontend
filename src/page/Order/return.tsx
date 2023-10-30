import React from 'react';
import { Link } from 'react-router-dom';
import OrderBill from "../../component/OrderBill";
import Breadcrumb from "../../component/Breadcrumb";
import { orderReturn } from '../../assets/img';

const OrderReturn = () => {
	const pathAfterDomain = window.location.pathname;

	return (
		<div className="order-info order-payment order-return mt-[76px]">
			<div className="container-nmc mx-auto">
				<Breadcrumb></Breadcrumb>
				<div className="w-full flex justify-center mb-8 order-return__img">
					<img className="" src={orderReturn} alt="orderReturn" />
				</div>
				<h1>You Have Successfully Ordered</h1>
				<div className="order-info__form__btn flex justify-between items-center">
					<Link to="/">
						Back To Home Page
					</Link>
				</div>
				<div className="flex flex-wrap lg:mx-0 mx-[-12px]">
					<div className="md:w-full w-[50%] px-3 md:mb-6">
						<div className="mb-10">
							<div className="mb-6">
								<div className="order-return__list">
									<div className="w-full">
										<div className="order-return__list__item">
											<p className="order-return__list__item__label">Order Code:</p>
											<p className="order-return__list__item__input">CITIC0123</p>
										</div>
									</div>
									<div className="w-full">
										<div className="order-return__list__item">
											<p className="order-return__list__item__label">Date Of The Order:</p>
											<p className="order-return__list__item__input">20-07-2023</p>
										</div>
									</div>
									<div className="w-full">
										<div className="order-return__list__item">
											<p className="order-return__list__item__label">Order Status:</p>
											<p className="order-return__list__item__input">On Processing</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-second-color" >Shipment Details</h2>
							<div className="order-info__form">
								<div className="flex flex-wrap justify-between gap-y-3 p-5 rounded-[24px] mb-6">
									<div className="sm:w-full w-[49%]">
										<div className="input-group">
											<span className="input-group-text align-items-start"><i className="bdx-user inline-flex items-center"></i></span>
											<p className="form-control">Full Name</p>
										</div>
									</div>
									<div className="sm:w-full w-[49%]">
										<div className="input-group">
											<span className="input-group-text align-items-start"><i className="bdx-phone inline-flex items-center"></i></span>
											<p className="form-control">Phone Number</p>
										</div>
									</div>
									<div className="w-full">
										<div className="input-group">
											<span className="input-group-text align-items-start"><i className="bdx-email inline-flex items-center"></i></span>
											<p className="form-control">Email</p>
										</div>
									</div>
									<div className="w-full">
										<div className="input-group">
											<span className="input-group-text align-items-start"><i className="bdx-location inline-flex items-center"></i></span>
											<p className="form-control">Address</p>
										</div>
									</div>
									<div className="w-full">
										<div className="input-group input-group__textarea">
											<span className="input-group-text align-items-start"><i className="bdx-note inline-flex items-center"></i></span>
											<p className="form-control">Your note content Your note content Your note content Your note content Your note content Your note content</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:w-full w-[50%] px-3">
						<OrderBill></OrderBill>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderReturn;