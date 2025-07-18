import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-pulse text-lg font-medium text-gray-600">
        Processing your image...
      </div>
    </div>
  )
}

export default Loading