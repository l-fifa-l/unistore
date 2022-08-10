import React from 'react';

function CartProduct() {
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex  items-center">
          <img
            src="https://i.imgur.com/EEguU02.jpg"
            width="60"
            className="rounded-full "
          />

          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">Chicken momo</span>
            <span className="text-xs font-light text-gray-400">#41551</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-8 flex ">
            <span className="font-semibold">-</span>
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              value="1"
            />
            <span className="font-semibold">+</span>
          </div>

          <div className="pr-8 ">
            <span className="text-xs font-medium">$10.50</span>
          </div>
          <div>
            <i className="fa fa-close text-xs font-medium"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
