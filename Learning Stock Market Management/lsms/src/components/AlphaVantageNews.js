import React, { useState, useEffect } from 'react';

const AlphaVantageNews = ({ apiKey }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=finance&apikey=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          // Access the 'feed' array directly from the data object
          setNewsData(data.feed || []);
        } else {
          console.error('Failed to fetch news:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNewsData();
  }, [apiKey]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4  overflow-y-auto ">
      {newsData.length > 0 ? (
        newsData.map((newsItem, index) => (
          <div
            className="flex flex-col bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            key={index}
          >
            {newsItem.banner_image && (
              <img
                className="w-full h-48 object-cover"
                src={newsItem.banner_image}
                alt={newsItem.title}
              />
            )}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold mb-2">{newsItem.title}</h2>
                <p className="text-stone-400 text-sm">{newsItem.summary}</p>
                <p className="text-stone-400 text-sm">
                  Sentiment Analysis: {newsItem.overall_sentiment_label}
                </p>
              </div>
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 self-end mt-4"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No news available.</p>
      )}
    </div>
  );
};

export default AlphaVantageNews;
