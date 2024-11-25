import React, { createContext, useContext, useState } from "react";

// Create the context
const VideoContext = createContext();

// Provider component
export const VideoProvider = ({ children }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  return (
    <VideoContext.Provider value={{ videoDetails, setVideoDetails }}>
      {children}
    </VideoContext.Provider>
  );
};

// Hook for using the context
export const useVideo = () => useContext(VideoContext);
