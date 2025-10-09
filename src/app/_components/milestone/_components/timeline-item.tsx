"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import type { TimelineProps } from "./types";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import type { MotionValue } from "framer-motion";

const TimelineItem = ({
  year,
  title,
  index,
  titleTextColor,
  description,
  image,
  more,
  isLast,
  isLeft = true,
  // extras passed down from parent:
  progressMotion,
  containerRef,
  isScrollingDown = true,
}: TimelineProps) => {
  // ref used for "in view" detection for triggering content animations
  const itemRef = useRef<HTMLDivElement>(null);
  // ref for the small circle node so we can compute its position relative to the container
  const circleRef = useRef<HTMLDivElement>(null);

  // detect when this item enters viewport (used together with scroll direction)
  const inView = useInView(itemRef, { amount: 0.3 });

  // animate content only once and only when scrolling down
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView && isScrollingDown && !animated) {
      setAnimated(true);
    }
  }, [inView, isScrollingDown, animated]);

  // nodeViewed is controlled by the animated line position:
  // when lineHeightPx >= circleCenterRelativeToContainer => active
  const [nodeViewed, setNodeViewed] = useState(false);

  useEffect(() => {
    if (!progressMotion || !containerRef?.current) return;

    const handler = (v: number) => {
      if (!containerRef.current || !circleRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const circleRect = circleRef.current.getBoundingClientRect();

      // circle center relative to the top of the container
      const nodeCenter =
        circleRect.top - containerRect.top + circleRect.height / 2;
      const animatedLineHeight = v * containerRect.height; // pixels

      const active = animatedLineHeight + 25 >= nodeCenter;

      setNodeViewed(active);
    };

    // subscribe to changes on the motion value
    const unsubscribe = progressMotion.on("change", handler);

    // initial check
    handler(progressMotion.get());

    // re-check on resize (container height changes)
    const onResize = () => handler(progressMotion.get());
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", onResize);
    };
  }, [progressMotion, containerRef]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 lg:pl-0 ${
        isLeft
          ? "lg:pr-[calc(50%+2rem)] lg:text-right"
          : "lg:pl-[calc(50%+2rem)] lg:text-left"
      }`}
    >
      {year && (
        // circle node — controlled by nodeViewed (no more onViewportEnter/Leave)
        <motion.div
          ref={circleRef}
          className={`absolute -left-[7.5px] lg:left-1/2 lg:-translate-x-1/2 top-[0.675rem] w-4 h-4 border-4 rounded-full shadow-md transition-colors duration-500 ${
            nodeViewed
              ? "bg-[#0044b5] border-[#0044b5]"
              : "bg-[#E7E9F5] border-[#E7E9F5]"
          }`}
        />
      )}

      {year && (
        <motion.div
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="font-extrabold text-2xl text-[#0044b5] mb-8"
        >
          {year}
        </motion.div>
      )}

      {title && (
        <motion.div
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          className={`text-base font-semibold mb-3 ${titleTextColor}`}
        >
          {title}
        </motion.div>
      )}

      {description && (
        <motion.div
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="text-xl font-bold mb-8 text-foreground"
        >
          {description}
        </motion.div>
      )}

      {image && (
        <motion.div
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={image || "/placeholder.svg"}
              alt={title || "Timeline image"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      )}

      {more && (
        <motion.div
          initial="hidden"
          animate={animated ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className={`mt-8 ${isLeft ? "lg:flex lg:justify-end" : ""}`}
        >
          <Link
            href={more}
            className="inline-flex items-center font-bold text-nowrap text-[#0044b5] hover:no-underline cursor-pointer md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 transition-colors"
          >
            LEARN MORE
            <FaChevronRight size={16} className="ml-3.5 md:w-5 md:h-5" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineItem;
