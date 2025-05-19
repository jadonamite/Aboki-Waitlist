import React, { useState, useEffect } from "react";
import Image from "./../assets/image.png"; // Correct path

const Hero = () => {
   const [waitlistStats, setWaitlistStats] = useState({
      totalRegistrations: 0,
      isLoading: true,
      error: null,
   });

   const [displayCount, setDisplayCount] = useState(0);

   useEffect(() => {
      let loadingTimer;
      if (waitlistStats.isLoading) {
         loadingTimer = setInterval(() => {
            setDisplayCount(2);
         }, 300);
      }

      return () => {
         clearInterval(loadingTimer);
      };
   }, [waitlistStats.isLoading]);

   const formatCount = (count) => {
      return String(count).padStart(4, "0").split("");
   };

   const purpleText = "#ffffff";

   return (
      <div className="relative">
         <div
            className="w-[90%] md:w-[90%] lg:w-[85%] aspect-[18/9] max-[480px]:aspect-[18/13] relative rounded-2xl shadow-lg animate-fadeIn mx-auto overflow-hidden"
            style={{
               filter: "blur(3px)",
               backgroundImage: `url(${Image ? Image : ""})`,
               backgroundSize: "cover",
               backgroundPosition: "center center",
               imageRendering: "high-quality",
            }}></div>

         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[85%] md:w-[70%] z-10">
            <div className="glassmorphic p-6 md:p-8 rounded-2xl animated-border">
               <p className="text-white text-base md:text-xl lg:text-2xl uppercase tracking-wider mb-4 font-semibold">
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
                              transformStyle: "preserve-3d",
                              color: purpleText,
                           }}>
                           {digit}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

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
               0%,
               100% {
                  transform: scale(1);
                  opacity: 1;
               }
               50% {
                  transform: scale(0.98);
                  opacity: 0.8;
               }
            }

            .glassmorphic {
               background: rgba(23, 12, 61, 0.4);
               box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
               backdrop-filter: blur(10px);
               -webkit-backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.18);
            }

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
               content: "";
               position: absolute;
               top: 0;
               left: -100%;
               width: 100%;
               height: 2px;
               background: linear-gradient(
                  90deg,
                  transparent,
                  ${purpleText},
                  transparent
               );
               animation: animate 3s linear infinite;
            }

            @keyframes animate {
               0% {
                  left: -100%;
               }
               50%,
               100% {
                  left: 100%;
               }
            }

            /* mobile height adjustment */
            @media (max-width: 480px) {
               div[style*="aspect-ratio"] {
                  aspect-ratio: 9/16 !important;
               }
            }
         `}</style>
      </div>
   );
};

export default Hero;
