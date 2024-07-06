import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "./carousel";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 px-10 items-center h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card backgroundImage={item.backgroundImage}>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children, backgroundImage }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-30 w-30 p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn("text-zinc-100 font-normal tracking-wide mt-4", className)}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({ src, alt }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <img src={src} alt={alt} className="object-cover" />
    </div>
  );
};