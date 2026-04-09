import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useMemo } from "react";
import { MessageCard } from "../message-card";
import { messages } from "../../utils/messages";

interface CarouselRowProps {
  direction?: "left" | "right";
}

export const CarouselRow = ({ direction = "left" }: CarouselRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const duplicated = useMemo(() => {
    const shuffled = [...messages].sort(() => Math.random() - 0.5);
    return [...messages, ...shuffled];
  }, []);

  const isInView = useInView(containerRef, { margin: "100px" });

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;

    if (isInView) {
      controls.start({
        x: direction === "left" ? [0, -trackWidth] : [-trackWidth, 0],
        transition: {
          duration: 300,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, direction, controls]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <motion.div ref={trackRef} className="flex gap-2" animate={controls}>
        {duplicated.map((item, i) => (
          <MessageCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};
