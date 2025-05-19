import { useState } from "react";

/**
 * Custom hook for managing multi-step forms
 * @param {number} initialStep - The initial step of the form (default: 1)
 * @param {number} totalSteps - Total number of steps in the form
 * @returns {Object} - Form state and navigation functions
 */
const useMultiStepForm = (initialStep = 1, totalSteps = 3) => {
   const [currentStep, setCurrentStep] = useState(initialStep);
   const [formSubmitted, setFormSubmitted] = useState(false);

   // Go to next step
   const nextStep = () => {
      if (currentStep < totalSteps) {
         setCurrentStep(currentStep + 1);
         return true;
      }
      return false;
   };

   // Go to previous step
   const prevStep = () => {
      if (currentStep > 1) {
         setCurrentStep(currentStep - 1);
         return true;
      }
      return false;
   };

   // Go to specific step
   const goToStep = (step) => {
      if (step >= 1 && step <= totalSteps) {
         setCurrentStep(step);
         return true;
      }
      return false;
   };

   // Complete form
   const completeForm = () => {
      setFormSubmitted(true);
   };

   // Reset form
   const resetForm = () => {
      setCurrentStep(initialStep);
      setFormSubmitted(false);
   };

   return {
      currentStep,
      formSubmitted,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === totalSteps,
      nextStep,
      prevStep,
      goToStep,
      completeForm,
      resetForm,
   };
};

export default useMultiStepForm;
