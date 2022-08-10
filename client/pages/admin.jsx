import React from 'react';
import Layout from '../components/layout';
import MetricCard from '../components/MetricCard';

function admin() {
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
            icon={'gg-dollar'}
            name={'Total Amount Purchased'}
            value={'$24.90'}
          />

          {/*Total Discount Amount Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total Discount Amount'}
            value={'$ 2.49'}
          />

          {/*Total discount Codes used Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total discount Codes'}
            value={1}
          />

          {/*Total Number of Items purchased Metric Card*/}
          <MetricCard
            icon={'gg-dollar'}
            name={'Total Items purchased'}
            value={1}
          />
        </div>
        {/* Metric Card End */}
      </section>
      <section className=" justify-evenly sm:flex-1 gap-x-8 gap-y-4 ">
        {/* List of Items purchased */}
        <div>
          <h2 className="text-2xl font-semibold pl-6 pb-3 leading-tight">
            Items purchased
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default admin;
