import React from 'react';
import MetricCard from '../components/MetricCard';

function admin() {
  return (
    <>
      <section>
        <div className="bg-gray-800 pt-3">
          <div className="rounded-tl-3xl bg-gradient-to-r to-gray-800 p-4 shadow text-2xl text-white">
            <h1 className="font-bold pl-2">Analytics</h1>
          </div>
        </div>
        {/* Metric Card Start */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            {/*Total Purchased Amount Metric Card*/}
            <MetricCard />
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            {/*Total Discount Amount Metric Card*/}
            <MetricCard />
            {/*Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            {/*Total discount Codes used Metric Card*/}
            <MetricCard />
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-6">
            {/*Total Number of Items purchased Metric Card*/}
            <MetricCard />
            {/*/Metric Card*/}
          </div>
        </div>
        {/* Metric Card End */}
      </section>
      <section className="justify-center grid gap-x-8 gap-y-4 md:grid-cols-2">
        {/* List of Items purchased */}

        <h2 className="text-2xl font-semibold leading-tight">
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

        {/* Discount Codes List */}

        <h2 className="text-2xl font-semibold leading-tight">Discount Codes</h2>

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
      </section>
    </>
  );
}

export default admin;
