// components/StepIndicator.jsx
import React from "react";

const StepIndicator = ({ currentStep, totalSteps }) => {
   return (
      <div className="flex justify-center mt-6">
         {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div
               key={step}
               className={`w-2 h-2 rounded-full mx-1 ${
                  currentStep >= step ? "bg-purple-500" : "bg-gray-600"
               }`}
            />
         ))}
      </div>
   );
};

export default StepIndicator;
