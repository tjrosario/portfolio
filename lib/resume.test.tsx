import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { expect, it } from "vitest";
import resume from "@/data/resume.json";
import { resumeFailure } from "@/mocks/handlers";
import { server } from "@/mocks/node";
import { ResumeProvider, useResume } from "./resume";

function Opener() {
  const { open } = useResume();
  return <button onClick={open}>View Resume</button>;
}

function setup() {
  render(<ResumeProvider><Opener /></ResumeProvider>);
  return userEvent.setup();
}

const opener = () => screen.getByRole("button", { name: "View Resume" });
const closeDialog = () => screen.getByRole<HTMLDialogElement>("dialog").close();
const printButton = () => screen.getByRole("button", { name: "Print / Save PDF" });
const liveRegion = () => screen.getByRole("status");

it("doesn't request the resume until it's opened", async () => {
  let requests = 0;
  server.use(http.get("/api/resume", () => {
    requests++;
    return HttpResponse.json(resume);
  }));
  const user = setup();

  await waitFor(() => expect(requests).toBe(0));

  await user.click(opener());
  await screen.findByRole("heading", { name: resume.experience[0].title });
  expect(requests).toBe(1);
});

it("shows the loader, then the resume, and announces both", async () => {
  const user = setup();

  await user.click(opener());
  expect(liveRegion()).toHaveTextContent("Loading resume");
  expect(printButton()).toBeDisabled();

  await screen.findByRole("heading", { name: resume.experience[0].title });
  expect(liveRegion()).toHaveTextContent("Resume loaded");
  expect(printButton()).toBeEnabled();
});

it("keeps the loaded resume when it's reopened", async () => {
  let requests = 0;
  server.use(http.get("/api/resume", () => {
    requests++;
    return HttpResponse.json(resume);
  }));
  const user = setup();

  await user.click(opener());
  await screen.findByRole("heading", { name: resume.experience[0].title });
  closeDialog();
  await user.click(opener());

  expect(requests).toBe(1);
});

it("shows an alert when loading fails and recovers on retry", async () => {
  server.use(resumeFailure);
  const user = setup();

  await user.click(opener());
  expect(await screen.findByRole("alert")).toHaveTextContent("The resume didn't load.");
  expect(printButton()).toBeDisabled();

  server.resetHandlers();
  await user.click(screen.getByRole("button", { name: "Try again" }));

  expect(screen.getByRole("button", { name: "Close resume" })).toHaveFocus();
  await screen.findByRole("heading", { name: resume.experience[0].title });
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

it("tries again when reopened after a failure", async () => {
  server.use(resumeFailure);
  const user = setup();

  await user.click(opener());
  await screen.findByRole("alert");
  closeDialog();

  server.resetHandlers();
  await user.click(opener());

  await screen.findByRole("heading", { name: resume.experience[0].title });
});
