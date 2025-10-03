// "use client";
//
// import TimelineItem from "./timeline-item";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import { useRef } from "react";
//
// const timelineData = [
//   {
//     year: "2018",
//     title: "Foundation Laid",
//     titleTextColor: "primary-200",
//     description:
//       "The project began with extensive community research and planning. Local stakeholders came together to identify key needs and establish project goals.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2019",
//     title: "Community Engagement",
//     titleTextColor: "secondary-100",
//     description:
//       "Organized workshops and town halls to gather input from residents. Over 500 community members participated in shaping the project vision.",
//     image: "/2019-Image1.png",
//   },
//   {
//     title: "Partnership Formed",
//     titleTextColor: "secondary-200",
//     description:
//       "Established key partnerships with local organizations to maximize community impact.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2020",
//     title: "Infrastructure Development",
//     titleTextColor: "secondary-200",
//     description:
//       "Construction phase initiated with local contractors. Created 150 jobs and utilized sustainable building practices throughout the project.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2021",
//     title: "Program Launch",
//     titleTextColor: "primary-200",
//
//     description:
//       "Officially opened facilities to the public with celebration event. Started offering educational programs and community services.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2022",
//     title: "Expansion Phase",
//     titleTextColor: "secondary-100",
//     description:
//       "Added new wings and upgraded existing facilities based on community feedback. Reached 10,000 beneficiaries milestone.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2023",
//     title: "Awards & Recognition",
//     titleTextColor: "secondary-200",
//     description:
//       "Received national recognition for community impact and sustainable development practices. Featured in multiple publications.",
//     image: "/2019-Image1.png",
//   },
//   {
//     year: "2024",
//     title: "Ongoing Impact",
//     titleTextColor: "primary-200",
//
//     description:
//       "Continuing to serve the community with expanded programs and services. Planning next phase of development based on evolving needs.",
//     image: "/2019-Image1.png",
//   },
//   {
//     title: "Awards & Recognition",
//     titleTextColor: "secondary-200",
//     description:
//       "Received national recognition for community impact and sustainable development practices. Featured in multiple publications.",
//     image: "/2019-Image1.png",
//   },
// ];
//
// const Timeline = () => {
//   const containerRef = useRef(null);
//
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });
//
//   const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
//
//   return (
//     <div ref={containerRef} className="relative">
//       {/* Static Gray Line */}
//       <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" />
//
//       {/* Animated Primary Line */}
//       <motion.div
//         className="absolute left-0 top-0 w-0.5 bg-primary-100 origin-top"
//         style={{ height: lineHeight }}
//       />
//
//       {/* Nodes - Only render for items that have a year */}
//       {timelineData.map((item, index) =>
//         item.year ? (
//           <div
//             key={`node-${index}`}
//             className="absolute left-[0.5px] w-4 h-4 bg-primary-100 border-4 border-primary-100 rounded-full -translate-x-1/2 shadow-md"
//             style={{
//               top: `${((timelineData.filter((_, i) => i <= index && timelineData[i].year).length - 1) / (timelineData.filter((d) => d.year).length - 1)) * 100}%`,
//             }}
//           />
//         ) : null,
//       )}
//
//       {/* Timeline Items */}
//       <div className="space-y-12">
//         {timelineData.map((item, index) => (
//           <TimelineItem
//             key={index}
//             year={item.year}
//             title={item.title}
//             description={item.description}
//             image={item.image}
//             titleTextColor={item.titleTextColor}
//             index={index}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default Timeline;

"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TimelineItem from "./timeline-item";

const timelineData = [
  {
    year: "2018",
    title: "Foundation Laid",
    titleTextColor: "primary-200",
    description:
      "The project began with extensive community research and planning. Local stakeholders came together to identify key needs and establish project goals.",
    image: "/2019-Image1.png",
  },
  {
    year: "2019",
    title: "Community Engagement",
    titleTextColor: "secondary-100",
    description:
      "Organized workshops and town halls to gather input from residents. Over 500 community members participated in shaping the project vision.",
    image: "/2019-Image1.png",
  },
  {
    title: "Partnership Formed",
    titleTextColor: "secondary-200",
    description:
      "Established key partnerships with local organizations to maximize community impact.",
    image: "/2019-Image1.png",
  },
  {
    year: "2020",
    title: "Infrastructure Development",
    titleTextColor: "secondary-200",
    description:
      "Construction phase initiated with local contractors. Created 150 jobs and utilized sustainable building practices throughout the project.",
    image: "/2019-Image1.png",
  },
  {
    year: "2021",
    title: "Program Launch",
    titleTextColor: "primary-200",
    description:
      "Officially opened facilities to the public with celebration event. Started offering educational programs and community services.",
    image: "/2019-Image1.png",
  },
  {
    year: "2022",
    title: "Expansion Phase",
    titleTextColor: "secondary-100",
    description:
      "Added new wings and upgraded existing facilities based on community feedback. Reached 10,000 beneficiaries milestone.",
    image: "/2019-Image1.png",
  },
  {
    year: "2023",
    title: "Awards & Recognition",
    titleTextColor: "secondary-200",
    description:
      "Received national recognition for community impact and sustainable development practices. Featured in multiple publications.",
    image: "/2019-Image1.png",
  },
  {
    year: "2024",
    title: "Ongoing Impact",
    titleTextColor: "primary-200",
    description:
      "Continuing to serve the community with expanded programs and services. Planning next phase of development based on evolving needs.",
    image: "/2019-Image1.png",
  },
  {
    title: "Awards & Recognition",
    titleTextColor: "secondary-200",
    description:
      "Received national recognition for community impact and sustainable development practices. Featured in multiple publications.",
    image: "/2019-Image1.png",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static Gray Line */}
      <div className="absolute left-0 top- bottom-0 w-0.5 bg-gray-300" />

      {/* Animated Primary Line */}
      <motion.div
        className="absolute left-0 top-7 w-0.5 bg-primary-100 origin-top"
        style={{ height: lineHeight }}
      />

      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            image={item.image}
            titleTextColor={item.titleTextColor}
            index={index}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
