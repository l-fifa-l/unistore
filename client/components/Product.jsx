import React from 'react';

function Product() {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <div className="relative block border-2 border-sky-500">
          <img
            className="object-contain w-full h-full"
            src="https://www.hyperui.dev/photos/toy-1.jpeg"
            alt="Build Your Own Drone"
            loading="lazy"
          />

          <div className="p-6">
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
