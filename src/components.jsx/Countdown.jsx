import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownHero = () => {
   // Set target date to Wednesday at 12pm
   const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date();

      // Set to Wednesday (3) at 12:00
      targetDate.setDate(now.getDate() + (3 - now.getDay() || 7)); // If already Wednesday, go to next Wednesday
      targetDate.setHours(12, 0, 0, 0);

      // If Wednesday 12pm already passed this week, set to next Wednesday
      if (now.getDay() === 3 && now.getHours() >= 12) {
         targetDate.setDate(targetDate.getDate() + 7);
      }

      const difference = targetDate - now;

      let timeLeft = {
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0,
      };

      if (difference > 0) {
         timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
         };
      }

      return timeLeft;
   };

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
   const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

   useEffect(() => {
      const timer = setInterval(() => {
         setPrevTimeLeft(timeLeft);
         setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
   }, [timeLeft]);

   // Format time units to always display two digits
   const formatTime = (time) => {
      return String(time).padStart(2, "0");
   };

   // Create digit slides for each individual number
   const renderDigit = (value, prevValue, index) => {
      const currentDigit = value.toString().padStart(2, "0")[index];
      const prevDigit = prevValue.toString().padStart(2, "0")[index];
      const hasChanged = currentDigit !== prevDigit;

      return (
         <div className="digit-container" key={`${index}-${currentDigit}`}>
            <AnimatePresence mode="popLayout">
               <motion.div
                  key={currentDigit}
                  initial={hasChanged ? { y: -80 } : { y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: 80 }}
                  transition={{
                     type: "tween",
                     duration: 0.4,
                     ease: "easeInOut",
                  }}
                  className="digit">
                  {currentDigit}
               </motion.div>
            </AnimatePresence>
         </div>
      );
   };

   // Render a complete number unit (days, hours, etc.) with both digits
   const renderNumberUnit = (value, prevValue, label) => {
      return (
         <div className="countdown-box flex-shrink-0">
            <div className="digits-group">
               {renderDigit(value, prevValue, 0)}
               {renderDigit(value, prevValue, 1)}
            </div>
            <div className="text-xs md:text-sm text-white mt-2 tracking-wider font-medium">
               {label}
            </div>
         </div>
      );
   };

   return (
      <div className="relative flex items-center justify-center min-h-[60vh] w-full  overflow-hidden">
         {/* Content container */}
         <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 py-12 mx-auto mt-20">
            {/* Metallic text with shimmer animation */}
            <div className="mb-12 md:mb-16 text-center">
               <h1 className="metallic-text text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide mb-4 mx-auto">
                  COMING SOON
               </h1>
            </div>

            {/* Countdown timer with vertical sliding animation */}
            <div className="flex justify-center space-x-3 md:space-x-5 whitespace-nowrap overflow-x-auto pb-4 w-full max-w-6xl">
               {renderNumberUnit(timeLeft.days, prevTimeLeft.days, "DAYS")}
               {renderNumberUnit(timeLeft.hours, prevTimeLeft.hours, "HOURS")}
               {renderNumberUnit(
                  timeLeft.minutes,
                  prevTimeLeft.minutes,
                  "MINUTES"
               )}
               {renderNumberUnit(
                  timeLeft.seconds,
                  prevTimeLeft.seconds,
                  "SECONDS"
               )}
            </div>
         </div>

         {/* Custom CSS */}
         <style jsx>{`
            .countdown-box {
               background: rgba(255, 255, 255, 0.1);
               backdrop-filter: blur(10px);
               border-radius: 8px;
               padding: 1rem 0.5rem;
               min-width: 120px;
               width: 150px;
               height: 180px;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               border: 1px solid rgba(255, 255, 255, 0.2);
               box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            }

            .digits-group {
               display: flex;
               justify-content: center;
               align-items: center;
               height: 100px;
            }

            .digit-container {
               position: relative;
               overflow: hidden;
               height: 100px;
               width: 60px;
               border-radius: 4px;
            }

            .digit {
               width: 100%;
               height: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 72px;
               font-weight: 700;
               color: white;
               line-height: 1;
            }

            .metallic-text {
               background: linear-gradient(
                  180deg,
                  #ffffff 0%,
                  rgba(255, 255, 255, 0.8) 40%,
                  rgba(255, 255, 255, 0.6) 60%,
                  rgba(255, 255, 255, 0.3) 80%,
                  transparent 100%
               );
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;

               background-size: 200% auto;
               color: transparent;
               -webkit-background-clip: text;
               background-clip: text;
               animation: shimmer 3s infinite linear;
               text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
               letter-spacing: 0.05em;
            }

            @keyframes shimmer {
               0% {
                  background-position: -200% center;
               }
               100% {
                  background-position: 200% center;
               }
            }

            @media (max-width: 768px) {
               .countdown-box {
                  min-width: 80px;
                  width: 90px;
                  height: 110px;
                  padding: 0.5rem 0.25rem;
               }

               .digits-group {
                  height: 70px;
               }

               .digit-container {
                  height: 70px;
                  width: 35px;
               }

               .digit {
                  font-size: 48px;
               }
            }

            @media (max-width: 480px) {
               .countdown-box {
                  min-width: 60px;
                  width: 70px;
                  height: 90px;
               }

               .digits-group {
                  height: 60px;
               }

               .digit-container {
                  height: 60px;
                  width: 25px;
               }

               .digit {
                  font-size: 36px;
               }
            }
         `}</style>
      </div>
   );
};

export default CountdownHero;
