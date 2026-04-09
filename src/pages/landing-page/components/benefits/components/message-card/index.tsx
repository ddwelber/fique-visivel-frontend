interface MessageItem {
  avatar: number;
  name: string;
  date: string;
  message: string;
}

interface MessageCardProps {
  item: MessageItem;
}

export const MessageCard = ({ item }: MessageCardProps) => {
  return (
    <div className="flex w-full max-w-80 min-w-80 items-start gap-2 rounded-md border border-gray-100 bg-white p-1.5">
      <img
        src={`https://i.pravatar.cc/100?img=${item.avatar}`}
        alt=""
        width={40}
        height={40}
        loading="lazy"
        decoding="async"
        className="max-h-10 min-h-10 max-w-10 min-w-10 rounded-full object-cover blur-[3px]"
      />

      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <p className="text-base font-medium text-black blur-[3px]">
            {item.name}
          </p>
          <span className="text-sm text-gray-500">{item.date}</span>
        </div>

        <p className="line-clamp-2 text-sm leading-[1.3] text-gray-500">
          {item.message}
        </p>
      </div>
    </div>
  );
};
