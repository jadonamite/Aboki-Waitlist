import { useState } from "react";

/**
 * Custom hook for managing toast notifications
 * @returns {Object} - Toast state and functions
 */
const useToast = () => {
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState("");

   // Show toast notification
   const showToastNotification = (message) => {
      setToastMessage(message);
      setShowToast(true);
      setTimeout(() => {
         setShowToast(false);
      }, 3000);
   };

   // Hide toast notification
   const hideToastNotification = () => {
      setShowToast(false);
   };

   return {
      showToast,
      toastMessage,
      showToastNotification,
      hideToastNotification,
   };
};

export default useToast;
