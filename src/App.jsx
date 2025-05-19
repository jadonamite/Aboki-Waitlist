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

   const {
      showToast,
      toastMessage,
      showToastNotification,
      hideToastNotification,
   } = useToast();
   const { currentStep, formSubmitted, nextStep, completeForm } =
      useMultiStepForm(1, 3);

   // Handle Twitter follow
   const handleTwitterFollow = () => {
      window.open("https://twitter.com/abokixyz", "_blank");
      setIsTwitterFollowed(true);
      nextStep();
      showToastNotification("Twitter followed! Now enter your email.");
   };

   // Handle form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      if (currentStep === 2 && email) {
         nextStep();
         showToastNotification(
            "Email submitted! Now enter your wallet address."
         );
      } else if (currentStep === 3 && isValidEthAddress(walletAddress)) {
         completeForm();
         showToastNotification("You've been added to the waitlist!");
      }
   };

   // Handle launch app button click
   const handleLaunchApp = () => {
      showToastNotification("Coming soon!");
   };

   return (
      <>
         <div
            className="w-full nebula h-[200vh]"
            style={{ backgroundImage: `url(${nebulaBackground})` }}>
            <Navigation handleLaunchApp={handleLaunchApp} />
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
               />
            </div>
         </div>
         <Footer />
      </>
   );
}
