import type { WaitlistData } from "../types/waitlist-data";
import { createWaitlistRequest } from "../api/waitlist.api";

export async function createWaitlistUser(data: WaitlistData) {
  const response = await createWaitlistRequest(data);

  return response.data;
}
