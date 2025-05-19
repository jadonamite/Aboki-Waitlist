import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Navigation = ({ isDarkMode, toggleTheme, handleLaunchApp }) => {
   return (
      <nav className={`px-16 flex justify-between items-center py-8`}>
         <div className="flex items-center"></div>

         <div className="flex items-center">
            <motion.button
               onClick={handleLaunchApp}
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.97 }}
               className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 
   text-white font-medium py-2 px-4 sm:px-6 text-lg whitespace-nowrap rounded-full flex items-center w-auto  cursor-not-allowed">
               <MdArrowOutward className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
               <span className="truncate text-white">Launch App</span>
            </motion.button>
         </div>
      </nav>
   );
};

export default Navigation;
