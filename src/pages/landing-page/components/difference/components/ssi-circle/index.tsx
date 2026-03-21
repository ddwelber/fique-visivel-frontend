import { motion } from "framer-motion";

export const SSIGauge = ({ value = 70 }) => {
  const radius = 100;
  const stroke = 6;

  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius;

  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
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
          stroke="#16a34a"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute bottom-2 text-2xl font-medium">80</span>
    </div>
  );
};
