import React from 'react';

const DigitalATMCard = ({ bankIconUrl, bankName, accountNumber, currentBalance, isVerified }) => {
  return (
    <div className="w-1/2   bg-secondary border border-2 drop-shadow-2xl	mr-2 rounded-xl shadow-lg ">
      <div className="px-2 py-2">
        <div className="flex justify-between items-center">
          
          <i class="fa-solid fa-building-columns text-white text-2xl p-2"></i>
          <span className="text-sm text-gray-600 font-medium text-white">{bankName}</span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 font-medium text-white">Account Number:</p>
            <p className="text-sm text-gray-800 font-medium text-white">XXXXXXXXXXX{accountNumber.slice(-4)}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-600 font-medium text-white">Current Balance:</p>
            <p className="text-sm text-gray-800 font-medium text-white">Rs. {currentBalance}</p>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-6 h-6 mr-2">
              {isVerified ? (
                <svg className="w-full h-full text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-full h-full text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <p className="text-sm text-gray-600 font-medium  text-white">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalATMCard;
