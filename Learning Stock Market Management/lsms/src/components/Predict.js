import React, { useState } from 'react';
import '../static/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../static/css/style.css'; // Import custom CSS
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StartDate, EndDate, getAgoDate } from "./dateinput";
import LoadingSpinner from './loadingAnimation';
import { SearchableSelect, GetDataButton } from './SearchBarSelect';
import stockOptions from "./stockList"
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

    const handleSelect = (selectedOption) => {
        setSelectedStock(selectedOption);
    };

    const fetchDataAndPredict = async () => {
        if (selectedStock) {
            try {
                setLoading(true); // Set loading to true before fetching data

                const [stockResponse, predictionResponse] = await Promise.all([
                    fetchStockData(),
                    predictStockPrice(),
                ]);

                const stockData = await stockResponse.json();
                const predictionData = await predictionResponse.json();

                setStockData(stockData.data[selectedStock.symbol + ".NS"]);
                setPredictionData([...predictionData.predictionDataInJSON]);
                setSym(selectedStock.symbol + ".NS");
                setDone(true);
            } catch (error) {
                console.error("Error fetching data:", error);
                notifyError(error);
            } finally {
                setLoading(false);
            }
        } else {
            notifyError("Please select a stock first.");
        }
    };

    const fetchStockData = () => {
        return fetch("http://localhost:5000/getStockData", {
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
    };

    const predictStockPrice = () => {
        return fetch(`http://localhost:5000/predictstock/${startDate}/${endDate}/${selectedStock.symbol}`, {
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
    };

    return (
        <div className="container-fluid position-relative d-flex p-0 overflow-y-auto">
            {/* Content */}
            <div className="content">
                {/* Search */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-2">
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
                                        <button className='form-control  text-white mt-[23px]' style={{ background: "#EB1616" }} onClick={fetchDataAndPredict}>Get Result</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sales Chart */}
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
                {/* Sales Chart End */}
                {/* Active Stocks */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                </div>
                                {loading === done ? (
                                    <StockChart />
                                ) : (
                                    <StockChart
                                        stockData={stockData}
                                        startDate={startDate}
                                        endDate={endDate}
                                        selectedStock={selectedStock}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Active Stocks End */}
            </div>
            {/* Content End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Main;
