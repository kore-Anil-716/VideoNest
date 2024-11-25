import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  axios.defaults.withCredentials=true;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setMessage("Please select a valid video file.");
    }
  };

  const handleUpload = async () => {
    if (!videoFile || !videoTitle || !videoDescription) {
      setMessage("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);

    try {
      setMessage("Uploading...");
      setProgress(0);

      const response = await axios.post('http://localhost:3000/uploadfile/', formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      setMessage("Video uploaded successfully!");
    } catch (error) {
      console.error("Error uploading video:", error);
      setMessage("Failed to upload video.");
    } finally {
      setProgress(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-20 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Upload Your Video</h1>

      {/* Video Title Input */}
      <label className="block text-gray-700 font-semibold mb-2">Video Title</label>
      <input
        type="text"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4"
        placeholder="Enter video title"
      />

      {/* Video Description Input */}
      <label className="block text-gray-700 font-semibold mb-2">Video Description</label>
      <textarea
        value={videoDescription}
        onChange={(e) => setVideoDescription(e.target.value)}
        className="w-full p-2 border text-black border-gray-300 rounded-lg mb-4"
        placeholder="Enter video description"
        rows="4"
      />

      {/* Video File Input and Preview */}
      <div
        className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center justify-center gap-3 mb-4"
        onClick={() => document.getElementById("fileInput").click()}
      >
        {preview ? (
          <video
            src={preview}
            controls
            className="w-full rounded-lg"
            alt="Video Preview"
          ></video>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 018 0m0 0a4 4 0 008 0m-8 0v6m0-6H5m4 0h6"
              />
            </svg>
            <p className="text-gray-600">Drag and drop your video here</p>
            <p className="text-sm text-gray-500">or click to select a video</p>
          </>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Upload Video
      </button>

      {message && <p className="mt-4 text-gray-700">{message}</p>}
    </div>
  );
};

export default VideoUpload;
