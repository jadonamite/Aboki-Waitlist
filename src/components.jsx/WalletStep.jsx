// frontend/src/components.jsx/WalletStep.jsx
import React, { useState } from "react";
import { waitlistService } from "../services/api";

const WalletStep = ({
  walletAddress,
  setWalletAddress,
  isValidEthAddress,
  onSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Use the original onSubmit handler which is connected to the parent component
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="walletAddress"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Ethereum Wallet Address
        </label>
        <input
          id="walletAddress"
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="0x..."
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
          required
        />
        {!isValidEthAddress(walletAddress) && walletAddress && (
          <p className="mt-1 text-sm text-red-400">
            Please enter a valid Ethereum address
          </p>
        )}
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValidEthAddress(walletAddress) || isSubmitting}
        className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
          !isValidEthAddress(walletAddress) || isSubmitting
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Complete Registration"}
      </button>
    </form>
  );
};

export default WalletStep;