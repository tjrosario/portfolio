import { delay, http, HttpResponse } from "msw";
import resume from "@/data/resume.json";

const RESUME_DELAY_MS = 1200;

export const handlers = [
  // The delay keeps the loader visible, since the real route answers almost instantly
  http.get("/api/resume", async () => {
    await delay(RESUME_DELAY_MS);
    return HttpResponse.json(resume);
  }),
];
