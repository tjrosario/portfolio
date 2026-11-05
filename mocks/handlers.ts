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

/** Tests add this with server.use() to reach the error state */
export const resumeFailure = http.get("/api/resume", () => new HttpResponse(null, { status: 500 }));

/** Tests add this with server.use() to reach the request timeout */
export const resumeHang = http.get("/api/resume", async () => {
  await delay("infinite");
});
