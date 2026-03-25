import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistData } from "../types/waitlist-data";

export function useWaitlistForm() {
  return useForm<WaitlistData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });
}
