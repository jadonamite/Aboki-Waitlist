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
   isSubmitting,
}) => {
   return (
      <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg shadow-xl animate-fadeIn">
         {!formSubmitted ? (
            <>
               <h2 className="text-xl font-bold mb-4 text-white text-center">
                  Join the waitlist
               </h2>

               {/* Email Step (first step) */}
               {currentStep === 1 && (
                  <EmailStep
                     email={email}
                     setEmail={setEmail}
                     onSubmit={handleSubmit}
                  />
               )}

               {/* Wallet Step (second step) */}
               {currentStep === 2 && (
                  <WalletStep
                     walletAddress={walletAddress}
                     setWalletAddress={setWalletAddress}
                     isValidEthAddress={isValidEthAddress}
                     onSubmit={handleSubmit}
                     isSubmitting={isSubmitting}
                  />
               )}

               {/* Twitter Follow Step (third step) */}
               {currentStep === 3 && (
                  <TwitterFollowStep 
                     onTwitterFollow={handleTwitterFollow} 
                     buttonText="Follow on Twitter to Complete"
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