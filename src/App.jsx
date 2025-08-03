import React from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 relative overflow-hidden'>
       {/* Enhanced Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Main floating orbs */}
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
         
         {/* Additional smaller orbs */}
         <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float"></div>
         <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float animation-delay-1200"></div>
         <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-lg opacity-40 animate-float animation-delay-600"></div>
         
         {/* Animated grid pattern */}
         <div className="absolute inset-0 opacity-10">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
         </div>
         
         {/* Floating particles */}
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-twinkle animation-delay-300"></div>
         <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-80 animate-twinkle animation-delay-900"></div>
         <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-twinkle animation-delay-1200"></div>
         <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-60 animate-twinkle animation-delay-600"></div>
         
         {/* Additional twinkling stars */}
         <div className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-twinkle animation-delay-1500"></div>
         <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-70 animate-twinkle animation-delay-1800"></div>
         <div className="absolute top-32 right-32 w-1 h-1 bg-green-300 rounded-full opacity-90 animate-twinkle animation-delay-2100"></div>
         <div className="absolute bottom-16 right-1/2 w-2 h-2 bg-rose-300 rounded-full opacity-60 animate-twinkle animation-delay-2400"></div>
       </div>

       <div className='text-center mb-8 md:mb-12 relative z-10 animate-fade-in-up px-4'>
          <div className="inline-block relative">
            {/* Subtle Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-lg blur-xl opacity-15 animate-pulse-glow"></div>
            
            {/* Main title with readable effects */}
            <h1 className='relative text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-lg'>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0s'}}>A</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.1s'}}>I</span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.2s'}}>I</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.3s'}}>m</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.4s'}}>a</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.5s'}}>g</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.6s'}}>e</span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.7s'}}>E</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.8s'}}>n</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '0.9s'}}>h</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '1.0s'}}>a</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '1.1s'}}>n</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '1.2s'}}>c</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '1.3s'}}>e</span>
              <span className="inline-block animate-bounce-letters animate-letter-dance" style={{animationDelay: '1.5s'}}>r</span>
            </h1>
            
            {/* Enhanced animated underline with more particles */}
            <div className="relative mx-auto w-32 md:w-48 h-2 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 to-yellow-500 rounded-full animate-gradient-x"></div>
              <div className="absolute -top-1 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-float animation-delay-300"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-600"></div>
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-twinkle animation-delay-300"></div>
            </div>
            

          </div>
          
          <p className='text-lg md:text-xl text-gray-300 mt-6 md:mt-8 animate-fade-in-up animation-delay-600 max-w-2xl mx-auto leading-relaxed px-4 font-medium'>
            <span className="animate-rainbow-text">✨</span> Transform your images with cutting-edge AI technology. Upload, enhance, and download in seconds! <span className="animate-rainbow-text">✨</span>
          </p>
          
          {/* Simplified Floating icons - positioned away from text */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute bottom-10 left-20 text-2xl animate-float animation-delay-1200">🚀</div>
            <div className="absolute bottom-20 right-20 text-2xl animate-float animation-delay-600">✨</div>
          </div>
       </div>

        <div className="animate-fade-in-up animation-delay-600 w-full">
          <Home/>
        </div>

        <div className='text-lg mt-8 text-gray-400 animate-fade-in-up animation-delay-900 relative z-10'>
            <div className="flex items-center gap-2">
              <span className="animate-pulse">⚡</span>
              Powered By @PhoenixAI
              <span className="animate-pulse">⚡</span>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default App