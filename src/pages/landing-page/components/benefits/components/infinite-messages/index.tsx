import { CarouselRow } from "../carousel-row";

export const InfiniteMessages = () => {
  return (
    <div className="flex w-full flex-col gap-2 border-t border-r border-l border-gray-100 py-6">
      <CarouselRow direction="left" />
      <CarouselRow direction="right" />
    </div>
  );
};
