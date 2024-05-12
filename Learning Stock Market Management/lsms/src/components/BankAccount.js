import React, { useState } from 'react';
import DigitalATMCard from './DigitalATMCard';

function BankAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stocksData, setStocksData] = useState([
    { id: 1, name: 'Apple Inc.', invested: 1000, gainsLoss: 50, date: '2024-05-01', return: 5 },
    { id: 2, name: 'Microsoft Corp.', invested: 1500, gainsLoss: -100, date: '2024-05-02', return: -7 },
    { id: 3, name: 'Google LLC', invested: 2000, gainsLoss: 200, date: '2024-05-03', return: 10 },
  ]);
  const [showDetails, setShowDetails] = useState(null);
  const [sortOrder, setSortOrder] = useState({ key: null, asc: true });
  const [showModal, setShowModal] = useState(false);
  const [newAccountData, setNewAccountData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    // Add more fields as needed
  });
  const [currentBalance, setCurrentBalance] = useState(1000); // Initial current balance

  const handleSort = (key) => {
    const asc = sortOrder.key === key ? !sortOrder.asc : true;
    setSortOrder({ key, asc });
    const sortedStocksData = [...stocksData].sort((a, b) => {
      if (asc) {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });
    setStocksData(sortedStocksData);
  };

  const handleAddAccount = () => {
    // Logic to add account to database or perform necessary actions
    console.log("New account details:", newAccountData);
    // Close the modal after adding the account
    setShowModal(false);
    // Clear the input fields
    setNewAccountData({
      accountName: "",
      accountNumber: "",
      bankName: "",
    });
  };

  const handleDone = (amountIncm) => {
    // Logic to update the current balance
    let newAmt = amountIncm + currentBalance;
    setCurrentBalance(newAmt);
    setShowDetails(null); // Close the dropdown
  };

  return (
    <div className='w-full h-full p-2'>
      <div className='w-full h-fit flex'>
        <div className="bg-secondary rounded h-72 m-1 w-1/4 border">
          <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX6WxQDdS-e0xSDH-pXg3l7n8-PMuvEKoNowjYmugUUYzBk1UK3ZJcv3NB82fnxfsMnk&usqp=CAU" alt="Bank" />
        </div>
        <div className="bg-secondary rounded h-72 w-3/4 m-1 p-8 flex">
          <DigitalATMCard
            bankIconUrl="https://www.example.com/your-bank-icon.png"
            bankName="Example Bank"
            accountNumber="1234567890"
            currentBalance={currentBalance}
            isVerified={true} // or false
          />
          <div className=' ml-2 w-1/2 h-full  rounded-xl border-dashed border-4 border-gray-500 flex  items-center justify-center '>
            <div className='items-center justify-center cursor-pointer ' onClick={() => setShowModal(true)} >
              <div className="flex items-center justify-center rounded-full w-16 h-16 border-dashed border-4 border-gray-500 ml-8">
                <span className="text-white text-3xl">+</span>
              </div>
              <div className="text-white mr-2 mt-1" onClick={() => setShowModal(true)}>
                Add Bank account
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-fit flex'>
        <div className="bg-secondary rounded h-screen m-1 w-full p-1">
          <table className="w-full border border-2">
            <thead>
            <tr>
      <th colSpan="6" className="text-center py-4 text-2xl text-white">Investments</th>
    </tr>
              <tr>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white" onClick={() => handleSort('name')}>
                  Stock   {sortOrder.key === 'name' && (sortOrder.asc ? '▲' : '▼')}
                </th>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white" onClick={() => handleSort('invested')}>
                  Invested {sortOrder.key === 'invested' && (sortOrder.asc ? '▲' : '▼') || '▲'}
                </th>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white" onClick={() => handleSort('gainsLoss')}>
                  Gains/Loss {sortOrder.key === 'gainsLoss' && (sortOrder.asc ? '▲' : '▼') || '▲'}
                </th>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white" onClick={() => handleSort('date')}>
                  Date {sortOrder.key === 'date' && (sortOrder.asc ? '▲' : '▼') || '▲'}
                </th>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white" onClick={() => handleSort('return')}>
                  Return {sortOrder.key === 'return' && (sortOrder.asc ? '▲' : '▼') || '▲'}
                </th>
                <th className="px-4 py-2 cursor-pointer border border-2 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {stocksData.map(stock => (
                <React.Fragment key={stock.id}>
                  <tr>
                    <td className="border px-4 py-2 border border-2">{stock.name}</td>
                    <td className="border px-4 py-2 border border-2">{stock.invested}</td>
                    <td className="border px-4 py-2 border border-2">{stock.gainsLoss}</td>
                    <td className="border px-4 py-2 border border-2">{stock.date}</td>
                    <td className="border px-4 py-2 border border-2" style={{ color: stock.return >= 0 ? 'green' : 'red' }}>{stock.return}%</td>
                    <td className="border px-4 py-2 border border-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded"
                        onClick={() => setShowDetails(showDetails === stock.id ? null : stock.id)}
                      >
                        Redeem
                      </button>
                    </td>
                  </tr>
                  {showDetails === stock.id && (
                    <tr>
                      <td colSpan="6" className="border px-4 py-2">
                        <div className="flex justify-between items-center ">
                          <p className="font-medium">Amount Invested:</p>
                          <p>{stock.invested}</p>
                        </div>
                        <div className="flex justify-between items-center ">
                          <p className="font-medium">Gains/Loss:</p>
                          <p>{stock.gainsLoss}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-medium">Total Amount:</p>
                          <p>{stock.invested + stock.gainsLoss}</p>
                        </div>
                        <div className="flex justify-end ">
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded " onClick={()=>handleDone(stock.invested+stock.gainsLoss)}>Done</button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
             
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for adding bank account */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 ">
          <div className=" p-6 rounded-lg w-1/3 bg-secondary">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Add Bank Account</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowModal(false)}>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 text-white">Account Name</label>
                <input type="text" id="accountName" value={newAccountData.accountName} onChange={(e) => setNewAccountData({ ...newAccountData, accountName: e.target.value })} className="mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 text-white">Account Number</label>
                <input type="text" id="accountNumber" value={newAccountData.accountNumber} onChange={(e) => setNewAccountData({ ...newAccountData, accountNumber: e.target.value })} className="mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 text-white">Bank Name</label>
                <input type="text" id="bankName" value={newAccountData.bankName} onChange={(e) => setNewAccountData({ ...newAccountData, bankName: e.target.value })} className="mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
              </div>
              {/* Add more fields as needed */}
              <div className="flex justify-end">
                <button type="button" onClick={handleAddAccount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add Account</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BankAccount;
