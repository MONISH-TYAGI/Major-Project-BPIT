import React, { useState, useEffect } from 'react';
import Video from './Video';
function Courses() {
  const [isOpen, setIsOpen] = useState(true);
  const [cmt, setCmt] = useState('');
  const [currIdx, setIdx] = useState(0);
  const [size, setSize] = useState(0);
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('3WI9RZODuag');
  const [url, setUrl] = useState(
    'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLxNHpNhDaEFJsuzKNrMbr_SESDCCLmSu4&key=AIzaSyDhUK_KlUaUiOWa594loFyjKGfDcj74g5s'
  );
  useEffect(() => {
    const fetchPlaylist = async () => {
      console.log('hello');
      try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data.items);
        if (data && data.items && data.items.length > 0) {
          console.log('snippet->' + JSON.stringify(data.items[0].snippet));
          console.log(
            'thumbnails->' + JSON.stringify(data.items[0].snippet.thumbnails)
          );
          console.log(
            'standard->' +
              JSON.stringify(data.items[0].snippet.thumbnails.standard)
          );
          console.log(
            'url->' +
              JSON.stringify(data.items[0].snippet.thumbnails.standard.url)
          );

          setVideos([...data.items]);
        } else {
          console.error('Data received from API is empty or malformed.');
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist();
  }, [url]);

  const addComment = () => {
    console.log(cmt);
    let tempArr = comment;
    console.log(comment.length);
    setSize(size + 1);
    tempArr.push({ id: size, comment: cmt, sub: [] });
    setCommArr([...tempArr]);
    console.log(comment.length);
    setCmt('');
  };
  const handleInnerDlt = (index, subIdx) => {
    console.log('innerdlt');
    console.log(index);
    console.log(subIdx);

    let tempArr = [...comment]; // Create a shallow copy of the comment array

    tempArr.map((obj, idx) => {
      if (obj.id === index) {
        obj.sub = obj.sub.filter((subObj, currIdx) => {
          return currIdx != subIdx;
        });
      }
      return obj;
    });

    setCommArr([...tempArr]); // Update the state with the modified array

    console.log(comment.length);
    console.log('innerdlt');
  };
  const handleInnerCmt = (index, subIdx) => {
    console.log(index);
    let tempArr = comment;
    tempArr.map((obj, index) => {
      if (obj.id == currIdx) {
        obj.sub.push({ innerCmt: cmt2, by: 'user' });
      }
    });

    setCommArr([...tempArr]);
    console.log(comment.length);
    setCmt2('');
    setRep(!reply);
  };
  const handleOuterDlt = (index) => {
    console.log('a');
    console.log(index);
    console.log(comment.length);
    let tempArr = comment.filter((obj) => {
      return obj.id !== index;
    });
    setCommArr([...tempArr]);
    console.log(comment.length);
    console.log('a');
    setSize(size - 1);
  };

  const [reply, setRep] = useState(false);
  const [cmt2, setCmt2] = useState('');
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
  const [comment, setCommArr] = useState([]);
  const [arr, setArr] = useState([
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
    {
      uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
      title:
        'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
      description:
        'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
      keywords: [
        'state bank of india',
        'hdfc bank',
        'reliance industries',
        'bharti airtel',
        'infosys',
        'itc',
        'tcs',
        'hindustan unilever',
        'icici bank',
        'TCS mcap',
        'Bank',
        'Insurance',
        'Equity',
        'Benchmark',
        'Check',
        'life insurance corporation of india',
        'tata consultancy services',
      ],
      snippet:
        '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
      url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
      image_url:
        'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
      language: 'en',
      published_at: '2024-03-03T06:14:41.000000Z',
      source: 'economictimes.indiatimes.com',
      relevance_score: null,
    },
  ]);
  const [isBoxOpen, setIsBoxOpen] = useState(false); // State to control the visibility of the fullscreen box

  useEffect(() => {
    const url = '';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArr(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);
    if (selectedValue == 'intermediate') {
      setUrl(
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLxNHpNhDaEFJBMvkFSGxFCUzbKNa6DbGu&key=AIzaSyDhUK_KlUaUiOWa594loFyjKGfDcj74g5s'
      );
      // Add additional logic if needed based on selected value
    } else if (selectedValue == 'advanced') {
      console.log('hello');
      setUrl(
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLxNHpNhDaEFLegz8Z2fUg-Wd7Jbb5HH4m&key=AIzaSyDhUK_KlUaUiOWa594loFyjKGfDcj74g5s'
      );
    } else {
      setUrl(
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLxNHpNhDaEFJsuzKNrMbr_SESDCCLmSu4&key=AIzaSyDhUK_KlUaUiOWa594loFyjKGfDcj74g5s'
      );
    }
  };

  const openFullscreenBox = (id) => {
    setIsBoxOpen(true);
    setVideoId(id);
  };

  const closeFullscreenBox = () => {
    setIsBoxOpen(false);
  };

  return (
    <div className="bg-black w-full h-full pb-10 p-4  overflow-y-auto">
      <div className="bg-secondary text-center rounded p-6 h-20 flex">
        <div className="w-3/4 flex items-center px-2">
          <span className="text-stone-50 text-3xl font-bold">
            Market Masters: Unlock the Secrets of Stock Trading
          </span>
        </div>
        <div className="w-1/4 flex justify-end items-center relative">
          <select
            className="w-5/6 h-full border px-1 select"
            onChange={handleSelectChange}
          >
            <option value="beginner text-red text-2xl">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>
      <div className="bg-secondary p-2 mt-2 min-h-screen overflow-hidden">
        {videos.length > 0 ? (
          videos.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg h-80 rounded-xl m-4 border border-gray-200 flex overflow-hidden"
            >
              <div className="image w-3/4 h-full">
                {item.snippet.thumbnails.high.url ? (
                  <img
                    className="w-full h-full object-cover"
                    src={item.snippet.thumbnails.high.url}
                    alt="Video thumbnail"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <div className="content flex flex-col justify-between p-4 bg-gray-100 w-1/4">
                <p className="text-stone-100 text-2xl text-ellipsis overflow-hidden">
                  {item.snippet.title}
                </p>
                <p className="text-stone-400 text-lg overflow-hidden">
                  {item.snippet.description.substring(0, 200)}
                </p>
                <button
                  onClick={() =>
                    openFullscreenBox(item.snippet.resourceId.videoId)
                  }
                  className="text-white bg-blue-500 p-2 rounded-xl w-full self-end"
                >
                  Play
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-red-100">
            No Videos
          </div>
        )}

        <div style={{ height: '6rem' }}></div>
      </div>
      {isBoxOpen && (
        <div className="fixed top-0 left-0 m-2 h-screen w-screen flex justify-center items-center z-[1000] bg-black opacity-100">
          <div className="flex w-11/12 h-5/6  shadow-lg rounded-lg overflow-hidden">
            <div className="w-3/5 h-full">
              <Video src={videoId} className="w-full h-full" />
            </div>
            <div className="w-2/5 h-full flex flex-col">
              <div className="flex justify-between items-center p-4 bg-secondary">
                <h2 className="text-xl font-semibold text-stone-50">
                  Comments
                </h2>
                <button
                  className="px-4 py-2 bg-black text-stone-50 text-lg rounded hover:bg-gray-400 focus:outline-none"
                  onClick={closeFullscreenBox}
                >
                  Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {comment.length ? (
                  comment.map((item, idx) => (
                    <div key={idx} className="mb-4 last:mb-0">
                      <div className="p-3 bg-secondary rounded shadow">
                        <p className="text-base text-stone-100">
                          {item.comment}
                        </p>
                        <div className="flex justify-end mt-2">
                          <button
                            className="text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                            onClick={() => (
                              setRep(true), setCmt2(''), setIdx(item.id)
                            )}
                          >
                            Reply
                          </button>
                          <button
                            className="ml-4 text-sm bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                            onClick={() => handleOuterDlt(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      {item.sub.map((subitem, subIdx) => (
                        <div
                          key={subIdx}
                          className="mt-2 ml-4 p-3 bg-secondary rounded shadow"
                        >
                          <p className="text-base text-stone-100">
                            {subitem.innerCmt}
                          </p>
                          <div className="flex justify-end mt-2">
                            <button
                              className="text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                              onClick={() => (
                                setRep(true), setCmt2(''), setIdx(item.id)
                              )}
                            >
                              Reply
                            </button>
                            <button
                              className="ml-4 text-sm bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                              onClick={() => handleInnerDlt(item.id, subIdx)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                      {reply && item.id === currIdx && (
                        <div className="mt-2 ml-4 p-3 bg-secondary rounded shadow">
                          <input
                            type="text"
                            className="w-full p-2 text-sm text-stone-100 bg-black rounded border border-gray-300 focus:outline-none"
                            value={cmt2}
                            onChange={(e) => setCmt2(e.target.value)}
                          />
                          <div className="flex justify-end mt-2">
                            <button
                              className="text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                              onClick={() => handleInnerCmt(item.id)}
                            >
                              Done
                            </button>
                            <button
                              className="ml-4 text-sm bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
                              onClick={() => setRep(!reply)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-full bg-black rounded shadow">
                    <p className="text-sm text-stone-100">No Comments</p>
                  </div>
                )}
              </div>
              <div className="p-4 bg-secondary">
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 p-2 text-base text-stone-100 bg-black rounded border border-gray-300 focus:outline-none"
                    value={cmt}
                    onChange={(e) => setCmt(e.target.value)}
                  />
                  <button
                    className="ml-4 px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => addComment()}
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
