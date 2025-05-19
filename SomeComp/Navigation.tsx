// components/Navigation.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Navigation = ({ isDarkMode, toggleTheme, handleLaunchApp }) => {
   return (
      <nav
         className={`p-4 flex justify-between items-center border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
         }`}>
         <div className="flex items-center">
            <div
               className={`w-8 h-8 rounded-lg flex items-center justify-center mr-2 ${
                  isDarkMode ? "bg-purple-600" : "bg-purple-500"
               }`}>
               <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
               </div>
            </div>
            <span className="font-bold text-xl">ABOKI</span>
         </div>

         <div className="flex items-center">
            <button
               onClick={toggleTheme}
               className={`mr-4 p-2 rounded-full ${
                  isDarkMode
                     ? "bg-gray-800 text-yellow-400"
                     : "bg-gray-200 text-gray-700"
               }`}>
               {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <motion.button
               onClick={handleLaunchApp}
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.97 }}
               className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 
   text-white font-medium py-2 px-4 sm:px-6 text-lg whitespace-nowrap rounded-full flex items-center w-auto opacity-50 cursor-not-allowed">
               <MdArrowOutward className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
               <span className="truncate text-white">Launch App</span>
            </motion.button>
         </div>
      </nav>
   );
};

export default Navigation;
