import React, { useState, useEffect } from 'react';
import Video from './Video';
function Courses() {
  const [isOpen, setIsOpen] = useState(true);
  const [cmt,setCmt]=useState('')
  const [currIdx,setIdx]=useState(0);
 const [size,setSize]=useState(0)
  const addComment=()=>{
    console.log(cmt)
    let tempArr=comment
    console.log(comment.length)
    setSize(size+1);
    tempArr.push({"id":size,"comment":cmt,"sub":[]})
    setCommArr([...tempArr])
    console.log(comment.length)
    setCmt('')
   
  }
  const handleInnerDlt=(index,subIdx)=>{
    console.log("innerdlt");
    console.log(index);
   console.log(subIdx)
    
    let tempArr = [...comment]; // Create a shallow copy of the comment array
    
    tempArr.map((obj, idx) => {
      if (obj.id === index) {
        obj.sub = obj.sub.filter((subObj,currIdx) => {
          return currIdx!= subIdx;
        });
      }
      return obj;
    });
    
    setCommArr([...tempArr]); // Update the state with the modified array
    
    console.log(comment.length);
    console.log("innerdlt");
    
  }
  const handleInnerCmt=(index,subIdx)=>{
    
    console.log(index)
    let tempArr=comment
    tempArr.map((obj,index)=>{
      if(obj.id==currIdx)
      {
          obj.sub.push({ "innerCmt":cmt2,"by":"user"})
      }
    })  


    setCommArr([...tempArr])
    console.log(comment.length)
    setCmt2('')
  }
  const handleOuterDlt=(index)=>{
    console.log("a");
    console.log(index)
    console.log(comment.length)
    let tempArr = comment.filter((obj) => {
      return obj.id !== index;
    });
    setCommArr([...tempArr])
    console.log(comment.length)
    console.log("a");
    setSize(size-1);
  }


  const [reply,setRep]=useState(false);
  const [cmt2,setCmt2]=useState('')
  // const [comment,setCommArr]=useState([
  //   {
  //     "id":1,
  //     "comment":"first comment ",
  //     "sub":[
  //       {
  //         "innerCmt":"first inner comment",
  //         "by":"user1"
  //       },
  //       {
  //         "innerCmt":"second inner comment",
  //         "by":"user2"
  //       }
  //     ]
  //   },
  //   {
  //     "id":2,
  //     "comment":"second comment ",
  //     "sub":[
  //       {
  //         "inner comment":"second inner comment",
  //         "by":"user2"
  //       }
  //     ]
  //   }
  // ])
    const [comment,setCommArr]=useState([])
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
    },
   
      
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
    <div className='bg-red-100 w-full h-full pb-10 p-4  overflow-y-auto'>
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
      <div className='bg-green-100  p-2 mt-2 h-full '>
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
        <div style={{ height: '6rem' }}></div>
        
      </div>
      {isBoxOpen && (
        <div className="fixed top-0 mt-2 mb-2  left-[1%]   h-[98%] bg-yellow-500  z-50   rounded-xl w-[98%] flex border-4 border-indigo-600    ">
          <div className='w-[60%] h-full bg-green-100 rounded-l-xl'>
            <Video/>
          </div>
          <div className='w-[40%] h-full bg-blue-100 rounded-r-xl'>
            <div className='w-full h-[10%] bg-yellow-500 flex justify-between'> 
          <span className='text-white text-3xl font-bold'>Comments</span>
          <button onClick={closeFullscreenBox} className='rounded-xl text-white'>Close</button>
            </div>
            <div className='h-[80%] w-full p-1 flex flex-col items-end overflow-y-auto'>
              { 
              (comment.length>0)?comment.map((item,index)=>{
                console.log("item->",item.id)
                return (
            <div className='bg-green-100 w-full flex  flex-col items-end m-1 '>
              <div className='w-full  bg-green-100 h-12  my-1 '>
                <div className='w-full flex h-full bg-yellow-100'>
                 <div className='w-[90%] bg-red-100 h-full flex items-center px-2 '> {item.comment}</div>
                 <button className='w-[10%]' onClick={() => { setRep(true); setCmt2('');setIdx(item.id) }}>Reply</button>

                 <button className='w-[10%]' onClick={()=>handleOuterDlt(item.id)}>Delete</button>
                 </div>
                 
                 
              </div>
              {
                item.sub.map((subitem,idx)=>{
                  return (
              <div className='w-10/12  bg-green-100 h-12  my-1 '>
                <div className='w-full flex h-full bg-yellow-100'>
                 <div className='w-[90%] bg-red-100 h-full flex items-center px-2 '>   {subitem.innerCmt} </div>
                 <button className='w-[10%]' onClick={() => { setRep(true); setCmt2(''); setIdx(item.id)}}>Reply</button>
                 <button className='w-[10%]' onClick={()=>handleInnerDlt(item.id,idx)}>Delete</button>
                 </div>
                 
                 
              </div>
                  )
                })

            
              }
              
       {       (reply&&item.id==currIdx) &&
  <div className='w-10/12 bg-green-100 h-12 my-1'>
    <div className='w-full flex h-full bg-yellow-100'>
      <input type="text" className='w-[90%] h-full flex px-2' value={cmt2} onChange={(e) => setCmt2(e.target.value)} />
      <button className='w-[10%]' onClick={()=>handleInnerCmt(item.id)}>Done</button>
      <button className='w-[10%]' onClick={()=>setRep(!reply)}>close</button>
    </div>
  </div>
              }      
              
              </div>
            
                )
              })
              :<div className='w-full h-full flex items-center justify-center bg-red-100'>No Comments</div>

}
            </div>
            <div className='h-[10%] w-full bg-orange-100 p-2 flex'>
            <input type="text" className='w-[90%] h-full flex px-2' value={cmt} onChange={(e) => setCmt(e.target.value)} />
                        <button className='w-[25%] bg-blue-100' onClick={()=>addComment()} >Comment</button>
            </div>
          </div>
          
        </div>
      
      )}
    </div>
  );
}

export default Courses;
