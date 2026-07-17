
---
name: task-manager
description: Manage this project's work as discrete tasks tracked under tasks/ at the repo root, each with its own progresslog.json and artifacts/ folder. Use when the user asks to create a task, start a new task, log progress on a task, update task status, mark a task done, resume a task, list tasks, or check what's done and what's left across the project.
---

# Task Manager

## Overview

Work on this project is broken into discrete tasks, each living in its own
folder under `tasks/` at the repo root. A task folder holds a
`progresslog.json` (status plus a dated history of what was done) and an
`artifacts/` subfolder for any notes, open questions, or other files related
to the task. A root-level `tasks/INDEX.md` is kept in sync as a single
glance-able summary of every task's status. This lets work resume cleanly
across sessions: read a task's log and artifacts to reconstruct context
instead of re-deriving it from scratch.

## Layout

```
tasks/
  INDEX.md                    # auto-maintained summary table
  001-add-dark-mode/
    progresslog.json
    artifacts/                # notes, questions, misc files
  002-fix-nav-bug/
    progresslog.json
    artifacts/
```

If `tasks/` does not exist yet, create it (and `INDEX.md`) the first time a
task is created — do not require it to pre-exist.

## `progresslog.json` schema

```json
{
  "status": "todo",
  "created": "2026-07-11",
  "entries": [
    { "date": "2026-07-11", "summary": "What was done in this session" }
  ]
}
```

`status` is one of `"todo"`, `"in_progress"`, `"done"`. `entries` is
append-only, ordered oldest to newest, one entry per work session
summarizing what happened.

## Creating a task

1. List `tasks/` and find the highest existing `NNN` prefix; the new task
   number is that plus one, zero-padded to 3 digits (`001`, `002`, ...). If
   `tasks/` doesn't exist or is empty, start at `001`.
2. Derive a kebab-case slug from the task title (lowercase, spaces/
   punctuation to hyphens).
3. Create `tasks/NNN-slug/artifacts/`.
4. Write `tasks/NNN-slug/progresslog.json` with `status: "todo"`, `created`
   set to today's date, and one initial entry summarizing what the task is.
5. Regenerate `tasks/INDEX.md` (see below).

## Logging progress

When the user reports work done on a task (or asks to log progress):

1. Read the task's `progresslog.json`.
2. Append a new entry: `{ "date": "<today>", "summary": "<what happened>" }`.
3. If the work moved the task forward and status is still `"todo"`, update
   it to `"in_progress"`.
4. Write the file back and regenerate `tasks/INDEX.md`.

## Marking a task done

1. Set `status: "done"` in the task's `progresslog.json`.
2. Append a closing entry summarizing the outcome.
3. Regenerate `tasks/INDEX.md`.

## Resuming a task

When the user wants to pick a task back up (or asks "where did we leave
off"):

1. Read the task's `progresslog.json` in full — the `entries` list is the
   narrative of what's been done, in order.
2. List the contents of the task's `artifacts/` folder and read any that
   look relevant (notes, open questions, specs) to reconstruct context.
3. Summarize current status and what's left before continuing work.

## Listing / reporting progress

To answer "what tasks exist", "what's done", "what's left", or "how much of
the project is complete":

1. Prefer reading `tasks/INDEX.md` for a quick summary.
2. If `INDEX.md` looks stale or missing, scan each `tasks/*/progresslog.json`
   directly and regenerate the index.

## `tasks/INDEX.md` format

Regenerate this file in full (don't hand-edit incrementally) whenever a task
is created or its `progresslog.json` changes. One row per task, sorted by
task number:

```markdown
# Tasks

| # | Task | Status | Last update |
|---|------|--------|-------------|
| 001 | add-dark-mode | in_progress | 2026-07-11 |
| 002 | fix-nav-bug | todo | 2026-07-11 |
```

`Last update` is the `date` of the most recent entry in that task's
`progresslog.json`.

## Conventions

- Task folders: `NNN-slug`, zero-padded 3-digit sequence number.
- Exactly one `artifacts/` subfolder per task for notes, questions, and any
  other related files — no further subdividing.
- Never let `INDEX.md` drift from the individual `progresslog.json` files;
  regenerate it after every task mutation.
