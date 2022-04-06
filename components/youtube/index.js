import React from "react";
import YouTube from "react-youtube";



const YoutubeVideo = ({width,height1}) => {
    const opts = {
        height: height1,
        width: width,
        borderRadius:'6px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
        
      };
    const onReady = (event) => {
        console.log('Event',event)
        event.target.pauseVideo();
    }
    
  return (
    <div>
      <YouTube videoId="o65gViETEPc" opts={opts} onReady={(e)=>onReady(e)} />
    </div>
  );
};

export default YoutubeVideo;
