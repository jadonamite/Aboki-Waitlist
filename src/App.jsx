import React from "react";
import { useState } from "react";
import "./App.css"; // Import your CSS file here
import Navigation from "./components.jsx/Navigation";
import Footer from "./components.jsx/Footer";
import Hero from "./components.jsx/Hero";
import ScrollIndicator from "./components.jsx/ScrollIndicator";
import WaitlistForm from "./components.jsx/WaitlistForm";
import CountdownHero from "./components.jsx/Countdown";
import useToast from "./hooks/useToast";
import useMultiStepForm from "./hooks/useMultiStepForm";
import { isValidEthAddress } from "./utils/validation";
import nebulaBackground from "/nebula-bg.jpg";

export default function App() {
   // Form state
   const [email, setEmail] = useState("");
   const [walletAddress, setWalletAddress] = useState("");
   const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const {
      showToast,
      toastMessage,
      showToastNotification,
      hideToastNotification,
   } = useToast();
   
   const { currentStep, formSubmitted, nextStep, completeForm } =
      useMultiStepForm(1, 3);

   // Handle Twitter follow - this is now the third step
   // It will submit the registration to API and then route to Twitter
   const handleTwitterFollow = async () => {
      setIsSubmitting(true);
      
      try {
         // Call the API to register the user
         const response = await fetch('https://waitlist-backend-16v0.onrender.com/api/waitlist/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
               email, 
               walletAddress 
            }),
         });

         const data = await response.json();
         
         if (data.success) {
            completeForm();
            showToastNotification(data.message || "You've been successfully added to the waitlist!");
            
            // Route to Twitter after successful registration
            window.open("https://twitter.com/abokixyz", "_blank");
            setIsTwitterFollowed(true);
         } else {
            throw new Error(data.message || "Registration failed");
         }
      } catch (error) {
         console.error("Waitlist registration error:", error);
         showToastNotification(
            error.message || "Something went wrong. Please try again."
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   // Handle form submission for email and wallet steps
   const handleSubmit = async (e) => {
      e.preventDefault();

      // First step - Email
      if (currentStep === 1 && email) {
         nextStep();
         showToastNotification("Email submitted! Now enter your wallet address.");
      } 
      // Second step - Wallet address
      else if (currentStep === 2 && isValidEthAddress(walletAddress)) {
         nextStep();
         showToastNotification("Wallet address submitted! Follow us on Twitter to complete registration.");
      }
   };

   // Handle launch app button click
   const handleLaunchApp = () => {
      showToastNotification("Coming soon!");
   };

   return (
      <>

         <div className="w-full nebula h-[200vh]">

         <div
            className="w-full nebula h-[200vh]"
            style={{ backgroundImage: `url(${nebulaBackground})` }}>

            <div className="mt-16">
               <Hero />
               <ScrollIndicator />
            </div>
            <CountdownHero />
            <div className="flex justify-center items-center h-[40vh]">
               <WaitlistForm
                  currentStep={currentStep}
                  email={email}
                  setEmail={setEmail}
                  walletAddress={walletAddress}
                  setWalletAddress={setWalletAddress}
                  isValidEthAddress={isValidEthAddress}
                  handleTwitterFollow={handleTwitterFollow}
                  handleSubmit={handleSubmit}
                  formSubmitted={formSubmitted}
                  isSubmitting={isSubmitting}
               />
            </div>
         </div>
         <Footer />
         
         {/* Toast notification */}
         {showToast && (
            <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-md shadow-lg">
               {toastMessage}
            </div>
         )}
      </>
   );
}