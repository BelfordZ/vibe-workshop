# Facilitator guide

## Outcome and preparation

The agenda totals 270 minutes including the break. Aim for a working report with a real approved input, one checked failure, and a documented next step. If access prevents a real-input run, accept a working synthetic-data prototype with that limitation clearly recorded.

Send prework.md several days ahead. Ask participants to confirm the setup checks pass and bring an approved input sample. Arrange an IT contact or a preapproved machine for installation problems.

This is Markdown source, not an exported slide deck. Open presentation.md in a preview. Horizontal rules separate slides. Keep [presenter-notes.md](presenter-notes.md) alongside it for slide-by-slide speaking cues. No rendering service is required.

## Run of show

| Time | Facilitation | Evidence before moving on |
| --- | --- | --- |
| 0:00–0:20 | Explain the goal; discuss workflows from the room | Participants identify input, rule, output |
| 0:20–0:50 | 5 min individual review, 10 min paired pitches, 10 min selection, 5 min checkpoint | One scoped workflow per person |
| 0:50–1:15 | 10 min live decomposition, 10 min PROJECT.md, 5 min peer check | Observable steps and acceptance examples |
| 1:15–2:00 | 5 min launch, 30 min build, 10 min show output | Working sample run |
| 2:00–2:10 | Break and unblock planning | Known next obstacle |
| 2:10–3:00 | 5 min source choices, 35 min integration, 10 min check | Real input or documented access fallback |
| 3:00–3:40 | 5 min explain failures, 25 min test/fix, 10 min rerun | One failure handled and output checked |
| 3:40–4:10 | 10 min triggers, 15 min handoff, 5 min rehearsal | Run instructions, owner, trigger plan |
| 4:10–4:30 | Eight 2-minute demos plus 4 min transitions | Visible results and next steps |

For six participants, allow three minutes each plus two minutes of transitions. For a larger group, use parallel demo groups or nominate representatives. Protect the final 20 minutes by cutting optional extensions first.

## Opening discussion

Spend the first 10 minutes on the workshop goal and the participant's role in directing and checking the coding agent. Use the next 10 minutes to hear one or two workflows from the room. Write down each trigger, input, rule, and output. Keep detailed project selection for the next block.

## Starter selection and limitations

For code starters, follow each folder's README and install only what the participant needs.

- `playwright/`: simple website-to-CSV example, useful for learning selectors.
- `excel/`: needs a participant-created input.xlsx with name and score columns; adapt its schema for the business workflow. It does not ship a dealership workbook.
- `extension/`: a browser popup built with TypeScript. Chrome loads its generated dist folder.
- `react/`: optional presentation layer after the transformation works. The existing Pages workflow publishes this app on main pushes.
- `outlook-playwright/`: optional authenticated browser example. Its existing test checks CSV formatting, not live Outlook extraction. Verify selectors against an authorized mailbox before using it live. Organization policy may restrict login or automation.

Existing starters have reported dependency audit findings. Review those before wider distribution or use with sensitive files. This workshop content does not certify or repair those dependencies.

## When someone is stuck

- Installation blocked: pair on a prepared machine and resolve installation outside the build sprint.
- Authentication blocked: after 10 minutes, move to an approved export or fictional fixture.
- Rules unclear: write one expected output row and one counterexample together.
- Too much scope: return to the single input, transformation, and output in PROJECT.md.
- Scraper unreliable: inspect one record and verify actual fields before exporting many rows.
- Finished early: test a boundary case, improve the error message, or have a peer run the instructions.

## Trigger discussion

Scheduling is optional during the session. For a local Windows script, discuss Task Scheduler with an explicit program path, arguments, working directory, account, and time zone. Confirm the machine will be available and define what happens if a run is missed or overlaps. Do not promise that an asleep laptop will execute on time.

The repository's Pages workflow deploys a static web app. It does not schedule a participant's local script or host a backend. Customer information must not be committed to this public repository or embedded in the published app.

## Completion review

Ask each participant to show their run command, input, output, checked rule, handled failure, and README. Capture the owner and next improvement. For savings, subtract the new review time from the previous manual time before multiplying by weekly frequency.
