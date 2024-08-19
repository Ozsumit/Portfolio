"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// import { useIntersectionObserver } from "@/components/ui/observerapi";
import styles from "../styles/CardAnimation.module.css";
import { TextGenerateEffect } from "./text";
import { Meteors } from "./meteorcard";
// const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
export const HoverEffect = ({
  items,
  className,
  onCardClick,
  id,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
  onCardClick?: (description: string) => void;
  id?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setAnimated(true);
            setHasAnimated(true); // Prevent re-animation on subsequent scrolls
            observer.disconnect(); // Disconnect observer after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className,
        id
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.title}
          className={cn(
            "relative group block p-2 h-full w-full cursor-pointer ",
            animated && styles.fadeFromRight
          )}
          style={{ animationDelay: `${idx * 200}ms` }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onCardClick && onCardClick(item.description)}
          ref={(el: HTMLAnchorElement | null) => {
            if (el) cardRefs.current[idx] = el;
          }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-56 min-w-54 max-w-120 w-full p-4 overflow-hidden bg-[#000000]/[0.9] border border-white dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <Meteors  />
            <div className="relative z-48">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-0 text-xl">
                  {item.title}
                </h4>

                <p className="mt-5 text-zinc-400 tracking-wide leading-relaxed text-md">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
