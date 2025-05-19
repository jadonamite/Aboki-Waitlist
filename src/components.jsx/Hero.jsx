import React, { useState, useEffect } from "react";
import Image from "./../assets/image.png"; // Corrected import path

const Hero = () => {
  const [waitlistStats, setWaitlistStats] = useState({
    totalRegistrations: 0,
    isLoading: true,
    error: null
  });
  
  // Animation for counter
  const [displayCount, setDisplayCount] = useState(0);
  
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
        const response = await fetch('https://waitlist-backend-16v0.onrender.com/api/waitlist/stats');
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
  
  // Format the count with leading zeros
  const formatCount = (count) => {
    return count.toString().padStart(4, '0').split('');
  };

  // Purple color variables
  const purpleText = "#ffffff"; // A rich purple color
  const lightPurple = "#B19CD9"; // A lighter purple

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
      `}</style>
    </div>
  );
};

export default Hero;