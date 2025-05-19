import React from "react";

const NebulaBackground = () => {
   return (
      <div className="absolute inset-0 overflow-hidden">
         <div
            className="absolute inset-0"
            style={{
               backgroundImage: "url('/nebula-bg.jpg')",
               // backgroundSize: "cover contain ",
               backgroundPosition: "10% 30%",
               backgroundRepeat: "no-repeat",
               filter: "blur(8px)",
               zIndex: -1,
            }}>
            <div className="">
               {/* Animated stars */}
               <div className="stars"></div>

               {/* Purple clouds with parallax effect */}
               <div className="clouds-container">
                  <div className="cloud cloud-1"></div>
                  <div className="cloud cloud-2"></div>
                  <div className="cloud cloud-3"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NebulaBackground;
