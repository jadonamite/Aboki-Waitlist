import Image from "./../assets/image.png"; // Corrected import path

const Hero = () => {
   return (
      <div
         className="w-[90%] md:w-[90%] lg:w-[85%] h-[20vh] md:h-[55vh] lg:h-[75vh] bg-cover bg-top bg-no-repeat rounded-2xl shadow-lg animate-fadeIn mx-auto"
         style={{
            backgroundImage: `url(${Image ? Image : ""})`,
         }}>
         {!Image && (
            <p className="text-center text-white text-sm md:text-lg pt-4">
               Background image not available
            </p>
         )}
      </div>
   );
};

export default Hero;
