# Vibe coding for dealership workflows

One small automation that runs.

4½ hours of choosing, building, testing, and sharing.

---

## Today's finish line

- One clearly described business problem
- One working input and useful output
- A `PROJECT.md` explaining the rules
- One failure case handled
- A run command and one next improvement

---

## Our 4½ hours

| Elapsed time | Activity |
| --- | --- |
| 0:00–0:20 | Introduction and workflow discussion |
| 0:20–0:50 | Choose an automation |
| 0:50–1:15 | Break it into observable steps |
| 1:15–2:00 | Build with sample data |
| 2:00–2:10 | Break |
| 2:10–3:00 | Connect a real input |
| 3:00–3:40 | Test failures and improve reliability |
| 3:40–4:10 | Triggers and handoff |
| 4:10–4:30 | Participant demos |

---

## Your role in the build

You explain the workflow and decide whether the result is correct.

The coding agent proposes code, runs it, and helps investigate failures.

Your most useful question: “Show me the output for this example.”

---

## A workflow from the room

Think of a task you repeated this week.

What started it? What information did you need? What decision did you make? What did you produce?

---

## The pattern behind an automation

1. Something triggers the work.
2. The script gathers input.
3. Explicit rules transform the data.
4. The script produces a result someone can check.

Example: a morning inventory export becomes an aging-stock report.

---

## Activity: describe the work you do today

“When ___ happens, I open ___, copy ___, compare ___, and produce ___.”

For each candidate, identify:

- How often it happens and minutes spent
- The actual input you can access today
- What a correct output looks like
- Who checks or uses that output

---

## A project that fits today

One input system, one transformation, one output.

| Candidate | First useful version |
| --- | --- |
| Inventory aging | Export vehicles older than 60 days |
| Lead follow-up | List open leads waiting over 48 hours |
| Pricing reconciliation | Compare two exports by VIN |
| Service follow-up | Prepare a review list from declined-service records |
| Marketing preparation | Create vehicle-description drafts from inventory data |

---

## Selection checkpoint

- Can you open the input now?
- Can you describe one correct output row?
- Can the first version run in about two hours?
- Can you test it without changing customer or dealership records?

If access is blocked, use an approved export or create a few fictional records matching your input format.

---

## A workflow becomes a sequence

Pricing reconciliation:

1. Read the inventory export.
2. Read advertised prices from an accessible source.
3. Match records by VIN.
4. Report price differences and missing matches.
5. Save a report for review.

---

## Uncertainty is part of the project

“We don't yet know whether the website exposes a VIN.”

Make the next task a small investigation:

> Read one listing and print its VIN and advertised price. Explain any missing fields. Stop after this step.

---

## PROJECT.md is the shared specification

Use [the project worksheet](PROJECT.template.md) to record:

- Goal, input, and output
- Exact rules and worked examples
- Constraints and excluded features
- Run command and definition of done

> Read PROJECT.md before making changes. Keep it updated when we agree to change a requirement.

---

## A useful first prompt

> I want to automate ___. Today I do these steps: ___.
>
> My input is ___ and the expected output is ___.
>
> Read PROJECT.md. Implement the smallest working version using sample data. Run it and show me the result.

Follow with: “What failed?” “Show the evidence.” “Now add this one change.”

---

## Build sprint: first useful output

**1:15–2:00 · 45 minutes**

First print one correct result. Then save the report.

By the checkpoint, show:

- The command you ran
- The input it read
- One output row checked by hand

---

## Break

**2:00–2:10 · 10 minutes**

Leave a note: “Working now: ___. Next obstacle: ___.”

---

## Connection choices

**2:10–3:00 · 50 minutes**

| Source | Use it when |
| --- | --- |
| Documented API | Access and permissions are already available |
| CSV or Excel export | The system provides structured data |
| Website extraction | The needed information is on an accessible page |
| Browser interaction | Access requires navigating a user interface |

Choose the simplest available path that meets the workflow.

---

## Examples in this repository

| Folder | Useful starting point |
| --- | --- |
| `playwright/` | Website links into CSV |
| `excel/` | Local workbook reading and writing |
| `outlook-playwright/` | Optional Outlook Web session example |
| `extension/` | A popup inside Chrome |
| `react/` | A small web interface |

Pick one relevant example. A report file is enough for today's result.

---

## Real-input checkpoint

Run the same transformation with an approved real input or export.

Check a few records against the source, including one excluded record.

Keep credentials, browser profiles, and customer data out of Git. Publish only synthetic examples to a public site.

---

## Reliability lab

**3:00–3:40 · 40 minutes**

Try an empty input, a missing field, a duplicate, and a boundary value.

For an integration, also try unavailable data or an expired session.

Choose one failure and make the script explain it clearly. Confirm it does not quietly produce a misleading report.

---

## Results people can trust

- Validation names the bad row or missing field.
- Logs say what the script read and wrote.
- Repeating a run has a defined result.
- Proposed changes can be reviewed before taking effect.

Email drafts and update previews are useful outputs.

---

## A trigger makes the script an automation

**3:40–4:10 · 30 minutes**

Manual: a person runs the command.

Scheduled: a machine runs it at a chosen time.

Event-based: an arriving file or other event starts it.

Before scheduling, identify the machine, working directory, credentials, failure notification, and owner.

---

## Handoff checkpoint

Someone else should be able to find:

- Installation and run instructions
- A sample input and expected result
- Where the output goes
- A known limitation and what to do when it fails
- The person responsible for the next run

---

## Demo time

**4:10–4:30 · 20 minutes**

1. Before: what did you do manually?
2. Trigger: how does the work start?
3. Result: run it and show the output.
4. Evidence: how do you know it is correct?
5. Next: what would you improve?

Estimate weekly savings using frequency × minutes saved per run.

---

## What you take away

A working automation, its rules, and evidence that it handles a real case.

One specific next improvement, recorded in `PROJECT.md`.

The reusable skill: describing a business process precisely enough to test it.
