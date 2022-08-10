import React from 'react';

function MetricCard() {
  return (
    <>
      <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full p-5 bg-green-600">
              <i className="fa fa-wallet fa-2x fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">Total Revenue</h2>
            <p className="font-bold text-3xl">
              $3249{' '}
              <span className="text-green-500">
                <i className="fas fa-caret-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetricCard;