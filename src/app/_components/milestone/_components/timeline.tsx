"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TimelineItem from "./timeline-item";
import { timelineData } from "@/lib/utils";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // progress for the timeline container (0 -> top, 1 -> bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // global page scroll to detect scroll direction (up/down)
  const { scrollY } = useScroll();

  // smooth the progress for nice line animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // scroll direction detection
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const prevScroll = useRef<number>(0);
  useEffect(() => {
    // subscribe to changes of the global scrollY
    const unsubscribe = scrollY.on("change", (v: number) => {
      setIsScrollingDown(v > prevScroll.current);
      prevScroll.current = v;
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <div ref={containerRef} className="relative lg:flex lg:justify-center">
      {/* Static Gray Line */}
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-8 bottom-0 w-0.5 bg-[#E7E9F5]" />

      {/* Animated Primary Line */}
      <motion.div
        className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-5 w-0.5 bg-primary-100 origin-top"
        style={{ height: lineHeight }}
      />

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
            progressMotion={smoothProgress}
            containerRef={containerRef}
            isScrollingDown={isScrollingDown}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
