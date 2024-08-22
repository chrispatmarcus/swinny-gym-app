import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/assets/pexels1.jpg";
import image2 from "@/assets/pexels2.jpg";
import image3 from "@/assets/pexels3.jpg";
import image4 from "@/assets/pexels4.jpg";

const images = [image1, image2];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           initial={{ opacity: 0, x: 100 }} // Start from opacity 0 and to the right
//           animate={{
//             opacity: currentIndex === index ? 1 : 0,
//             y: currentIndex === index ? 0 : -100, // Slide in/out based on index
//           }}
//           transition={{ duration: 0.5 }} // Animation duration
//         //   style={{ position: "absolute", width: "100%", height: "auto" }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <motion.div
      key={currentIndex}
      className="flex bg-secondary-500 basis-3/5 justify-center md:z-10 md:ml-40 md:mt-10 md:justify-items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ImageSlider;