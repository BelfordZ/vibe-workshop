# Prompts for the workshop

Describe your workflow in your own words. Paste or attach [PROJECT.template.md](PROJECT.template.md) with the prompt below. You do not need to fill it in yourself.

## Turn my idea into PROJECT.md

```text
Here is the workflow or idea I want to automate:
[Describe what you do today and what you wish happened instead.]

Use the attached project template to turn this into an executable
PROJECT.md. Interview me before writing code.

Summarize what you understand, then ask one or two short questions at a
time and wait for my answers. Ask the most important question next.
Use plain language and don't repeat things I've already explained.

Help me define a small first version we can build in about two hours.
Clarify the input and how we'll access it, the output, the business
rules and exceptions, and what stays manual. Ask for a concrete example
of a correct result and one important edge or failure case.

Recommend sensible technical defaults rather than asking me to choose
libraries. Don't invent business rules, access permissions, or available
data. If access is uncertain, agree on an export or sample-data fallback.
Never ask me to paste passwords or session credentials.

My machine is locked down. Don't propose installing new programs,
runtimes, or browsers, changing policy, or adding organization permissions.
Do not require Microsoft 365 app registration or new consent grants.
First establish what tools and extension-loading permissions already exist.

For browser work, prefer a Chrome extension when permitted, or Playwright
with an already available runtime/browser and a dedicated local profile
I sign into manually. Never copy my existing browser session or credentials.
For production edits, default to the extension. Document any reason for
another approach and have me review it with the facilitator.

If my workflow needs local files such as on-disk spreadsheets, recommend
an available Node.js/TypeScript script for file operations and Playwright
for browser collection or preparation. Use existing libraries and write
local results to a new file by default. Record this reason for Playwright.
For any web-edit handoff, use headless: false, stop before the final action,
and keep the process and browser open while I review and manually submit.
Wait for me to finish before cleanup. Resuming must never trigger submission.
If a visible browser isn't available, produce a preview instead.

I must personally perform the final Submit, Save, or Send in the application.
Don't automate that action, make an equivalent API write, or treat my chat
approval as permission to do it. Check whether filling fields or selecting
options autosaves; if it does, generate a separate preview for me to transfer
manually. Preserve these constraints in PROJECT.md and its acceptance checks.
If neither browser approach is available, use an approved export or fictional
data and document the blocker rather than working around restrictions.

Keep asking until no unanswered question would change the first
version's behavior, access needs, or definition of done. Record agreed
assumptions and defer optional improvements.

Then fill in the template concisely, replacing its guidance with our
decisions. Define small, ordered milestones with an observable result
and a check for each. Include how I'll run and verify the result.
Preserve the template's one-milestone-at-a-time stopping instructions.
Show me the draft and ask whether it matches my intent.
If I correct it, revise it and resolve any new blocking questions.

Once I confirm, save PROJECT.md if you can edit files; otherwise give
me the complete Markdown to save. Stop there. Don't implement it until
I ask you to build. I'll review the initial plan with the facilitator first.
```

## First build

> My plan has been reviewed with the facilitator. Read PROJECT.md and implement only the first milestone. Use the input or fallback we agreed on. Run the relevant checks, show me the actual output, and explain what I should verify. Record the status and evidence in PROJECT.md. Stop for my feedback. Fix issues within this milestone before moving on, and do not implement later milestones until I explicitly ask you to continue.

## Continue after a check-in

> I've checked the result for milestone ___. It meets the agreed check. Implement only the next milestone, run its checks, show the output, and update PROJECT.md. Stop again for my review.

## Correct the current milestone

> Milestone ___ isn't correct yet. I expected ___, but the actual result was ___. Investigate and fix this milestone, rerun the check, and show me the result. Don't start the next milestone.

## Investigating a failure

> This command failed: ___. Here is the error: ___. Explain the likely cause, inspect the relevant code, and fix it. Run the same command again. Do not broaden the project to solve this failure.

## Connecting data

> Replace the sample input with this approved export: ___. Inspect its column names and types first. Map them to the documented rules and report missing required fields. Preserve the sample-data option for future testing.

## Testing correctness

> Read the business rules in PROJECT.md. Test an empty input, a missing field, a duplicate record, and the exact threshold boundary. Show expected versus actual results and fix any confirmed errors. Use fictional records.

## Handoff

> Write concise installation and run instructions, expected output, and troubleshooting steps. Document the working directory and required configuration without including secrets. Record unresolved limitations in PROJECT.md.

## Trigger planning

> The manual script now works. Help me plan a weekday run at ___ in time zone ___. The machine is ___. Explain how it starts, avoids overlapping runs, and reports failure. Document prerequisites before enabling a schedule.
