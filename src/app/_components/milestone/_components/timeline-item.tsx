"use client";
import Image from "next/image";
import { useState } from "react";
import type { TimelineProps } from "./types";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const TimelineItem = ({
  year,
  title,
  index,
  titleTextColor,
  description,
  image,
  more,
  isLeft = true,
}: TimelineProps & { isLeft?: boolean }) => {
  const [nodeViewed, setNodeViewed] = useState(false);

  return (
    <div
      className={`relative pl-8 lg:pl-0 ${
        isLeft
          ? "lg:pr-[calc(50%+2rem)] lg:text-right"
          : "lg:pl-[calc(50%+2rem)] lg:text-left"
      }`}
    >
      {year && (
        <motion.div
          className={`absolute -left-[7.5px] lg:left-1/2 lg:-translate-x-1/2 top-[0.495rem] lg:top-[1.3rem] w-4 h-4 border-4 rounded-full shadow-md transition-colors duration-500 ${
            nodeViewed
              ? "bg-primary-100 border-primary-100"
              : "bg-[#E7E9F5] border-[#E7E9F5]"
          }`}
          onViewportEnter={() => setNodeViewed(true)}
          onViewportLeave={() => setNodeViewed(false)}
          viewport={{ once: false, amount: 0.3 }}
        />
      )}

      {/* Year Label */}
      {year && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="font-extrabold text-2xl lg:text-[39px] text-primary-100 mb-8"
        >
          {year}
        </motion.div>
      )}

      {/* Title */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          className={`text-base lg:text-2xl font-semibold mb-3 ${titleTextColor}`}
        >
          {title}
        </motion.div>
      )}

      {/* Description */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          className="text-xl text-[25px] font-bold mb-8 text-foreground"
        >
          {description}
        </motion.div>
      )}

      {/* Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
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

      {/* Learn More Link */}
      {more && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className={`mt-8 ${isLeft ? "lg:flex lg:justify-end" : ""}`}
        >
          <Link
            href={more}
            className="inline-flex items-center font-bold text-nowrap text-primary-100 hover:no-underline cursor-pointer md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 transition-colors"
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
