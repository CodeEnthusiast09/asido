import type { MotionValue } from "framer-motion";
import type { RefObject } from "react";

export type TimelineProps = {
  year?: string;
  title?: string;
  index: number;
  titleTextColor?: string;
  description?: string;
  image?: string;
  more?: string;
  isLast?: boolean;

  // New fields for TimelineItem behavior
  isLeft?: boolean;
  progressMotion?: MotionValue<number>;
  containerRef?: RefObject<HTMLDivElement | null>;
  isScrollingDown?: boolean;
};
