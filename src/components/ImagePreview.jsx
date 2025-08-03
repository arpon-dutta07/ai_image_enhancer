import Loading from "./Loading";

const ImagePreview = (props) => {
    const downloadImage = async () => {
        if (!props.enhanced) return;
        
        try {
            const response = await fetch(props.enhanced);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `enhanced-image-${Date.now()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading image:', error);
            alert('Failed to download image. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Image preview section - Always visible */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
                {/* Original Image */}
                <div className="glass hover-lift rounded-2xl overflow-hidden shadow-2xl border border-white/30 animate-slide-in-left bg-white/10">
                    <div className="relative">
                        <h2 className="text-lg md:text-xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 md:py-4 relative overflow-hidden">
                            <span className="relative z-10">📷 Original Image</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                        </h2>
                    </div>

                    {props.uploaded ? (
                        <div className="relative group">
                            <img
                                src={props.uploaded}
                                alt="Original"
                                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-700/50 to-gray-800/50">
                            <div className="animate-float">
                                <svg className="w-12 md:w-16 h-12 md:h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-gray-300 font-medium text-sm md:text-base">No Image Selected</span>
                        </div>
                    )}
                </div>

                {/* Enhanced Image and Download Button */}
                <div className="space-y-4 md:space-y-6">
                    <div className="glass hover-lift rounded-2xl overflow-hidden shadow-2xl border border-white/30 animate-slide-in-right bg-white/10">
                        <div className="relative">
                            <h2 className="text-lg md:text-xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:py-4 relative overflow-hidden">
                                <span className="relative z-10">✨ Enhanced Image</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                            </h2>
                        </div>

                        {props.enhanced && !props.loading ? (
                            <div className="relative group">
                                <img
                                    src={props.enhanced}
                                    alt="Enhanced"
                                    className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105 animate-bounce-in"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Success Badge */}
                                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold animate-bounce-in animation-delay-600">
                                    ✓ Enhanced
                                </div>
                            </div>
                        ) : props.loading ? (
                            <div className="h-64 md:h-80 lg:h-96">
                                <Loading />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                <div className="animate-float">
                                    <svg className="w-12 md:w-16 h-12 md:h-16 text-blue-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-blue-300 font-medium text-sm md:text-base">Waiting for Enhancement</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Download Button - Always visible but disabled when no enhanced image */}
                    <div className="flex justify-center animate-fade-in-up animation-delay-900">
                        <button
                            onClick={downloadImage}
                            disabled={!props.enhanced || props.loading}
                            className={`group relative font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl shadow-2xl transition-all duration-300 ease-in-out transform flex items-center gap-2 md:gap-3 overflow-hidden w-full sm:w-auto ${
                                props.enhanced && !props.loading
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:scale-105 hover:-translate-y-1 cursor-pointer'
                                    : 'bg-gradient-to-r from-gray-400 to-gray-500 text-gray-200 cursor-not-allowed opacity-60'
                            }`}
                        >
                            {/* Button Background Animation - Only when enabled */}
                            {props.enhanced && !props.loading && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            )}
                            
                            <div className="relative z-10 flex items-center gap-2 md:gap-3 justify-center">
                                <svg 
                                    className={`w-5 md:w-6 h-5 md:h-6 transition-transform duration-300 ${
                                        props.enhanced && !props.loading ? 'group-hover:scale-110' : ''
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
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                    />
                                </svg>
                                <span className="text-base md:text-lg font-semibold">
                                    {props.loading ? 'Processing...' : props.enhanced ? 'Download Enhanced Image' : 'Download Enhanced Image'}
                                </span>
                            </div>
                            
                            {/* Sparkle Effects - Only when enabled */}
                            {props.enhanced && !props.loading && (
                                <>
                                    <div className="absolute top-1 right-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-ping opacity-75"></div>
                                    <div className="absolute bottom-1 left-1 w-1 md:w-1 h-1 md:h-1 bg-white rounded-full animate-ping animation-delay-300 opacity-75"></div>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
