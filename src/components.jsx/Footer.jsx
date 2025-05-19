import React from "react";
import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
   return (
      <footer className="bg-white text-gray-700 py-8 mt-auto shadow-sm">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
               {/* Social Links */}
               <div className="flex gap-4">
                  <a
                     href="https://https://x.com/abokixyz"
                     target="_blank"
                     className="text-gray-600 hover:text-purple-500 transition-all hover:translate-y-[-5px]">
                     <BsTwitterX size={18} />
                  </a>
                  <a
                     href="https://github.com/Aboki-finance"
                     target="_blank"
                     className="text-gray-600 hover:text-purple-500 transition-all hover:translate-y-[-5px]">
                     <FaGithub size={20} />
                  </a>
                  <a
                     href="https://t.me/aboki_ramp_bot"
                     target="_blank"
                     className="text-gray-600 hover:text-purple-500 transition-all hover:translate-y-[-5px]">
                     <FaTelegram size={20} />
                  </a>
                  <a
                     href="#"
                     className="text-gray-600 hover:text-purple-500 transition-all hover:translate-y-[-5px]">
                     <FaDiscord size={20} />
                  </a>
               </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
               <p>
                  &copy; {new Date().getFullYear()} Aboki. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
