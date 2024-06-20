import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  captions: string;
  cueConfig: {
    color: string;
  }
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, captions, cueConfig }) => {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const color = cueConfig.color
  useEffect(() => {
    if(color && videoRef.current){
      videoRef.current.style.setProperty('--color', color)
    }
  }, [cueConfig.color])
  return (
    <div className="mt-8 bg-background flex justify-center items-center aspect-video">
        {
            videoUrl && (
                <video key={captions} controls className="w-full h-full mx-auto object-cover" data-color='red' ref={videoRef}>
                    <source src={videoUrl} type="video/mp4" />
                    <track
                        kind="captions"
                        data-color={"red"}
                        srcLang="en"
                        label="English"
                        default={captions ? true : false}
                        src={`data:text/vtt,${encodeURIComponent(captions)}`}
                    />
                    Your browser does not support the video tag.
                </video>
            )
        }
        {
            !videoUrl && (
                <p className="text-center text-lg text-gray-600">Enter a video URL to start</p>
            )
        }
      
    </div>
  );
};

export default VideoPlayer;
