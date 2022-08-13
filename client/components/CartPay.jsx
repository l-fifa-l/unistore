// Cart checkout component with coupon field

import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CartPay() {
  const [value, setValue] = useState('');
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  let discountPrice = 0;

  // get Value of Coupon Code
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // checkout functionality
  const checkout = async () => {
    // for every 5th item, add a discount code is generated
    const n = 5;

    // generate discount codes for every nth item
    const { data } = await axios.get(`http://localhost:5000/api/admin`);

    const lastCouponCode = data[0].discountCoupons.at(-1);

    // for every nth item, add a discount code
    const genCoupon = (data[0].totalItemPurchased % n) + itemsInCart.length;
    if (genCoupon >= n) {
      const { data } = await axios.get(
        `http://localhost:5000/api/admin/gen-coupon`
      );

      // coupon is valid discount of 10% if applied
      // else coupon is invalid

      if (value === lastCouponCode) {
        alert('Discount Code Applied');
        discountPrice = parseFloat((totalPrice * 0.1).toFixed(2));
      }
    }

    // add order to database
    const orderdata = await axios.post(`http://localhost:5000/api/orders`, {
      allProduct: itemsInCart,
      user: '62f4deea8e473453fd21d01a',
      amount: (totalPrice - discountPrice).toFixed(2),
    });

    // update Admin Api
    const admindata = await axios.post(`http://localhost:5000/api/admin`, {
      totalItemPurchased: itemsInCart.length,
      totalAmount: (totalPrice - discountPrice).toFixed(2),
      totalDiscountAmount: discountPrice,
    });
  };
  return (
    <>
      <div className=" p-5 bg-gray-800 rounded overflow-visible">
        <span className="text-xl font-medium text-gray-100 block pb-3">
          Card Details
        </span>
        <div className="py-20 px-2">
          <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full p-3">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-white text-black h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                    onChange={handleChange}
                    value={value}
                  />
                  <button className="h-10 rounded bg-black absolute top-2 text-sm right-2 px-3 text-white hover:bg-gray-900 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="order-placed-modal"
          className="btn modal-button btn-primary btn-block"
          onClick={checkout}
        >
          Check Out
        </label>
        {/* Confirm Model */}
        <input
          type="checkbox"
          id="order-placed-modal"
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations!! Your order has been placed.
            </h3>
            <p className="py-4">
              You will receive an email invoice shortly. Thank you for your
              order. You can view your order history and details on your account
              page.
            </p>
            <div className="modal-action">
              <label
                onClick={() => window.location.reload(false)}
                htmlFor="order-placed-modal"
                className="btn"
              >
                OK
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
