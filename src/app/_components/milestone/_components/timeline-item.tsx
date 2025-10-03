// "use client";
//
// import Image from "next/image";
// import { useRef, useEffect, useState } from "react";
// import { TimelineProps } from "./types";
// import { motion } from "framer-motion";
//
// const TimelineItem = ({
//   year,
//   title,
//   index,
//   titleTextColor,
//   description,
//   image,
//   isLast,
// }: TimelineProps) => {
//   const itemRef = useRef(null);
//
//   const [isInView, setIsInView] = useState(false);
//
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.3 },
//     );
//
//     if (itemRef.current) {
//       observer.observe(itemRef.current);
//     }
//
//     return () => {
//       if (itemRef.current) {
//         observer.unobserve(itemRef.current);
//       }
//     };
//   }, []);
//
//   return (
//     <div ref={itemRef} className="relative pl-8">
//       {/* Year Label */}
//       {year && (
//         <motion.div
//           id={`year-${index}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           className="font-bold text-3xl text-primary-100 mb-4"
//         >
//           {year}
//         </motion.div>
//       )}
//       {/* Vertical Line (::before) and Circle Node (::after) */}
//       <div
//       // className={`flex flex-col sm:flex-row items-start mb-3 ${!isLast ? "before:absolute before:top-4 before:left-2 sm:before:left-0 before:h-full before:w-0.5 before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-8" : ""} after:absolute after:top-[38.5px] after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-primary-100 after:box-content after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 after:shadow-md`}
//       >
//         {/* Title */}
//         {title && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
//             className={`text-xl font-bold mb-4 text-${titleTextColor}`}
//           >
//             {title}
//           </motion.div>
//         )}
//       </div>
//       {/* Content Card */}
//       {(description || image) && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//           className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
//         >
//           {image && (
//             <Image
//               src={image}
//               alt={title || "Timeline image"}
//               width={300}
//               height={170}
//               className="w-full h-48 object-cover"
//             />
//           )}
//           {description && (
//             <div className="p-4">
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {description}
//               </p>
//             </div>
//           )}
//         </motion.div>
//       )}{" "}
//     </div>
//   );
// };
//
// export default TimelineItem;

"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import type { TimelineProps } from "./types";
import { motion } from "framer-motion";

const TimelineItem = ({
  year,
  title,
  index,
  titleTextColor,
  description,
  image,
  isLast,
}: TimelineProps) => {
  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 },
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="relative pl-8">
      {year && (
        <div className="absolute left-[0.5px] top-[0.875rem] w-4 h-4 bg-primary-100 border-4 border-primary-100 rounded-full -translate-x-1/2 shadow-md" />
      )}

      {/* Year Label */}
      {year && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="font-bold text-3xl text-primary-100 mb-4"
        >
          {year}
        </motion.div>
      )}

      {/* Title */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          className={`text-xl font-bold mb-4 text-${titleTextColor}`}
        >
          {title}
        </motion.div>
      )}

      {/* Content Card */}
      {(description || image) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
        >
          {image && (
            <Image
              src={image || "/placeholder.svg"}
              alt={title || "Timeline image"}
              width={300}
              height={170}
              className="w-full h-48 object-cover"
            />
          )}
          {description && (
            <div className="p-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default TimelineItem;
