import React from 'react'
import './App.css'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-8 px-4 relative overflow-hidden'>
       
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
         <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
       </div>

       <div className='text-center mb-8 md:mb-12 relative z-10 animate-fade-in-up px-4'>
          <div className="inline-block">
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-gradient-x'>
              AI Image Enhancer
            </h1>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <p className='text-lg md:text-xl text-gray-600 mt-4 md:mt-6 animate-fade-in-up animation-delay-300 max-w-2xl mx-auto leading-relaxed px-4'>
            Transform your images with cutting-edge AI technology. Upload, enhance, and download in seconds!
          </p>
       </div>

        <div className="animate-fade-in-up animation-delay-600 w-full">
          <Home/>
        </div>

        <div className='text-lg mt-8 text-gray-500 animate-fade-in-up animation-delay-900 relative z-10'>
            <div className="flex items-center gap-2">
              <span className="animate-pulse">⚡</span>
              Powered By @PhoenixAI
              <span className="animate-pulse">⚡</span>
            </div>
        </div>
    </div>
  )
}

export default App