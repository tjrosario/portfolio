import { act, renderHook } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { useMotionPause } from "./motion";

const root = document.documentElement;

afterEach(() => {
  vi.restoreAllMocks();
  root.removeAttribute("data-motion");
  localStorage.clear();
});

it("reads the pause the blocking script restored", () => {
  root.setAttribute("data-motion", "paused");

  expect(renderHook(useMotionPause).result.current.paused).toBe(true);
});

it("saves a pause and clears it on resume", async () => {
  const { result } = renderHook(useMotionPause);

  await act(async () => result.current.toggle());
  expect(root).toHaveAttribute("data-motion", "paused");
  expect(localStorage.getItem("motion")).toBe("paused");
  expect(result.current.paused).toBe(true);

  await act(async () => result.current.toggle());
  expect(root).not.toHaveAttribute("data-motion");
  expect(localStorage.getItem("motion")).toBeNull();
  expect(result.current.paused).toBe(false);
});

it("still pauses when storage is blocked", async () => {
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("blocked");
  });
  const { result } = renderHook(useMotionPause);

  await act(async () => result.current.toggle());

  expect(result.current.paused).toBe(true);
});
