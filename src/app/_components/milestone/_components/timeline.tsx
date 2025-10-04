"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TimelineItem from "./timeline-item";
import { timelineData } from "@/lib/utils";

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
    <div ref={containerRef} className="relative lg:flex lg:justify-center">
      {/* Static Gray Line - Mobile: left, Desktop: center */}
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-8 bottom-0 w-0.5 bg-[#E7E9F5]" />

      {/* Animated Primary Line - Mobile: left, Desktop: center */}
      <motion.div
        className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-5 w-0.5 bg-primary-100 origin-top"
        style={{ height: lineHeight }}
      />

      {/* Timeline Items - Desktop: max width for alternating layout */}
      <div className="space-y-12 lg:max-w-6xl lg:w-full">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            image={item.image}
            more={item.more}
            titleTextColor={item.titleTextColor}
            index={index}
            isLast={index === timelineData.length - 1}
            isLeft={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
