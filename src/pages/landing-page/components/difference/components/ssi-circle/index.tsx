import { motion, useInView, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MoveUp } from "lucide-react";
import { animate } from "framer-motion";

export const SSIGauge = ({ value = 70 }) => {
  const radius = 100;
  const stroke = 6;

  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;

  const offset = circumference - (value / 100) * circumference;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, motionValue]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center"
    >
      <svg
        height={radius}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius}`}
      >
        <path
          d={`
            M ${stroke} ${radius}
            A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${
              radius * 2 - stroke
            } ${radius}
          `}
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth={stroke}
        />

        <motion.path
          d={`
            M ${stroke} ${radius}
            A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${
              radius * 2 - stroke
            } ${radius}
          `}
          fill="transparent"
          stroke="#1265bf"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: isInView ? offset : circumference,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute bottom-2 flex items-center text-2xl font-medium text-black">
        {displayValue} <MoveUp size={20} />
      </span>
    </div>
  );
};
