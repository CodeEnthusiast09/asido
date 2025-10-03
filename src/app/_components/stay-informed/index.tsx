"use client";
import InfoCard from "./_components/information-cards";
import { Button } from "@/components/button";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InfoSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  const info = [
    {
      image: "/info1.png",
      description:
        "Naija Spirit: Unique Powers of Resilience or Learned Helplessness?",
    },
    {
      image: "/info2.png",
      description: "Ignorance Around Mental Health Challenges is Expensive",
    },
    {
      image: "/info3.png",
      description:
        "Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia",
    },
  ];

  return (
    <section className="px-[18px] lg:px-20 my-[60px]">
      <h3 className="text-sm md:text-2xl font-semibold text-primary-200 mb-2">
        Stay Informed
      </h3>
      <p className="text-lg md:text-[31px] font-bold text-foreground mb-10">
        Through advocacy, education, and support, we&apos;re building a
        stigma-free future for mental health in Nigeria
      </p>
      {/* Cards Container */}
      <div className="relative group">
        {/* Left Navigation Button */}
        {canScrollLeft && (
          <Button
            variant="neutral"
            onClick={scrollLeft}
            radius="rounded-full"
            className="absolute top-[30%] left-1 sm:-left-4 xl:-left-6 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 transition-all duration-300 hover:scale-110 bg-white/95 backdrop-blur-md flex items-center justify-center xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
          >
            <FaChevronLeft />
          </Button>
        )}
        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex md:justify-center  gap-6 pb-4 min-w-max">
            {info.map((info, index) => (
              <div key={index} className="flex-shrink-0">
                <InfoCard image={info.image} description={info.description} />
              </div>
            ))}
          </div>
        </div>
        {/* Right Navigation Button */}
        {canScrollRight && (
          <Button
            variant="neutral"
            onClick={scrollRight}
            radius="rounded-full"
            className="absolute top-[30%] right-1 sm:-right-4 xl:-right-6 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 transition-all duration-300 hover:scale-110 bg-white/95 backdrop-blur-md flex items-center justify-center xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:translate-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2"
          >
            <FaChevronRight />
          </Button>
        )}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
export default InfoSection;
