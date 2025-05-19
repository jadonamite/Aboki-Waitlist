// components/WalletStep.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

const WalletStep = ({
   walletAddress,
   setWalletAddress,
   isValidEthAddress,
   onSubmit,
}) => {
   return (
      <form onSubmit={onSubmit}>
         <label className="block text-gray-400 mb-2">ETH Wallet Address</label>
         <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="0x..."
            className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 ${
               walletAddress && !isValidEthAddress(walletAddress)
                  ? "border border-red-500 focus:ring-red-500"
                  : "focus:ring-purple-500"
            }`}
            required
         />
         {walletAddress && !isValidEthAddress(walletAddress) && (
            <p className="text-red-500 text-sm mb-2">
               Please enter a valid ETH address (0x followed by 40 hexadecimal
               characters)
            </p>
         )}
         <button
            type="submit"
            className={`w-full py-3 rounded-lg flex items-center justify-center transition-all ${
               isValidEthAddress(walletAddress)
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
            disabled={!isValidEthAddress(walletAddress)}>
            Join Waitlist
            <ChevronRight size={16} className="ml-1" />
         </button>
      </form>
   );
};

export default WalletStep;
