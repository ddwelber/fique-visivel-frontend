import { api } from "./axios";
import type { WaitlistData } from "../types/waitlist-data";

export async function createWaitlistRequest(data: WaitlistData) {
  return api.post("/users/waitlist", data);
}
