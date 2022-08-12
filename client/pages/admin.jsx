// Admin page

import React from 'react';
import Layout from '../components/layout';
import MetricCard from '../components/MetricCard';
import axios from 'axios';

function admin({ adminApi }) {
  return (
    <Layout>
      <section>
        <div className="pt-3 border-t-2">
          <div className="rounded-tl-3xl p-4 shadow text-2xl">
            <h1 className="font-bold pl-2">Analytics</h1>
          </div>
        </div>
        {/* Metric Card Start */}
        <div className="flex flex-wrap bg-slate-100 mb-6">
          {/*Total Purchased Amount Metric Card*/}
          <MetricCard
            name={'Total Amount Purchased'}
            value={adminApi.totalAmount}
          />

          {/*Total Discount Amount Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total Discount Amount'}
            value={adminApi.totalDiscountAmount}
          />

          {/*Total discount Codes used Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total discount Codes'}
            value={adminApi.discountCoupons.length}
          />

          {/*Total Number of Items purchased Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total Items purchased'}
            value={adminApi.totalItemPurchased}
          />
        </div>
        {/* Metric Card End */}
      </section>
      <section className=" justify-evenly sm:flex-1 gap-x-8 gap-y-4 ">
        {/* Discount Codes List */}
        <div>
          <h2 className="text-2xl pl-6 pb-3 font-semibold leading-tight">
            Discount Codes
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Code</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {adminApi.discountCoupons.map((discountCode, index) => (
                  <tr key={index || 0}>
                    <th>{index + 1}</th>
                    <td>{discountCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:5000/api/admin`);
  return {
    props: {
      adminApi: data[0],
    },
  };
}

export default admin;
