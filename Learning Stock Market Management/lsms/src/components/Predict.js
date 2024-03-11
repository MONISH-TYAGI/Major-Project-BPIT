import React, { useState } from 'react';
import '../static/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../static/css/style.css'; // Import custom CSS
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LoadingSpinner from './loadingAnimation';
import { formatDateString } from "./dateinput";
import Sidebar from './Sidebar';
import stockOptions from "./stockList";
import StockDataTable from './stockDataTable';
import Navbar from './navbar';
import { StartDate, EndDate, getAgoDate } from "./dateinput";
import { SearchableSelect } from './SearchBarSelect';
import StockChart from './stockChart';
import notifyError from './Notifications';

const Main = () => {
    const [selectedStock, setSelectedStock] = useState(null);
    const [startDate, setStartDate] = useState(getAgoDate(1));
    const [endDate, setEndDate] = useState(getAgoDate(0));
    const [stockData, setStockData] = useState([]);
    const [symb, setSym] = useState('');
    const [done, setDone] = useState(false);
    const [predictionData, setPredictionData] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchPredictionData = async (startDate, endDate, symbol) => {
      try {
          const resp = await fetch(`http://localhost:5000/predictstock/${startDate}/${endDate}/${symbol}`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  stockSymbol: symbol + ".NS",
                  startDate: startDate,
                  endDate: endDate,
              }),
          });
          
          console.log("Response status:", resp.status); // Log the status code of the response
  
          if (!resp.ok) {
              notifyError("Failed to fetch prediction data.");
              console.log("Failed to fetch prediction data.");
              return null;
          }
  
          const jsonResponse = await resp.json();
          console.log("Response JSON:", jsonResponse);
  
          return jsonResponse; // Return parsed JSON directly
      } catch (error) {
          console.error("Error fetching prediction data:", error);
          notifyError(error);
          return null;
      }
  };

    const predictStockPrice = async () => {
      console.log("predictStockPriceStart");
        setLoading(true);

        try {
            const [stockDataResponse, predictionResponse] = await Promise.all([
                handleGetData(),
                fetchPredictionData(startDate, endDate, selectedStock.symbol)
            ]);
                  console.log("after two call")
                  // const stockDataJson = await stockDataResponse.json();
                  const predictionDataJson = await predictionResponse.json();
          
                  if ( !predictionResponse.ok) {
                      notifyError("Failed to fetch stock or prediction data.");
                      console.log("Failed to fetch stock or prediction data.");
                      return;
                  }
          
                  // setStockData(stockDataJson.data[selectedStock.symbol + ".NS"]);
                  setPredictionData(predictionDataJson.predictionDataInJSON);
            console.log("predictStockPriceEnd");
        } catch (error) {
            console.error("Error fetching data:", error);
            notifyError(error);
        } finally {
            setLoading(false);
        }
        
    };

    const handleGetData = async () => {
      console.log("handleGetDataStart");
        if (!selectedStock) {
            notifyError("Please select a stock first.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/getStockData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    stockSymbol: selectedStock.symbol + ".NS",
                    startDate: startDate,
                    endDate: endDate,
                }),
            });

            if (!response.ok) {
                notifyError("Failed to fetch stock data.");
                return;
            }

            const data = await response.json();
            const stockSymbol = selectedStock.symbol + ".NS";
            setStockData(data.data[stockSymbol]);
            setDone(true);
            console.log("handleGetDataEnd");
            return response;
        } catch (error) {
            console.error("Error fetching stock data:", error);
            notifyError(error);
        }
       
    };

    const handleSelect = (selectedOption) => {
        setSelectedStock(selectedOption);
    };

    return (
        <div className="container-fluid position-relative d-flex p-0  overflow-y-auto">
            <div className="content">
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4 ">
                                <div className="d-flex align-items-center justify-content-between mb-2 ">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className='flex'>
                                    <div className=' w-4/12 h-16  '>
                                        <SearchableSelect options={stockOptions} onSelect={handleSelect} className="form-control bg-dark border-0 w-full h-full" />
                                    </div>
                                    <div className=' w-3/12 h-16 '>
                                        <StartDate value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    </div>
                                    <div className=' w-3/12 h-16 '>
                                        <EndDate value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    </div>
                                    <div className=' w-2/12 h-16 '>
                                        <button className='form-control  text-white    mt-[23px] 'style={{background:"#EB1616"}} onClick={predictStockPrice}>Get Result</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {loading && <LoadingSpinner />}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Predicted Stocks</h6>
                                    <a href="">Show All</a>
                                </div>
                                {!loading && stockData.length > 0 && predictionData.length > 0 && (
                                    <>
                                        <h2>Prediction Data of {selectedStock.name} for next 30 days</h2>
                                        <StockChart
                                            stockData={stockData}
                                            startDate={startDate}
                                            endDate={endDate}
                                            selectedStock={symb}
                                            predictedData={predictionData}
                                        />
                                        <p className='text-red-700'>
                                            Disclaimer: This prediction tool is for educational purposes only. Investing in stocks involves risks,
                                            and decisions should be made based on careful research and consideration.
                                            Use this information at your own risk.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                {loading === done ? 
                                    <StockChart />
                                    :
                                    <StockChart
                                        stockData={stockData}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectedStock={selectedStock}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {!loading && stockData && <StockDataTable stockData={stockData} />}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                &copy; <a href="#">Kumar Laxmikant</a>, All Right Reserved. 
                            </div>
                            <div className="col-12 col-sm-6 text-center text-sm-end">
                                Designed By <a href="https://portfolio-website-azure-eta.vercel.app/">Kumar Laxmikant</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Main;
