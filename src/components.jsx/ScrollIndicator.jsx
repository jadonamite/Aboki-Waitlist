import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const ScrollIndicator = () => {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setIsVisible(false);
         } else {
            setIsVisible(true);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <div
         className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out z-50 ${
            isVisible
               ? "opacity-100 translate-y-0"
               : "opacity-0 translate-y-10 pointer-events-none"
         }`}>
         <div className="flex flex-col items-center">
            <div className="text-purple-500/50 font-bold text-xl md:text-6xl mb-2 tracking-wider animate-bounce text-shadow-glow">
               Scroll Down
            </div>
            <div className="rounded-full bg-purple-900 bg-opacity-30 p-3 shadow-glow">
               <FaArrowDown
                  className="text-purple-400 text-2xl md:text-3xl animate-bounce"
                  aria-hidden="true"
               />
            </div>
         </div>
      </div>
   );
};

export default ScrollIndicator;
