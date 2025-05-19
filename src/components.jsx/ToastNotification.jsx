// components/ToastNotification.jsx
import React from "react";
import { X } from "lucide-react";

const ToastNotification = ({ message, onClose }) => {
   return (
      <div className="fixed top-20 right-5 z-50 flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 animate-fadeIn">
         <span>{message}</span>
         <button
            onClick={onClose}
            className="ml-2 text-gray-300 hover:text-white">
            <X size={16} />
         </button>
      </div>
   );
};

export default ToastNotification;
