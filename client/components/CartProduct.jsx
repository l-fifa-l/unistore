// Display product in cart
// Total price of cart
// Quantity of cart

import React from 'react';

function CartProduct({ title, price, thumbnail }) {
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex  items-center">
          <img src={thumbnail} width="60" className="rounded-full " />

          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">{title}</span>
            <span className="text-xs font-light text-gray-400">#41551</span>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="pr-8 ">
            <span className="text-xs font-medium">${price}</span>
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
