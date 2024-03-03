import React, { useState, useEffect } from 'react';

function Courses() {
  const [isOpen, setIsOpen] = useState(true);
  const [arr, setArr] = useState([
    {
      "uuid": "c1baddb9-e85e-4a96-9257-b078b2c87166",
      "title": "Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers",
      "description": "The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.",
      "keywords": ["state bank of india", "hdfc bank", "reliance industries", "bharti airtel", "infosys", "itc", "tcs", "hindustan unilever", "icici bank", "TCS mcap", "Bank", "Insurance", "Equity", "Benchmark", "Check", "life insurance corporation of india", "tata consultancy services"],
      "snippet": "(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...",
      "url": "https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms",
      "image_url": "https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg",
      "language": "en",
      "published_at": "2024-03-03T06:14:41.000000Z",
      "source": "economictimes.indiatimes.com",
      "relevance_score": null
      

    },
    {
      "uuid": "c1baddb9-e85e-4a96-9257-b078b2c87166",
      "title": "Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers",
      "description": "The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.",
      "keywords": ["state bank of india", "hdfc bank", "reliance industries", "bharti airtel", "infosys", "itc", "tcs", "hindustan unilever", "icici bank", "TCS mcap", "Bank", "Insurance", "Equity", "Benchmark", "Check", "life insurance corporation of india", "tata consultancy services"],
      "snippet": "(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...",
      "url": "https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms",
      "image_url": "https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg",
      "language": "en",
      "published_at": "2024-03-03T06:14:41.000000Z",
      "source": "economictimes.indiatimes.com",
      "relevance_score": null
    }
      
  ]);
  const [isBoxOpen, setIsBoxOpen] = useState(true); // State to control the visibility of the fullscreen box

  useEffect(() => {
    const url = "";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setArr(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);
    // Add additional logic if needed based on selected value
  };

  const openFullscreenBox = () => {
    setIsBoxOpen(true);
  };

  const closeFullscreenBox = () => {
    setIsBoxOpen(false);
  };

  return (
    <div className='bg-red-100 w-full h-max p-4'>
      <div className="bg-secondary text-center rounded p-6 h-20 flex">
        <div className='w-3/4 flex items-center px-2'>
          <span className='text-white text-5xl font-bold'>Learn Trading Here .....</span>
        </div>
        <div className='w-1/4 flex justify-end items-center relative'>
          <select className="w-5/6 h-full border px-1" onChange={handleSelectChange}>
            <option value="beginner text-red text-2xl">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
      <div className='bg-green-100 h-fit p-2 mt-2'>
        {arr.map(item => (
          <div key={item.id} className="bg-secondary h-80 rounded-xl m-1 border-1 flex">
            <div className="image bg-yellow-100 w-3/4 h-full rounded-l-xl">
              <img className="w-full h-full rounded-l-xl" src={item.image_url} alt={item.title} />
            </div>
            <div className="content h-full rounded-xl">
              <p className="h-full text-ellipsis overflow-hidden ... p-2 text-white">{item.title}</p>
              <button onClick={openFullscreenBox} className="relative bottom-16 left-[37%] text-white bg-green-500 p-1 rounded-xl w-1/3">Play</button>
            </div>
          </div>
        ))}
      </div>
      {isBoxOpen && (
        <div className="fixed top-0 mt-2 mb-2  left-[1%]   h-[98%] bg-yellow-500  z-50   rounded-xl w-[98%] flex">
          <div className='w-[60%] h-full bg-green-100 rounded-l-xl'></div>
          <div className='w-[40%] h-full bg-blue-100 rounded-r-xl'>
            <div className='w-full h-[10%] bg-yellow-500'> 
          <span className='text-white text-3xl font-bold'>Comments</span>
            </div>
            <div className='h-[80%] w-full'
            ></div>
            <div></div>
          </div>
          <div className="bg-white p-4 rounded-xl fixed">
            <p className='rounded-xl'>This is the fullscreen box content</p>
            <button onClick={closeFullscreenBox} className='rounded-xl'>Close</button>
          </div>
        </div>
      
      )}
    </div>
  );
}

export default Courses;
