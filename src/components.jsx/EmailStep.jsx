// components/EmailStep.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

const EmailStep = ({ email, setEmail, onSubmit }) => {
   return (
      <form onSubmit={onSubmit}>
         <label className="block text-gray-400 mb-2">Email Address</label>
         <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
         />
         <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg flex items-center justify-center transition-all hover:bg-purple-700">
            Next Step
            <ChevronRight size={16} className="ml-1" />
         </button>
      </form>
   );
};

export default EmailStep;
