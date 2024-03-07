import React from 'react';
import YouTube from 'react-youtube';

const Video = (src) => {
  // Options for the YouTube player
  // console.log("check"+JSON.stringify(src)
  //   )
  console.log("check"+JSON.stringify(src))
  // console.log("upper"+src.src.src);

  let i
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0, // Disable related videos in general
      showRelatedVideos: false, // Hide related videos when pausing
      showInfo: 0 ,// Hide video title and sharing buttons
      origin: window.location.origin 
    }
  };

  // Correct YouTube video id
  const videoId = src.src; 
  console.log("videoId"+videoId)
  // Only the unique identifier, not the full URL

  return (
    <YouTube videoId={videoId} opts={opts} className='w-full h-full ' />
  );
};

export default Video;
