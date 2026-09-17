# Vibe coding for dealership workflows

Bring three ideas. Leave with one small automation that runs.

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
| 0:00–0:10 | How to frame an automation |
| 0:10–0:50 | Discuss everyone's three ideas and choose one |
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

You already have three automation ideas. Keep them in front of you.

For each, explain: what starts the work, what information you use, what decision you make, and what result you need.

We will discuss each person's ideas before choosing a first build.

---

## The pattern behind an automation

1. **Trigger:** We detect a new competitor vehicle listing.
2. **Gather data:** Read its price, year, model, trim, mileage, and options. Find similar vehicles in our inventory.
3. **Apply rules:** Compare prices and options. Flag our matching vehicles priced more than X% above the competitor's price.
4. **Produce output:** Create a review report with both vehicles, the price gap, and differences in mileage or options.

---

## Activity: describe the work you do today

**0:10–0:50 · Everyone gets a turn**

Share all three ideas briefly, then discuss which has the clearest first result.

Frame each as:

“When ___ happens, use ___ to check ___, then produce ___ for ___ to review.”

The group asks: Can you access the input? What is one correct result? What can we leave out today?

---

## A project that fits today

One clear workflow and one checkable output. Use the smallest set of inputs needed.

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

Before building: say your chosen workflow in one sentence and name its first useful result. Keep the other two ideas for later.

If access is blocked, use an approved export or create a few fictional records matching your input format.

---

## A workflow becomes a sequence

Competitor price comparison, built one observable step at a time:

1. Read one listing. Show its price and vehicle details.
2. Read our inventory. Show one match using agreed similarity rules.
3. Compare the two. Show the price gap and option differences.
4. Apply X%. Show whether this pair should be flagged.
5. Save a review report. Check its row against the source.

Start with a supplied listing or export. Add automatic detection after the comparison works.

---

## Uncertainty is part of the project

“We haven't defined what counts as a similar vehicle.”

Make the next task a small investigation:

> Ask me which model, year, trim, and mileage differences are acceptable. Then show one matching pair and one pair we should exclude before implementing matching.

---

## PROJECT.md is the shared specification

Give the AI your workflow and [the short project template](PROJECT.template.md).

- Answer its questions one or two at a time.
- Clarify the input, rules, and expected result.
- Review the draft and correct any assumptions.
- Save the agreed version as `PROJECT.md` before building.

> Read PROJECT.md before making changes. Keep it updated when we agree to change a requirement.

---

## A useful first prompt

> Here is my workflow: ___. Use the project template to interview me before writing code.
>
> Ask one or two questions at a time until the first version is clear enough to build. Then draft PROJECT.md for me to review.
>
> Once I confirm it, save the file and wait for me to ask you to build.

The complete copy-paste prompt is in [prompts.md](prompts.md).

---

## Build sprint: first useful output

**1:15–2:00 · 45 minutes**

Repeat: request one step, run it, inspect the output, correct it, then add the next step.

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
