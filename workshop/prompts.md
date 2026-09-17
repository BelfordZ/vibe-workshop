# Prompts for the workshop

Replace the blanks with concrete details. Review the output after each change.

## Choosing a scope

> Read my three candidates in PROJECT.md. Identify which has an accessible input, clear rules, and a first version achievable in two hours. Explain any unknowns. Help me define one input, one transformation, and one output.

## First build

> Read PROJECT.md. Implement the smallest version using the supplied sample data. Show the command to run it and the resulting output. Check the included, excluded, and boundary examples before adding features.

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
