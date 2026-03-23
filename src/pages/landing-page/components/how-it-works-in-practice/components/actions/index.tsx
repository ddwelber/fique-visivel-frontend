import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useMemo, useState, useRef } from "react";

interface ActionsProps {
  type?: "poor" | "rich";
}

export const Actions = ({ type = "poor" }: ActionsProps) => {
  const targetLikes = type === "rich" ? 728 : 21;
  const targetComments = type === "rich" ? 32 : 2;

  const [likes, setLikes] = useState(0);
  const [explode, setExplode] = useState(false);

  const particles = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 60,
    }));
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (type !== "rich" || !isInView) return;

    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(targetLikes / 40);

      if (current >= targetLikes) {
        current = targetLikes;
        clearInterval(interval);
        setExplode(true);

        setTimeout(() => setExplode(false), 800);
      }

      setLikes(current);
    }, 30);

    return () => clearInterval(interval);
  }, [type, targetLikes, isInView]);

  return (
    <div
      ref={ref}
      className="relative flex max-h-full w-full items-center gap-1"
    >
      <div className="flex items-center -space-x-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="like-consumption-ring-small"
          width="18"
          height="18"
          aria-hidden="true"
          data-supported-dps="18x18"
          viewBox="0 0 16 16"
          data-token-id="17"
          className="b3b4496d bb4a1877 cf58c3cf a1ac4ab8"
          role="img"
          aria-label=""
        >
          <circle cx="8" cy="8" r="7.5" fill="#378fe9"></circle>
          <path
            fill="#fff"
            d="M8 1a7 7 0 1 1-7 7 7 7 0 0 1 7-7m0-1a8 8 0 1 0 5.66 2.34A8 8 0 0 0 8 0"
          ></path>
          <path
            fill="#d0e8ff"
            fill-rule="evenodd"
            d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.1 7.1 0 0 1-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 0 0-.67.81c0 .14.07.63.1.8a7.5 7.5 0 0 0 1 2.2H4.12a.88.88 0 0 0-.65.28.84.84 0 0 0-.23.66.91.91 0 0 0 .93.85h.16a.82.82 0 0 0-.55.24.77.77 0 0 0-.21.54.81.81 0 0 0 .74.8.8.8 0 0 0 .33 1.42.76.76 0 0 0-.09.55.87.87 0 0 0 .85.63h2.29a3.8 3.8 0 0 0 .89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64"
          ></path>
          <path
            fill="none"
            d="M7.3 3.72a6.4 6.4 0 0 0 1.15 2.71M5.94 11.9h2.18a16 16 0 0 0 1.9-.54h1.36"
          ></path>
          <path
            fill="none"
            stroke="#004182"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.43 6.43H4.11a.88.88 0 0 0-.88 1 .92.92 0 0 0 .93.84h.16a.82.82 0 0 0-.55.24.77.77 0 0 0-.21.56.83.83 0 0 0 .74.81.81.81 0 0 0-.31.63.81.81 0 0 0 .65.8.78.78 0 0 0-.09.56.86.86 0 0 0 .85.62h2.29a3.8 3.8 0 0 0 .89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 0 1-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.1 7.1 0 0 1-1.7-2.25 2.1 2.1 0 0 0-.32-.52.83.83 0 0 0-1.16.09 1.4 1.4 0 0 0-.25.38 1.7 1.7 0 0 0-.09.3 2.4 2.4 0 0 0 .07.84 4 4 0 0 0 .27.84 6.7 6.7 0 0 0 .66 1 .2.2 0 0 1 .07.08"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="praise-consumption-ring-small"
          width="18"
          height="18"
          aria-hidden="true"
          data-supported-dps="18x18"
          viewBox="0 0 16 16"
          data-token-id="19"
          className="b3b4496d bb4a1877 cf58c3cf a1ac4ab8"
          role="img"
          aria-label=""
        >
          <path
            fill="#fff"
            d="M8 1a7 7 0 1 1-7 7 7 7 0 0 1 7-7m0-1a8 8 0 1 0 5.66 2.34A8 8 0 0 0 8 0"
          ></path>
          <g clip-path="circle(7)">
            <path
              fill="#d8d8d8"
              d="M8 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7"
            ></path>
            <circle cx="8" cy="8" r="7.5" fill="#6dae4f"></circle>
            <path
              fill="#fff"
              d="M8 1a7 7 0 1 1-7 7 7 7 0 0 1 7-7m0-1a8 8 0 1 0 5.66 2.34A8 8 0 0 0 8 0"
            ></path>
            <path
              fill="none"
              stroke="#165209"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12.13 9.22a9.2 9.2 0 0 0-.36-2.32A4.3 4.3 0 0 1 10.44 5c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.65.8c0 .24 0 .49.06.72a11.5 11.5 0 0 0 .58 1.92l-4.5-3.38a.75.75 0 0 0-1.11.07.73.73 0 0 0 .27 1L6.6 7.1l.59.56L3.62 5a.71.71 0 0 0-.75-.16.69.69 0 0 0-.46.61.71.71 0 0 0 .36.67L5 7.77l1.35 1-2.9-2.19a.8.8 0 0 0-.57-.21.8.8 0 0 0-.54.28c-.31.4-.06.81.26 1.06L4.85 9.4l1.15.85-2.27-1.7a.74.74 0 0 0-1.09 0 .76.76 0 0 0 .24 1.09l4.1 3c.6.45 2.07.84 2.72.27"
            ></path>
            <path
              fill="#dcf0cb"
              fill-rule="evenodd"
              d="m12.61 9.9-.42-.37a6.7 6.7 0 0 0-.51-2.14A5.7 5.7 0 0 1 10.47 5c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.65.8c0 .24 0 .49.06.72a9 9 0 0 0 .55 1.84l-.19-.1-4.31-3.31a.75.75 0 0 0-1.11.07.73.73 0 0 0-.1.59.71.71 0 0 0 .37.47L6.55 7l.64.51-3.57-2.67a.74.74 0 0 0-.57-.21.77.77 0 0 0-.54.27.77.77 0 0 0-.1.59.74.74 0 0 0 .36.51L5 7.66l1.35 1-2.9-2.18a.75.75 0 0 0-.57-.22.76.76 0 0 0-.54.28.73.73 0 0 0 .26 1.06l2.25 1.69 1.15.85-2.27-1.69a.73.73 0 0 0-.54-.25.77.77 0 0 0-.55.25.74.74 0 0 0 .24 1.08L7 12.64a2.68 2.68 0 0 0 2.08.51 1.15 1.15 0 0 0 1.41 0c.6-.46.41-.51.85-1.13a11 11 0 0 0 1.27-2.12"
            ></path>
            <path
              fill="none"
              stroke="#165209"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.5"
              d="M12.13 9.22a9.2 9.2 0 0 0-.36-2.32A4.3 4.3 0 0 1 10.44 5c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.65.8c0 .24 0 .49.06.72a11.5 11.5 0 0 0 .58 1.92l-4.5-3.38a.75.75 0 0 0-1.11.07.73.73 0 0 0 .27 1L6.6 7.1l.59.56L3.62 5a.71.71 0 0 0-.75-.16.69.69 0 0 0-.46.61.71.71 0 0 0 .36.67L5 7.77l1.35 1-2.9-2.19a.8.8 0 0 0-.57-.21.8.8 0 0 0-.54.28c-.31.4-.06.81.26 1.06L4.85 9.4l1.15.85-2.27-1.7a.74.74 0 0 0-1.09 0 .76.76 0 0 0 .24 1.09l4.1 3a4.48 4.48 0 0 0 2.72.62"
            ></path>
            <path
              fill="none"
              stroke="#165209"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M14.77 11.39a2.2 2.2 0 0 1-.46-.75 3.7 3.7 0 0 0-.1-.65 2.4 2.4 0 0 0-.36-1.08 5.85 5.85 0 0 1-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.5.26.73.73 0 0 0-.15.54 4.4 4.4 0 0 0 .06.72c.18.92.37 1.68.39 1.73L7.41 5.84a.76.76 0 0 0-.57-.22.72.72 0 0 0-.54.29.73.73 0 0 0 .26 1l2.25 1.7.68.56-3.6-2.71a.76.76 0 0 0-.57-.22A.71.71 0 0 0 5 7.58l2.25 1.7 1.35 1-2.89-2.19a.73.73 0 0 0-1.1.08c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L6 10.06a.72.72 0 0 0-1 0 .7.7 0 0 0-.14.58.74.74 0 0 0 .34.49l4 3a2.74 2.74 0 0 0 1.13.5l.58.09a2.5 2.5 0 0 1 .87.29.83.83 0 0 0 .6 0 3.87 3.87 0 0 0 1.77-1.29 3.8 3.8 0 0 0 .7-2 1 1 0 0 0 0-.42z"
            ></path>
            <path
              fill="#ddf6d1"
              fill-rule="evenodd"
              d="m14.81 11.34-.45-.34a6.6 6.6 0 0 0-.51-2.14 5.85 5.85 0 0 1-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.5.26.73.73 0 0 0-.15.54 4.4 4.4 0 0 0 .06.72c.18.93.37 1.69.39 1.73L7.41 5.79a.75.75 0 0 0-1.11.07c-.31.41-.06.81.26 1.06l2.25 1.69.68.56-3.6-2.76a.75.75 0 0 0-1.11.07c-.31.4-.06.81.26 1.06l2.25 1.69 1.35 1L5.71 8a.72.72 0 0 0-.57-.21.7.7 0 0 0-.53.28.72.72 0 0 0-.12.59.74.74 0 0 0 .38.47l2.25 1.69 1.12.85L6 10a.7.7 0 0 0-1 0 .71.71 0 0 0-.16.6.72.72 0 0 0 .36.51l4 3a4.2 4.2 0 0 0 2 .59 7 7 0 0 0 .8.41 3.23 3.23 0 0 0 2-1.26 4.93 4.93 0 0 0 .86-2.57z"
            ></path>
            <path
              fill="none"
              d="M5.14 10.32c.57.43 4.43 3.43 4.89 3.59a2.18 2.18 0 0 0 1.47 0 1.6 1.6 0 0 0 .5-.31"
            ></path>
            <path
              fill="none"
              stroke="#165209"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.5"
              d="M14.77 11.39a2.2 2.2 0 0 1-.46-.75 3.7 3.7 0 0 0-.1-.65 2.4 2.4 0 0 0-.36-1.08 5.85 5.85 0 0 1-1.21-2.38c-.16-.53-.27-.72-.74-.73a.74.74 0 0 0-.5.26.73.73 0 0 0-.15.54 4.4 4.4 0 0 0 .06.72c.18.92.37 1.68.39 1.73L7.41 5.84a.76.76 0 0 0-.57-.22.72.72 0 0 0-.54.29.73.73 0 0 0 .26 1l2.25 1.7.68.56-3.6-2.71a.76.76 0 0 0-.57-.22A.71.71 0 0 0 5 7.58l2.25 1.7 1.35 1-2.89-2.19a.73.73 0 0 0-1.1.08c-.31.4-.07.81.26 1.06l2.25 1.68 1.12.85L6 10.06a.72.72 0 0 0-1 0 .7.7 0 0 0-.14.58.74.74 0 0 0 .34.49l4 3a2.74 2.74 0 0 0 1.13.5l.58.09a2.5 2.5 0 0 1 .87.29.83.83 0 0 0 .6 0 3.87 3.87 0 0 0 1.77-1.29 3.8 3.8 0 0 0 .7-2 1 1 0 0 0 0-.42z"
            ></path>
            <path
              fill="none"
              stroke="#165209"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.83 2.82-.73.92M5.49 1.62l.07 1.2M7.54 1.63l-.65 1.56"
            ></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="empathy-consumption-ring-small"
          width="18"
          height="18"
          aria-hidden="true"
          data-supported-dps="18x18"
          viewBox="0 0 16 16"
          data-token-id="23"
          className="b3b4496d bb4a1877 cf58c3cf a1ac4ab8"
          role="img"
          aria-label=""
        >
          <circle cx="8" cy="8" r="7.5" fill="#df704d"></circle>
          <path
            fill="#fff"
            d="M8 1a7 7 0 1 1-7 7 7 7 0 0 1 7-7m0-1a8 8 0 1 0 5.66 2.34A8 8 0 0 0 8 0"
          ></path>
          <path
            fill="#fff3f0"
            fill-rule="evenodd"
            stroke="#77280c"
            d="M7.71 5A2.64 2.64 0 0 0 4 8.75l4 4 4-4A2.64 2.64 0 0 0 12 5a2.6 2.6 0 0 0-1.85-.77A2.57 2.57 0 0 0 8.3 5l-.3.3z"
          ></path>
          <path
            fill="none"
            d="M11.43 5.18a2 2 0 0 1 .53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8M5.79 4.81a2.1 2.1 0 0 0-.79.11 1.8 1.8 0 0 0-1 .82A2.6 2.6 0 0 0 3.77 7v.09"
          ></path>
          <path
            fill="none"
            stroke="#77280c"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.71 5A2.6 2.6 0 0 0 4 5a2.66 2.66 0 0 0 0 3.7l4 4 4-4A2.66 2.66 0 0 0 12 5a2.58 2.58 0 0 0-1.85-.78h0A2.58 2.58 0 0 0 8.3 5l-.3.25z"
          ></path>
        </svg>
      </div>
      <div className="flex w-full items-center justify-between text-sm xl:text-base">
        <p className="text-gray-500">
          Leonardo e mais {type === "rich" ? likes : targetLikes} pessoas
        </p>
        <p className="hidden text-gray-500 md:block">
          {targetComments} comentários
        </p>
      </div>

      <AnimatePresence>
        {explode &&
          particles.map((p, i) => (
            <motion.span
              key={i}
              className="bg-blue absolute top-2 left-10 h-1 w-1 rounded-full"
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{
                x: p.x,
                y: p.y,
                opacity: 0,
                scale: 0.5,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};
