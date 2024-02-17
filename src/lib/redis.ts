import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu2-next-turtle-32573.upstash.io",
  token: process.env.REDIS_KEY!,
});
