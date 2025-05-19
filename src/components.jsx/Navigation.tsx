import React from "react";

import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Navigation = ({ isDarkMode, toggleTheme, handleLaunchApp }) => {
   return (
      <nav className="px-4 sm:px-16 flex justify-between items-center py-6 sm:py-8">
         <div className="flex items-center">
            <img
               src={new URL("../assets/aboki.svg", import.meta.url).toString()}
               alt="ABOKI Logo"
               className="w-20 h-10 mr-2"
            />
         </div>

         <div className="flex items-center">
            <motion.button
               onClick={handleLaunchApp}
               whileHover={{ scale: 1.03 }}
               whileTap={{ scale: 0.97 }}
               className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700
          text-white font-medium py-2 px-4 sm:px-6 text-lg whitespace-nowrap rounded-full flex items-center w-auto">
               <MdArrowOutward className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
               <span>Launch App</span>
            </motion.button>
         </div>
      </nav>
   );
};

export default Navigation;
