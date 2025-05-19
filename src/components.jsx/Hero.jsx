import Image from "./../assets/image.png"; // Corrected import path

const Hero = () => {
   return (
      <div
         className="w-[90%] md:w-[90%] lg:w-[85%] relative rounded-2xl shadow-lg animate-fadeIn mx-auto overflow-hidden"
         style={{
            filter: "blur(3px)",
            aspectRatio: "18/9",
            backgroundImage: `url(${Image ? Image : ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            imageRendering: "high-quality",
         }}>
         {!Image && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
               <p className="text-center text-white text-sm md:text-lg">
                  Background image not available
               </p>
            </div>
         )}
      </div>
   );
};

export default Hero;
