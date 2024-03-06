// import React, { useEffect, useState } from 'react';
import React from 'react';
import AlphaVantageNews from './AlphaVantageNews';
function News() {
  // const [arr, setArr] = useState([
  //   {
  //     uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
  //     title:
  //       'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
  //     description: `
  //     Epstein and Microsoft co-founder Bill Gates has surfaced online and
  //     the revelations have raised many eyebrows. According to a Wall
  //     Street Journal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     urnal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     `,

  //     keywords: [
  //       'state bank of india',
  //       'hdfc bank',
  //       'reliance industries',
  //       'bharti airtel',
  //       'infosys',
  //       'itc',
  //       'tcs',
  //       'hindustan unilever',
  //       'icici bank',
  //       'TCS mcap',
  //       'Bank',
  //       'Insurance',
  //       'Equity',
  //       'Benchmark',
  //       'Check',
  //       'life insurance corporation of india',
  //       'tata consultancy services',
  //     ],
  //     snippet:
  //       '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
  //     url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
  //     image_url:
  //       'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
  //     language: 'en',
  //     published_at: '2024-03-03T06:14:41.000000Z',
  //     source: 'economictimes.indiatimes.com',
  //     relevance_score: null,
  //   },
  //   {
  //     uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
  //     title:
  //       'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
  //     description:
  //       'The combined market valuation of seven of the top 10 most valued firms climbed Rs 65,302.5 crore last week, with Tata Consultancy Services and ICICI Bank emerging as the biggest gainers. Last week, the BSE benchmark Sensex climbed 663.35 points or 0.90 per cent, and the Nifty jumped 165.7 points or 0.74 per cent.',
  //     keywords: [
  //       'state bank of india',
  //       'hdfc bank',
  //       'reliance industries',
  //       'bharti airtel',
  //       'infosys',
  //       'itc',
  //       'tcs',
  //       'hindustan unilever',
  //       'icici bank',
  //       'TCS mcap',
  //       'Bank',
  //       'Insurance',
  //       'Equity',
  //       'Benchmark',
  //       'Check',
  //       'life insurance corporation of india',
  //       'tata consultancy services',
  //     ],
  //     snippet:
  //       '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
  //     url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
  //     image_url:
  //       'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
  //     language: 'en',
  //     published_at: '2024-03-03T06:14:41.000000Z',
  //     source: 'economictimes.indiatimes.com',
  //     relevance_score: null,
  //   },
  //   {
  //     uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
  //     title:
  //       'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
  //     description: `
  //     Epstein and Microsoft co-founder Bill Gates has surfaced online and
  //     the revelations have raised many eyebrows. According to a Wall
  //     Street Journal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     urnal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     `,

  //     keywords: [
  //       'state bank of india',
  //       'hdfc bank',
  //       'reliance industries',
  //       'bharti airtel',
  //       'infosys',
  //       'itc',
  //       'tcs',
  //       'hindustan unilever',
  //       'icici bank',
  //       'TCS mcap',
  //       'Bank',
  //       'Insurance',
  //       'Equity',
  //       'Benchmark',
  //       'Check',
  //       'life insurance corporation of india',
  //       'tata consultancy services',
  //     ],
  //     snippet:
  //       '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
  //     url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
  //     image_url:
  //       'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
  //     language: 'en',
  //     published_at: '2024-03-03T06:14:41.000000Z',
  //     source: 'economictimes.indiatimes.com',
  //     relevance_score: null,
  //   },
  //   {
  //     uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
  //     title:
  //       'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
  //     description: `
  //     Epstein and Microsoft co-founder Bill Gates has surfaced online and
  //     the revelations have raised many eyebrows. According to a Wall
  //     Street Journal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     urnal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     `,

  //     keywords: [
  //       'state bank of india',
  //       'hdfc bank',
  //       'reliance industries',
  //       'bharti airtel',
  //       'infosys',
  //       'itc',
  //       'tcs',
  //       'hindustan unilever',
  //       'icici bank',
  //       'TCS mcap',
  //       'Bank',
  //       'Insurance',
  //       'Equity',
  //       'Benchmark',
  //       'Check',
  //       'life insurance corporation of india',
  //       'tata consultancy services',
  //     ],
  //     snippet:
  //       '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
  //     url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
  //     image_url:
  //       'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
  //     language: 'en',
  //     published_at: '2024-03-03T06:14:41.000000Z',
  //     source: 'economictimes.indiatimes.com',
  //     relevance_score: null,
  //   },
  //   {
  //     uuid: 'c1baddb9-e85e-4a96-9257-b078b2c87166',
  //     title:
  //       'Mcap of 7 of top-10 most valued firms climb Rs 65,302 cr; TCS, ICICI Bank biggest gainers',
  //     description: `
  //     Epstein and Microsoft co-founder Bill Gates has surfaced online and
  //     the revelations have raised many eyebrows. According to a Wall
  //     Street Journal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     urnal report, Epstein had tried blackmailing Bill Gates
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     over his alleged affair with Russian bridge player Mila Antonova.
  //     `,

  //     keywords: [
  //       'state bank of india',
  //       'hdfc bank',
  //       'reliance industries',
  //       'bharti airtel',
  //       'infosys',
  //       'itc',
  //       'tcs',
  //       'hindustan unilever',
  //       'icici bank',
  //       'TCS mcap',
  //       'Bank',
  //       'Insurance',
  //       'Equity',
  //       'Benchmark',
  //       'Check',
  //       'life insurance corporation of india',
  //       'tata consultancy services',
  //     ],
  //     snippet:
  //       '(You can now subscribe to our ETMarkets WhatsApp channel\n\nThe combined market valuation of seven of the top 10 most valued fi...',
  //     url: 'https://economictimes.indiatimes.com/markets/stocks/mcap-of-7-of-top-10-most-valued-firms-climb-rs-65302-cr-tcs-icici-bank-biggest-gainers/articleshow/108176005.cms',
  //     image_url:
  //       'https://img.etimg.com/thumb/msid-108176045,width-1200,height-630,imgsize-57988,overlay-etmarkets/photo.jpg',
  //     language: 'en',
  //     published_at: '2024-03-03T06:14:41.000000Z',
  //     source: 'economictimes.indiatimes.com',
  //     relevance_score: null,
  //   },
  // ]);
  // useEffect(() => {
  //   const url =
  //     'https://api.marketaux.com/v1/news/all?countries=in&filter_entities=true&limit=10&published_after=2024-02-28T08:44&api_token=RveJbhbTRqbVnKGg1y19wFEdJkpDKuq0qfWBcSFK';
  //   const data = fetch(url);
  //   console.log(data);
  //   data
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       console.log('hello');
  //       setArr([...data.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i].title);
  //   }
  // }, []);
  return (
    <div className='w-full h-full overflow-y-auto'>
      <AlphaVantageNews apiKey="POBX008JYCA2OVON" />

      {/* <button  className="bg-green-100 " onClick={()=>run()}>Run buddy</button> */}
      {/* {arr.map((item) => {
        return (
          <div className="bg-secondary h-96  rounded-lg m-1 border-1   hover:scale-[1.12] transition-transform duration-300">
            <div className="image bg-yellow-100 w-full h-[50%] rounded-lg">
              <img className="w-full h-full rounded-lg" src={item.image_url} />
            </div>
            <div className="content h-[50%] rounded-lg ">
              <p className="h-full text-ellipsis overflow-hidden ... p-2 text-white">
                An old scandal revolving around disgraced US financier Jeffrey
                Epstein and Microsoft co-founder Bill Gates has surfaced online
                and the revelations have raised many eyebrows. According to a
                Wall Street Journal report, Epstein had tried blackmailing Bill
                Gates over his alleged affair with Russian bridge player Mila
                Antonova. urnal report, Epstein had tried blackmailing Bill
                Gates over his alleged affair with Russian bridge player Mila
                Antonova. over his alleged affair with Russian bridge player
                Mila Antonova. over his alleged affair with Russian bridge
                player Mila Antonova.
              </p>

              <button className="relative bottom-16 left-[37%] text-white bg-green-500 p-1 rounded-xl ">
                Read More
              </button>
            </div>
          </div>
        );
      })} */}

      {/* <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div> */}
    </div>
  );
}

export default News;
