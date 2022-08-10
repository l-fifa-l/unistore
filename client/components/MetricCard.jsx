import React from 'react';

function MetricCard({ icon, name, value }) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/4 p-6">
      <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full ">
              <i className={`${icon} h-5 w-4`}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">{name}</h2>
            <p className="font-bold text-3xl">
              {value}
              <span className="text-green-500">
                <i className="fas fa-caret-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
