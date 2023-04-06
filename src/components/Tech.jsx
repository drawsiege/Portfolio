import React, { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, moretechies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ORIGINAL
// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// REVISED
// const Tech = () => {
//   const [showContent, setShowContent] = useState(false);

//   const handleButtonClick = () => {
//     setShowContent(!showContent);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex flex-row flex-wrap justify-center gap-10">
//         {technologies.map((technology) => (
//           <div className="w-28 h-28" key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>
//       <button
//         className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleButtonClick}
//       >
//         {showContent ? "Show Less" : "Show All"}
//       </button>
//       {showContent && (
//         <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
//           {moretechies.map((moretechies) => (
//           <div className="w-20 h-20 bg-slate-100 rounded-full p-2" key={moretechies.name}>
//             <img src={moretechies.icon} />
//           </div>
//         ))}
//         </div>
//       )}
//     </div>
//   );
// };

const Tech = () => {
  const [showContent, setShowContent] = useState(false);
  const [showBalls, setShowBalls] = useState(true);

  const handleButtonClick = () => {
    if (showContent) {
      setShowBalls(!showBalls);
    } else {
      setShowBalls(!showBalls);
    }
    setShowContent(!showContent);
  };

  return (
    <div className="flex flex-col items-center">
      {showBalls && (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
      <button
        className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        {showContent ? "Show Less" : "Show All"}
      </button>
      {showContent && (
        <motion.div 
          className="mt-10 flex flex-row flex-wrap justify-center gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {moretechies.map((moretech) => (
            <div
              className="w-20 h-20 bg-slate-100 rounded-full p-2"
              key={moretech.name}
            >
              <img src={moretech.icon} alt={moretech.name} />
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");