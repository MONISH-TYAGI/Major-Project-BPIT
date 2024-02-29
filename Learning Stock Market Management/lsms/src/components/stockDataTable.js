import React from "react";
import { formatDateString } from "./dateinput";
import * as XLSX from 'xlsx';
// import Papa from 'papaparse';

// import { saveAs } from 'file-saver';


const downloadStockData = (stockData) => {
  try {
    const ws = XLSX.utils.json_to_sheet(stockData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'StockData');

    // Instead of XLSX.write, we will use XLSX.writeFile
    XLSX.writeFile(wb, 'StockData.xlsx');
  } catch (error) {
    console.error('Error downloading stock data:', error);
  }
};
// const downloadStockData2 = (stockData) => {
//   try {
//     const csvContent = Papa.unparse(stockData, {
//       header: true, // Include headers in the CSV
//       quotes: true, // Add quotes around values
//     });

//     // Create a Blob with the CSV content
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

//     // Create a download link
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);

//     // Set the download attribute and file name
//     link.setAttribute('download', 'StockData.csv');

//     // Append the link to the document
//     document.body.appendChild(link);

//     // Trigger the click event to start the download
//     link.click();

//     // Remove the link from the document
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error('Error downloading stock data:', error);
//   }
// };


const StockDataTable = ({ stockData }) => {

  // console.log(stockData);

  if(!stockData){
    alert("No data found",stockData);
    return;
  }
  // console.log(stockData);

  const indexOfMaxHigh = stockData.reduce((maxIndex, currentValue, currentIndex, array) =>
    currentValue.high > array[maxIndex].high ? currentIndex : maxIndex, 0);

  const indexOfMinHigh = stockData.reduce((minIndex, currentValue, currentIndex, array) =>
    currentValue.high < array[minIndex].high ? currentIndex : minIndex, 0);

  return (
    <div className="container-fluid pt-4 px-4">
    <div className="bg-secondary text-center rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Stocks</h6>
            <a href="https://finance.yahoo.com/trending-tickers">Show All</a>
        </div>
        <div className="table-responsive">
            <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                    <tr className="text-white">
                        <th scope="col text-center bg-red-100" style={{textAlign:"center"}}>Ticker</th>
                        <th scope="col text-center" style={{textAlign:"center"}}>Date</th>
                        <th scope="col text-center" style={{textAlign:"center"}}>Open</th>
                        <th scope="col text-center" style={{textAlign:"center"}}>High</th>
                        <th scope="col text-center" style={{textAlign:"center"}}>Close</th>
                       
                    </tr>
                </thead>
 
                <tbody> 
            {stockData?.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-200 transition duration-300 ease-in-out ${
                  index === indexOfMaxHigh ? 'bg-green-300' : ''
                } ${index === indexOfMinHigh ? 'bg-red-300' : ''}`}
              >
                <td className="px-6 py-3 text-center border">{index + 1}</td>
                <td className="px-6 py-3 text-center border">{formatDateString(item.date)}</td>
                <td className="px-6 py-3 text-center border">{item.open?.toFixed(2)}</td>
                <td className="px-6 py-3 text-center border">{item.high?.toFixed(2)}</td>
                <td className="px-6 py-3 text-center border">{item.close?.toFixed(2)}</td>
              </tr>
            ))}

                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
  );
};

export default StockDataTable;
