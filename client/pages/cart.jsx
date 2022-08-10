import React from 'react';
import CartProduct from '../components/CartProduct';
import CartPay from '../components/CartPay';

function Cart() {
  return (
    <div class="h-screen">
      <div class="py-12">
        <div class="max-w-md mx-auto shadow-lg rounded-lg  md:max-w-5xl">
          <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5 border-2 border-sky-500">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-medium ">Shopping Cart</h1>
                  <div className="divide-y divide-slate-700">
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                  </div>
                  <div class="flex justify-between items-center mt-6 pt-6 border-t">
                    <div class="flex items-center">
                      <i class="fa fa-arrow-left text-sm pr-2"></i>
                      <span class="text-md  font-medium text-blue-500">
                        Continue Shopping
                      </span>
                    </div>

                    <div class="flex justify-center items-end">
                      <span class="text-sm font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span class="text-lg font-bold text-gray-800 ">
                        $24.90
                      </span>
                    </div>
                  </div>
                </div>
                <CartPay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
