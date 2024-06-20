"use client";

import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState('');

  return (
    <form className="space-y-4 max-w-4xl">
      <div>
        <label htmlFor="videoUrl" className="block text-sm font-medium text-white">
          Video URL:
        </label>
        <input
          type="text"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="mt-1 block w-full p-2 border border-border rounded-md text-white bg-background"
          placeholder="Enter video URL"
        />
      </div>
      {
        videoUrl && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='p-3 border-border rounded-md border'>

     
          <div >
            <label htmlFor="captions" className="block text-sm font-medium text-white">
              Captions (WebVTT format):
            </label>
            <textarea
              id="captions"
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
              className="mt-1 block w-full p-2 rounded-md text-white bg-background"
              rows={3}
              placeholder="Enter captions in WebVTT format"
            />
          </div>
          <VideoPlayer videoUrl={videoUrl} captions={captions} />
          </motion.div>
        )
      }
     
    </form>
  );
};

export default VideoForm;
