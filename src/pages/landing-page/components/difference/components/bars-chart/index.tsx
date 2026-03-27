import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { value: 12 },
  { value: 18 },
  { value: 28 },
  { value: 45 },
  { value: 70 },
  { value: 95 },
];

export const ReachChart = () => {
  return (
    <div className="h-40 w-full **:outline-none">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="greenFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1265bf" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#1265bf" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#1265bf"
            strokeWidth={2}
            fill="url(#greenFade)"
            isAnimationActive={true}
            animationDuration={1200}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
