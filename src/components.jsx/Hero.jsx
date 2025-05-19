import React, { useState, useEffect } from "react";
import Image from "./../assets/image.png"; // Correct path

const Hero = () => {
  const [waitlistStats, setWaitlistStats] = useState({
    totalRegistrations: 0,
    isLoading: true,
    error: null
  });
  
  // Animation for counter
  const [displayCount, setDisplayCount] = useState(0);
  
  // Animation for text reveal
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  // Slider state for features
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const features = [
    { icon: "crypto", text: "Easy Crypto Trading" },
    { icon: "secure", text: "Secure Transactions" },
    { icon: "fast", text: "Lightning Fast" }
  ];
  
  useEffect(() => {
    // Show animation with preset numbers during loading
    let loadingTimer;
    if (waitlistStats.isLoading) {
      let count = 0;
      loadingTimer = setInterval(() => {
        // Use 0002 as preset number while loading
        setDisplayCount(2);
      }, 300);
    }
    
    // Fetch waitlist stats
    const fetchStats = async () => {
      try {
        const response = await fetch('https://waitlist-backend-16v0.onrender.com/api/waitlist/stats', {
          // Add cache control to prevent using cached results
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        const data = await response.json();
        
        // Clear the loading animation
        clearInterval(loadingTimer);
        
        if (data.success) {
          setWaitlistStats({
            totalRegistrations: data.data.totalRegistrations,
            isLoading: false,
            error: null
          });
        } else {
          throw new Error("Failed to fetch stats");
        }
      } catch (error) {
        console.error("Error fetching waitlist stats:", error);
        // Clear the loading animation
        clearInterval(loadingTimer);
        
        setWaitlistStats({
          totalRegistrations: 2, // Default to 2 if there's an error
          isLoading: false,
          error: error.message
        });
      }
    };
    
    // Wait a bit before fetching to show the loading animation
    setTimeout(() => {
      fetchStats();
    }, 1500);
    
    // Show the text after the counter is loaded
    setTimeout(() => {
      setIsTextVisible(true);
    }, 2500);
    
    return () => clearInterval(loadingTimer);
  }, []);
  
  // Animate the counter
  useEffect(() => {
    if (!waitlistStats.isLoading) {
      const total = waitlistStats.totalRegistrations;
      let start = 0;
      const duration = 2500; // 2.5 seconds
      const step = 16; // ~60fps
      const increment = Math.ceil(total / (duration / step));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= total) {
          setDisplayCount(total);
          clearInterval(timer);
        } else {
          setDisplayCount(start);
        }
      }, step);
      
      return () => clearInterval(timer);
    }
  }, [waitlistStats.isLoading, waitlistStats.totalRegistrations]);
  
  // Auto-rotate features
  useEffect(() => {
    if (isTextVisible) {
      const featureInterval = setInterval(() => {
        setActiveFeatureIndex((prev) => (prev + 1) % features.length);
      }, 3000); // Change feature every 3 seconds
      
      return () => clearInterval(featureInterval);
    }
  }, [isTextVisible, features.length]);
  
  // Format the count with leading zeros
  const formatCount = (count) => {
    return count.toString().padStart(4, '0').split('');
  };
  
  // Render feature icon based on type
  const renderFeatureIcon = (iconType) => {
    switch (iconType) {
      case "crypto":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "secure":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "fast":
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Purple color variables
  const purpleText = "#ffffff"; // White text
  const lightPurple = "#B19CD9"; // A lighter purple
  const accentPurple = "#8A2BE2"; // Brighter purple for highlights

  return (
    <div className="relative">
      <div
        className="w-[90%] md:w-[90%] lg:w-[85%] relative rounded-2xl shadow-lg animate-fadeIn mx-auto overflow-hidden"
        style={{
          filter: "blur(3px)",
          aspectRatio: "18/9",
          backgroundImage: `url(${Image ? Image : ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          imageRendering: "high-quality",
        }}>
        {!Image && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <p className="text-center text-white text-sm md:text-lg">
              Background image not available
            </p>
          </div>
        )}
      </div>
      
      {/* Stats Overlay - with glassmorphic background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[85%] md:w-[70%] z-10">
        <div className="glassmorphic p-6 md:p-8 rounded-2xl animated-border">
          <p 
            className="text-white text-base md:text-xl lg:text-2xl uppercase tracking-wider mb-4 font-semibold"
          >
            Total Beta Testers
          </p>
          
          <div className="flex justify-center items-center mb-4">
            <div className="flex flex-wrap justify-center">
              {formatCount(displayCount).map((digit, index) => (
                <div 
                  key={index}
                  className="digit-glassmorphic w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 mx-1 my-1 rounded-lg flex items-center justify-center font-bold text-2xl md:text-3xl lg:text-4xl"
                  style={{
                    animation: waitlistStats.isLoading 
                      ? `pulse 1.5s infinite ${index * 0.1}s` 
                      : `flipIn 0.5s ${index * 0.1}s both`,
                    transformStyle: 'preserve-3d',
                    color: purpleText
                  }}
                >
                  {digit}
                </div>
              ))}
            </div>
          </div>
          
          {/* What is ABOKI Section */}
          <div className={`mt-8 transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="what-is-section">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 animated-text">
                What is <span className="text-purple-400 pulsing-text">ABOKI</span>?
              </h3>
              
              <div className="text-info-container">
                <p className="text-white text-sm md:text-base mb-3 fade-in-slide" style={{ animationDelay: '0.3s' }}>
                  Aboki is a <span className="text-purple-400 font-medium expanding-text">Solution Built On Base</span> that enables users 
                  to buy and sell cryptocurrency seamlessly to fiat.
                </p>
                
                <p className="text-white text-sm md:text-base fade-in-slide" style={{ animationDelay: '0.6s' }}>
                  It also helps traditional peer-to-peer vendors <span className="text-purple-400 font-medium expanding-text">automate their services</span> 
                  with cutting-edge technology.
                </p>
              </div>
              
              {/* Feature slider with sliding animation */}
              <div className="feature-slider mt-6 overflow-hidden">
                <div className="feature-track flex transition-transform duration-500" 
                  style={{ transform: `translateX(-${activeFeatureIndex * 100}%)` }}>
                  {features.map((feature, index) => (
                    <div key={index} className="feature-slide w-full flex-shrink-0 flex justify-center">
                      <div className="feature-item">
                        <div className="icon-circle">
                          {renderFeatureIcon(feature.icon)}
                        </div>
                        <span>{feature.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Feature indicator dots */}
                <div className="feature-dots flex justify-center mt-4 space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeatureIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeatureIndex === index ? 'bg-purple-400 w-4' : 'bg-white bg-opacity-50'
                      }`}
                      aria-label={`View feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations and glassmorphism */}
      <style jsx>{`
        @keyframes flipIn {
          0% {
            transform: perspective(400px) rotateX(90deg);
            opacity: 0;
          }
          40% {
            transform: perspective(400px) rotateX(-10deg);
          }
          70% {
            transform: perspective(400px) rotateX(10deg);
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.98);
            opacity: 0.8;
          }
        }
        
        /* Glassmorphic container */
        .glassmorphic {
          background: rgba(23, 12, 61, 0.4);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        /* Glassmorphic digits */
        .digit-glassmorphic {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .animated-border {
          position: relative;
          overflow: hidden;
        }
        
        .animated-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${purpleText}, transparent);
          animation: animate 3s linear infinite;
        }
        
        @keyframes animate {
          0% {
            left: -100%;
          }
          50%, 100% {
            left: 100%;
          }
        }
        
        /* Text animation */
        .animated-text {
          display: inline-block;
          position: relative;
        }
        
        .pulsing-text {
          display: inline-block;
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.3);
          }
          to {
            text-shadow: 0 0 10px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.5), 0 0 30px rgba(138, 43, 226, 0.3);
          }
        }
        
        .expanding-text {
          display: inline-block;
          animation: expandContract 4s ease-in-out infinite;
          transform-origin: center;
        }
        
        @keyframes expandContract {
          0%, 100% {
            transform: scale(1);
            letter-spacing: normal;
          }
          50% {
            transform: scale(1.05);
            letter-spacing: 0.5px;
          }
        }
        
        .fade-in-slide {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInSlide 0.8s forwards;
        }
        
        @keyframes fadeInSlide {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Feature slider */
        .feature-slider {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .feature-track {
          display: flex;
          width: 100%;
        }
        
        .feature-slide {
          flex: 0 0 100%;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(138, 43, 226, 0.15);
          padding: 10px 20px;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(177, 156, 217, 0.3);
          color: #B19CD9;
          margin-right: 12px;
          transition: all 0.3s ease;
        }
        
        .feature-item:hover .icon-circle {
          background: rgba(177, 156, 217, 0.5);
          transform: rotate(10deg);
        }
        
        .text-info-container {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Hero;