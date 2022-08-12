// Product Component

import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../features/cart/cartSlice';
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(increment(product));
  };
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <div className="relative block border border-sky-500">
          <img
            className="object-contain w-full h-56"
            src={product.thumbnail}
            alt="Build Your Own Drone"
            loading="lazy"
          />

          <div className="p-6">
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.title}
              </h2>
              <p className="mt-1">{`$${product.price}`}</p>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full" onClick={addToCart}>
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
