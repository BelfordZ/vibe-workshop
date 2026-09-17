# Project name

## Goal

What should this accomplish, and who is it for?

## Workflow

What happens today? What should the first version automate, and what stays manual?

## Input and output

Where does the input come from, and how can we access a sample?
What should the result contain, and where should it go?

## Rules and limits

What decisions, exceptions, or restrictions matter? What is outside this first version?

Keep these workshop constraints in the completed plan:

- Machines are locked down. Use only existing, approved tools. Do not require new programs, runtimes, browser downloads, policy changes, or organization permissions. No Microsoft 365 app registration or new consent grants.
- For browser workflows, prefer a Chrome extension if extension loading is already permitted, or a Playwright script if its runtime and browser are already available. Playwright uses a dedicated local profile that the participant signs into manually, including MFA. Do not copy credentials or reuse their everyday browser profile.
- For production edits, default to the extension pattern. Any alternative requires a documented reason and facilitator review, and must preserve the same manual final action.
- When the workflow needs local files, such as on-disk spreadsheets, recommend an available Node.js/TypeScript script for file operations and Playwright for browser collection or preparation. This is a valid reason to choose Playwright. Use already available libraries, write local results to a new file by default, and leave originals intact.
- For Playwright handoff to a web application, use a visible browser (`headless: false`). Stop before the final action, keep the process and browser open for user review and manual Submit/Save/Send, and close only after the user indicates they are finished. Resuming the script must never submit automatically. If a visible browser is unavailable, produce a preview instead.
- Automation may prepare a preview or fill fields only when doing so does not persist changes. The user personally completes the final Submit, Save, or Send. Never automate that action, use an API to perform it, or treat approval in chat as a substitute for the user's click.
- Check for autosave and changes triggered by typing, selecting, or leaving a field. If preparation itself writes production data, show a separate preview for manual transfer instead.
- If neither browser approach is permitted or available, use an approved export or fictional data and record the blocker. Do not work around machine or account restrictions.

## Done when

Give a concrete input and expected result, plus one important edge or failure case.
Describe how someone will run the first version and check its output.

For production-edit workflows, include a check on fictional data or a test page that preparation does not persist changes and automation stops before the user's final action.

## Milestones and check-ins

Define small milestones specific to this project. Each must produce something I can inspect.

| Milestone | What we'll build | What I'll check | Status and evidence |
| --- | --- | --- | --- |
| 1 | | | Not started |
| 2 | | | Not started |
| 3 | | | Not started |

Add or remove rows as needed. After each milestone, record working / blocked / needs review and the observed result.

Implement one milestone at a time. Run its checks, show the output, explain what I should verify, and stop for feedback. Fix problems in that milestone before moving on. Do not start later milestones until I explicitly ask you to continue.

Review the initial plan with the facilitator before coding. Request facilitator help for blockers or scope changes; routine milestone approval comes from me.

Agreed assumptions and unresolved questions affecting the build:
