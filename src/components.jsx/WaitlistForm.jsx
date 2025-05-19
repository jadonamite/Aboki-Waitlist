// components/WaitlistForm.jsx
import React from "react";
import TwitterFollowStep from "./TwitterFollowStep";
import EmailStep from "./EmailStep";
import WalletStep from "./WalletStep";
import StepIndicator from "./StepIndicator";
import SuccessMessage from "./SuccessMessage";

const WaitlistForm = ({
   currentStep,
   email,
   setEmail,
   walletAddress,
   setWalletAddress,
   isValidEthAddress,
   handleTwitterFollow,
   handleSubmit,
   formSubmitted,
}) => {
   return (
      <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg shadow-xl animate-fadeIn">
         {!formSubmitted ? (
            <>
               <h2 className="text-xl font-bold mb-4 text-white">
                  Join the waitlist
               </h2>

               {currentStep === 1 && (
                  <TwitterFollowStep onTwitterFollow={handleTwitterFollow} />
               )}

               {currentStep === 2 && (
                  <EmailStep
                     email={email}
                     setEmail={setEmail}
                     onSubmit={handleSubmit}
                  />
               )}

               {currentStep === 3 && (
                  <WalletStep
                     walletAddress={walletAddress}
                     setWalletAddress={setWalletAddress}
                     isValidEthAddress={isValidEthAddress}
                     onSubmit={handleSubmit}
                  />
               )}

               <StepIndicator currentStep={currentStep} totalSteps={3} />
            </>
         ) : (
            <SuccessMessage />
         )}
      </div>
   );
};

export default WaitlistForm;
