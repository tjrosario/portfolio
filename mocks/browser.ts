import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);
let started: Promise<unknown> | undefined;

/** Registers the worker once; later calls wait on the same registration */
export function startMocks() {
  started ??= worker.start({ onUnhandledFrame: "bypass", quiet: true });
  return started;
}
