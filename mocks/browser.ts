import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);
let started: Promise<unknown> | undefined;

/** Registers the worker once; if that fails, requests fall through to the real route */
export function startMocks() {
  started ??= worker.start({ onUnhandledFrame: "bypass", quiet: true }).catch(() => undefined);
  return started;
}
