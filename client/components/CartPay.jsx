import React from 'react';

export default function CartPay() {
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
                    name=""
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
              <label htmlFor="order-placed-modal" className="btn">
                OK
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
