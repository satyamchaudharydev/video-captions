import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  captions: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, captions }) => {
  return (
    <div className="mt-8 bg-background flex justify-center items-center aspect-video">
        {
            videoUrl && (
                <video controls className="w-full h-full mx-auto object-cover">
                    <source src={videoUrl} type="video/mp4" />
                    <track
                    kind="captions"
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
