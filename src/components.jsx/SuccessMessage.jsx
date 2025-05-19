import React from "react";
import { Check } from "lucide-react";

const SuccessMessage = () => {
  return (
    <div className="text-center">
      <div className="rounded-full bg-green-500 w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-bounce">
        <Check size={32} className="text-white" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-white">
        You're on the list!
      </h2>
      <p className="text-gray-300 mb-4">
        Thank you for joining the Aboki waitlist. We'll notify you when we
        launch!
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
        {/* X.com Link with new X logo */}
        <a
          href="https://x.com/Abokixyz"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link text-purple-400 hover:text-purple-300 flex items-center justify-center transition-transform hover:scale-105"
        >
          {/* X Logo (new Twitter logo) */}
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
          <span className="social-text">Stay Tuned for updates</span>
        </a>
        
        {/* Telegram Link with jumping animation */}
        <a
          href="https://t.me/aboxixyz" 
          target="_blank"
          rel="noopener noreferrer"
          className="social-link telegram-link text-purple-400 hover:text-purple-300 flex items-center justify-center transition-transform hover:scale-105"
        >
          {/* Telegram Logo */}
          <svg 
            className="w-5 h-5 mr-2" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.308.35-.634.35l.227-3.193 5.8-5.242c.223-.216-.05-.308-.346-.13l-7.185 4.51-3.095-.937c-.67-.213-.68-.67.14-1.004l12.08-4.652c.558-.204 1.041.136.913 1.004z" />
          </svg>
          <span className="social-text">Join our Telegram community</span>
        </a>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .social-link {
          padding: 8px 12px;
          border-radius: 8px;
          background: rgba(107, 70, 193, 0.2);
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: rgba(107, 70, 193, 0.3);
        }
        
        .telegram-link {
          animation: pulse-jump 2s infinite;
        }
        
        @keyframes pulse-jump {
          0%, 100% {
            transform: translateY(0);
          }
          10% {
            transform: translateY(-10px);
          }
          20% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(0);
          }
        }
        
        @media (max-width: 640px) {
          .social-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessMessage;