import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import CartProduct from '../components/CartProduct';
import CartPay from '../components/CartPay';

function Cart() {
  return (
    <Layout>
      <div className="h-screen">
        <div className="py-12">
          <div className="max-w-md mx-auto shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5 border-2 border-sky-500">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-medium ">Shopping Cart</h1>
                    <div className="divide-y divide-slate-700">
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex items-center">
                        <i className="fa fa-arrow-left text-sm pr-2"></i>
                        <Link href="/">
                          <span className="text-md cursor-pointer font-medium text-blue-500">
                            Continue Shopping
                          </span>
                        </Link>
                      </div>

                      <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">
                          Subtotal:
                        </span>
                        <span className="text-lg font-bold text-gray-800 ">
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
    </Layout>
  );
}

export default Cart;
