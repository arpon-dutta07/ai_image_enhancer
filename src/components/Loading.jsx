import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      
      {/* Main Loading Animation */}
      <div className="relative mb-8">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin-slow"></div>
        
        {/* Inner Ring */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        
        {/* Orbiting Dots */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 relative animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          ✨ AI Magic in Progress ✨
        </h3>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-medium text-gray-700">Processing your image</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay-600"></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Our AI is analyzing and enhancing your image with advanced algorithms
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-shimmer bg-[length:200%_100%]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-float animation-delay-600"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float animation-delay-900"></div>
      </div>
    </div>
  )
}

export default Loading