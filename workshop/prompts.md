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

Keep asking until no unanswered question would change the first
version's behavior, access needs, or definition of done. Record agreed
assumptions and defer optional improvements.

Then fill in the template concisely, replacing its guidance with our
decisions. Include ordered implementation steps and how I'll run and
verify the result. Show me the draft and ask whether it matches my intent.
If I correct it, revise it and resolve any new blocking questions.

Once I confirm, save PROJECT.md if you can edit files; otherwise give
me the complete Markdown to save. Stop there. Don't implement it until
I ask you to build.
```

## First build

> Read the agreed PROJECT.md and implement its first version in small steps. Use the input or fallback we agreed on. Run it and check the expected result and failure case under “Done when.” Show me the output and explain any remaining limitations.

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
