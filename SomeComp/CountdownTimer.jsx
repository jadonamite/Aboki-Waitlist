// components/CountdownTimer.jsx
import React, { useEffect, useState } from "react";

const CountdownTimer = ({ timeLeft }) => {
   const [isVisible, setIsVisible] = useState(false);

   // Animation for text reveal
   useEffect(() => {
      // Small delay to trigger animation after component mounts
      const timer = setTimeout(() => {
         setIsVisible(true);
      }, 500);

      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
         {/* Countdown timer with glass morphism */}
         <div className="grid grid-cols-4 gap-4 w-full">
            {[
               { label: "DAYS", value: String(timeLeft.days).padStart(2, "0") },
               {
                  label: "HOURS",
                  value: String(timeLeft.hours).padStart(2, "0"),
               },
               {
                  label: "MINS",
                  value: String(timeLeft.minutes).padStart(2, "0"),
               },
               {
                  label: "SECS",
                  value: String(timeLeft.seconds).padStart(2, "0"),
               },
            ].map((item, index) => (
               <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-700 delay-${
                     index * 100
                  } transform ${
                     isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                  }`}>
                  <div
                     className="w-full aspect-square bg-transparent/40 backdrop-blur-md rounded-lg flex items-center justify-center text-3xl md:text-5xl font-bold text-white shadow-lg mb-2"
                     style={{
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                     }}>
                     {item.value}
                  </div>
                  <span className="text-xs md:text-sm text-gray-300 font-medium">
                     {item.label}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CountdownTimer;
