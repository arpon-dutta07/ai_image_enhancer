import React, { useState } from 'react'

const ImageUpload = (props) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      props.UploadImageHandler(file);
    } else if (file) {
      alert('Please select a valid image file.');
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        props.UploadImageHandler(file);
      } else {
        alert('Please drop a valid image file.');
      }
    }
  }

  return (
    <div className='glass hover-lift rounded-2xl md:rounded-3xl p-4 md:p-8 w-full max-w-4xl shadow-2xl border border-white/20 backdrop-blur-xl animate-bounce-in'>
      
      <label 
        htmlFor="Inputfile" 
        className={`block w-full cursor-pointer border-2 border-dashed rounded-xl md:rounded-2xl p-6 md:p-12 text-center transition-all duration-500 ease-out relative overflow-hidden ${
          isDragOver 
            ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 scale-105 shadow-2xl' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:scale-102'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-shimmer"></div>
        </div>
       
        <input 
          type="file" 
          id="Inputfile" 
          className="hidden"
          onChange={ShowImageHandler}
          accept="image/*"
        />
        
        <div className="flex flex-col items-center gap-3 md:gap-4 relative z-10">
          <div className={`relative ${isDragOver ? 'animate-bounce' : 'animate-float'}`}>
            <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
              isDragOver ? 'bg-blue-400 opacity-30' : 'bg-gray-400 opacity-20'
            }`}></div>
            <svg 
              className={`w-12 md:w-16 h-12 md:h-16 relative z-10 transition-all duration-500 ${
                isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400 hover:text-blue-400'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
              />
            </svg>
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <span className={`text-lg md:text-xl font-semibold transition-all duration-300 block ${
              isDragOver ? 'text-blue-600 scale-105' : 'text-gray-700'
            }`}>
              {isDragOver ? '✨ Drop your image here! ✨' : '📸 Click or drag to upload your image!'}
            </span>
            
            <div className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded-full">JPG</span>
              <span className="px-2 py-1 bg-gray-100 rounded-full">PNG</span>
              <span className="px-2 py-1 bg-gray-100 rounded-full">GIF</span>
              <span className="px-2 py-1 bg-gray-100 rounded-full">WebP</span>
            </div>
            
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Maximum file size: 10MB
            </p>
          </div>
        </div>

        {/* Sparkle Animation */}
        {isDragOver && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping animation-delay-600"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-900"></div>
          </div>
        )}
      </label>

    </div>
  )
}

export default ImageUpload