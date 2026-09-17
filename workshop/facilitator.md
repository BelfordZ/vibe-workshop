# Facilitator guide

## Outcome and preparation

The agenda totals 270 minutes including the break. Aim for a working report with a real approved input, one checked failure, and a documented next step. If access prevents a real-input run, accept a working synthetic-data prototype with that limitation clearly recorded.

Send prework.md several days ahead. Ask participants to confirm the setup checks pass and bring an approved input sample. Arrange an IT contact or a preapproved machine for installation problems.

This is Markdown source, not an exported slide deck. Open presentation.md in a preview. Horizontal rules separate slides. Keep [presenter-notes.md](presenter-notes.md) alongside it for slide-by-slide speaking cues. No rendering service is required.

## Run of show

| Time | Facilitation | Evidence before moving on |
| --- | --- | --- |
| 0:00–0:10 | Teach framing using the competitor example | Participants recognize trigger, input, rule, output |
| 0:10–0:50 | Discuss each person's three ideas, then choose and reframe one | Everyone has a turn and leaves with a framing sentence |
| 0:50–1:15 | 10 min live decomposition, 10 min AI interview, 5 min draft review | Agreed PROJECT.md with steps and acceptance examples |
| 1:15–2:00 | 5 min launch, 30 min build, 10 min show output | Working sample run |
| 2:00–2:10 | Break and unblock planning | Known next obstacle |
| 2:10–3:00 | 5 min source choices, 35 min integration, 10 min check | Real input or documented access fallback |
| 3:00–3:40 | 5 min explain failures, 25 min test/fix, 10 min rerun | One failure handled and output checked |
| 3:40–4:10 | 10 min triggers, 15 min handoff, 5 min rehearsal | Run instructions, owner, trigger plan |
| 4:10–4:30 | Eight 2-minute demos plus 4 min transitions | Visible results and next steps |

For six participants, allow three minutes each plus two minutes of transitions. For a larger group, use parallel demo groups or nominate representatives. Protect the final 20 minutes by cutting optional extensions first.

## Three-idea discussion

Attendees arrive with three ideas. Use the first 10 minutes to teach the framing pattern. Reserve the full next 40 minutes for discussing their ideas and selecting a first build.

For eight participants, allocate four minutes each: 90 seconds to share all three ideas, two minutes for questions and reframing, and 30 seconds to confirm the strongest candidate. Ask a clarifying question about each idea before narrowing the discussion. Use the remaining eight minutes for participants to write their selected workflow and first useful result. With fewer people, use extra time to refine examples.

Confirm headcount in advance. For more than eight attendees, arrange facilitated parallel groups of at most eight so everyone still discusses all three ideas. If only one facilitator is available, extend this block by four minutes per extra attendee and reduce the later integration block by the same amount; for a substantially larger group, arrange another facilitator or a longer session. Do not silently skip someone's turn.

Capture the selected idea using: “When ___ happens, use ___ to check ___, then produce ___ for ___ to review.” Ask about accessible input, one correct result, and what can be deferred. Avoid technology selection during pitches. Before moving on, each attendee should be able to state their workflow and first result clearly.

In the decomposition block, carry the competitor example through one listing, one inventory match, a price comparison, a threshold decision, and a saved report. Each participant then gives the AI their own idea and template. During building, reinforce the loop: request one step, run it, inspect the output, correct it, then add the next step.

## Starter selection and limitations

Participants describe their workflow and give the AI PROJECT.template.md with the interview prompt from prompts.md. The AI asks one or two questions at a time and fills in the template. Participants confirm the draft before saving PROJECT.md and requesting implementation. Help resolve questions about behavior or access; defer optional improvements rather than extending the interview indefinitely.

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
- Too much scope: return to the chosen workflow and first useful output in PROJECT.md.
- Scraper unreliable: inspect one record and verify actual fields before exporting many rows.
- Finished early: test a boundary case, improve the error message, or have a peer run the instructions.

## Trigger discussion

Scheduling is optional during the session. For a local Windows script, discuss Task Scheduler with an explicit program path, arguments, working directory, account, and time zone. Confirm the machine will be available and define what happens if a run is missed or overlaps. Do not promise that an asleep laptop will execute on time.

The repository's Pages workflow deploys a static web app. It does not schedule a participant's local script or host a backend. Customer information must not be committed to this public repository or embedded in the published app.

## Completion review

Ask each participant to show their run command, input, output, checked rule, handled failure, and README. Capture the owner and next improvement. For savings, subtract the new review time from the previous manual time before multiplying by weekly frequency.
