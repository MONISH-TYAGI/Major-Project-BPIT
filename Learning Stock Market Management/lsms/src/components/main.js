import React ,{useState} from 'react';
import '../static/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../static/css/style.css'; // Import custom CSS
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LoadingSpinner from './loadingAnimation';
import { formatDateString } from "./dateinput";
import userPhoto from '../static/image/user.png'; // Import user photo
import Sidebar from './Sidebar';
import stockOptions from "./stockList"
import StockDataTable from './stockDataTable';
import Navbar from './navbar';
import { StartDate, EndDate, getAgoDate } from "./dateinput";
import { SearchableSelect , GetDataButton } from './SearchBarSelect';
import StockChart from './stockChart';
import notifyError from './Notifications';
const Main = () => {
    const [selectedStock, setSelectedStock] = useState(null);
  const [startDate, setStartDate] = useState(getAgoDate(1));
  const [endDate, setEndDate] = useState(getAgoDate(0));
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done,setDone]=useState(false);

  const handleSelect = (selectedOption) => {
    setSelectedStock(selectedOption);
  };
  const handleGetData = async () => {
    console.log("hellohandleData");
    console.log(selectedStock)
    if (selectedStock) {
      try {
        setLoading(true); // Set loading to true before fetching data

        const response = await fetch("http://localhost:5000/getStockData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stockSymbol: selectedStock.symbol+".NS",
            startDate: startDate,
            endDate: endDate,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const stockSymbol= selectedStock.symbol+".NS";
          const stockDataM= data.data;
          setStockData(stockDataM);
          setDone(true)
          console.log("watch here");
          console.log(stockData);

        } else if(startDate>endDate) {
          notifyError("Start date must be earlier than the end date.");
        } else{
          // console.error("Failed to fetch stock data");
          notifyError("Failed to fetch stock data.")
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
        notifyError(error);
      } finally {
        setLoading(false);
      }
    } else {
      notifyError("Please select a stock first.");
    }
  };
    return (
        <div className="container-fluid position-relative d-flex p-0  overflow-y-auto">
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}

            {/* Sidebar */}
           {/* <Sidebar></Sidebar> */}
            {/* Sidebar End */}

            {/* Content */}
            <div className="content">
                {/* Navbar */}
              {/* <Navbar/> */}
                {/* Navbar End */}

 {/* Search start */}
 <div className="container-fluid pt-4 px-4 ">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4 ">
                                <div className="d-flex align-items-center justify-content-between mb-2 ">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                </div >
                                <div className='flex'>
                                <div className=' w-4/12 h-12  '>
                                    {/* <div className=' '>
                                        <span>
                                        Select Stock
                                        </span>
                                        </div>
                                    <div className='px-2'> */}
                                    {/* <input className="form-control bg-dark border-0 " type="search" placeholder="Search" /> */}
        
                                    {/* </div> */}
                                    <SearchableSelect options={stockOptions} onSelect={handleSelect} className="form-control bg-dark border-0 w-full h-full" />
                                </div>
                                <div className=' w-3/12 h-16 '>
                                    {/* <div className=' '>
                                        <span>
                                       Start Date
                                        </span>
                                        </div>
                                    <div className='px-2'>
                                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                                    </div> */}
                                     <StartDate value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    
                                </div>
                                <div className=' w-3/12 h-16 '>
                                    {/* <div className=' '>
                                        <span>
                                       End Date
                                        </span>
                                        </div>
                                    <div className='px-2'>
                                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                                    </div> */}
                                     <EndDate value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                </div>
                                <div className=' w-2/12 h-16 '>
                                
                                  <button className='form-control  text-white    mt-[23px] 'style={{background:"#EB1616"}} onClick={handleGetData} >Get Result</button>
                                </div>
                    </div>
          
                            </div>
                        </div>
                         
                    </div> 
                   
                </div>
                {/* Search End */}
                {/* Sales Chart */}
                {loading && <LoadingSpinner />}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-secondary text-center rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Active Stocks</h6>
                                    <a href="">Show All</a>
                                 
                                </div>
                                {
                                 (loading==done)? 
                                <StockChart
         
          
        />:
       
      
        <StockChart
        stockData={stockData}
        startDate={startDate}
        endDate={endDate}
        selectedStock={selectedStock}
        
      />
        
        
                                }
                                
        {/* <StockChart></StockChart> */}
                                {/* Left Plot */}
                                {/* Your Left Plot Content Goes Here */}
          
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sales Chart End */}

                {/* Recent Sales */}
                {/* <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Stocks</h6>
                            <a href="https://finance.yahoo.com/trending-tickers">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-white">
                                        <th scope="col">Ticker</th>
                                        <th scope="col">Open</th>
                                        <th scope="col">High</th>
                                        <th scope="col">Low</th>
                                        <th scope="col">Close</th>
                                        <th scope="col">Adj. Close</th>
                                        <th scope="col">Volume</th>
                                    </tr>
                                </thead>
                 
                                <tbody> */}
                                    {/* Recent Stocks Data */}
                                    {/* Your Recent Stocks Data Goes Here */}
                                {/* </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
               
                   {!loading && stockData && <StockDataTable stockData={stockData} />}
                {/* Recent Sales End */}

                {/* Footer */}
                <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                &copy; <a href="#">Invest SmartHub</a>, All Right Reserved. 
                            </div>
                           
                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </div>
            {/* Content End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Main;
