// components/TwitterFollowStep.jsx
import React from "react";

const TwitterFollowStep = ({ onTwitterFollow }) => {
   return (
      <div className="text-center">
         <p className="text-gray-300 mb-4">
            Follow us on Twitter to join the waitlist
         </p>
         <button
            onClick={onTwitterFollow}
            className="w-full bg-[#1DA1F2] text-white py-3 rounded-lg flex items-center justify-center transition-all hover:bg-[#1a91da]">
            <svg
               className="w-5 h-5 mr-2"
               fill="currentColor"
               viewBox="0 0 24 24">
               <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Follow @Abokixyz
         </button>
      </div>
   );
};

export default TwitterFollowStep;
