# Presenter notes

Keep this file open beside [presentation.md](presentation.md). The numbered sections match the slides in order. Suggested wording is a starting point, not a script to memorize. Use [facilitator.md](facilitator.md) for the detailed run of show and troubleshooting.

## 1. Vibe coding for dealership workflows

**Opening block: 0:00–0:10, slides 1–6.** Keep the introduction short so everyone has time to discuss their three prepared ideas in the next block.

Say: “Today we're going to take one task you repeat and get a small automation working. You already know the business process. We'll practice explaining that process clearly enough for a coding agent to help implement it.”

Say: “You brought three ideas. We'll hear them from everyone, practice framing them, and choose one to build. The skill we're practicing is turning an idea into clear steps and checking a result.” Start the clock.

Clarify: “Each of you will build your own distinct workflow. I'll move around the room helping you. You won't all be on the same step at the same time, but everyone will check their work at each milestone.”

## 2. Today's finish line

Say: “By the end, you should be able to run a command, show a useful result, and explain why it's correct. We'll also write down the rules so you can return to this next week.”

Clarify that an approved export counts as a real input. A live integration is optional. If someone uses fictional records because access is unavailable, have them record the remaining access step.

## 3. Our 4½ hours

Say: “Most of the session is yours to build. We'll make something work with a small input first, connect the real data, then deliberately try to break it. The last 20 minutes are for sharing what you made.”

Point out the break and build periods. Avoid reading every row aloud. Keep the schedule available during independent work.

## 4. Your role in the build

Say: “The agent can write code, but it doesn't know the exceptions you handle every day unless you explain them. Your job is to supply the rules and check the result.”

Use an example: “If you say ‘old inventory,’ does that mean more than 60 days, or 60 days and over? Should sold vehicles appear?”

Emphasize asking to see an actual output. Code that runs can still implement the wrong rule.

## 5. A workflow from the room

Say: “Keep your three prepared ideas in front of you. As we go through this pattern, think about how each idea fits it. Everyone will get a turn in the discussion.”

Introduce the questions they will answer: “What starts the work? What information do you use? How do you decide what to do? What should come out?”

Save individual pitches for the next block. Emphasize that they can explain the work in ordinary language without choosing technology.

## 6. The pattern behind an automation

Say: “A competitor posts a car. We check whether we have something similar, compare the price and equipment, and flag a large price difference for review. That gives us a concrete trigger, input, rule, and output.”

Walk through the four steps on screen. Explain that detecting a listing could happen during a scheduled website check; we don't have to receive an instant notification from the competitor.

Ask: “What counts as similar: the same model and trim, within a year, within a mileage range? Which options would make the comparison misleading?” Those are business rules the participant needs to define. The report should expose differences for review rather than assume two cars are equivalent.

For the percentage rule, say: “Suppose theirs is $30,000 and ours is $33,000. Ours is 10% higher, using their price as the baseline. With a 5% threshold, we'd flag it.” The calculation is `(our price − competitor price) / competitor price × 100`. Here, X is the participant's chosen threshold and “more than” excludes an exact match to that threshold. Missing or zero competitor prices need review rather than a percentage calculation.

Emphasize that the output is a comparison report for a person to review, with no automatic price changes.

Clarify: “Using AI to help write a program doesn't mean the finished program needs AI on every run. Comparing two prices or checking a date can use ordinary code.”

Transition: “Now let's choose a workflow with a first version we can finish today.”

## 7. Activity: describe the work you do today

**Idea discussion: 0:10–0:50, slides 7–9.** For eight attendees, allow four minutes per person, then eight minutes for everyone to choose and rewrite their selected idea. Confirm headcount beforehand; see facilitator.md for larger groups.

Say: “Give us a quick description of each of your three ideas. We'll discuss them and help you pick a first result you can get today.” Allow about 90 seconds for all three, two minutes of questions and reframing, and 30 seconds to repeat the strongest candidate clearly.

Give every attendee a turn. Ask one useful clarifying question about each idea, then focus deeper discussion on the strongest candidate. Capture a short framing sentence for that candidate. Avoid turning the discussion into advice about libraries or UI design.

When someone says “I want a competitor monitoring app,” respond: “What would it tell you that you can act on?” Help them reach: “When we find a new competitor listing, compare it with similar stock and produce a report of our vehicles priced more than X% higher.” Ask the participant to confirm or correct the wording.

## 8. A project that fits today

Say: “Choose one clear workflow with one useful output. Keep only the inputs needed for it. A comparison needs both sides, but it can start with two small files and one matched pair.”

For an ambitious proposal, ask: “What is the first useful report or preview inside that idea?” For an autonomous follow-up system, the first result might be a list of leads requiring review.

Help them defer extra integrations and customer contact until a later iteration.

## 9. Selection checkpoint

Ask each person to name the input and describe one correct output row.

Say: “If we can't access the source today, let's use an approved export or make a few fictional records with the same fields. Write down what still needs access.”

By minute 50, have each participant write and read back their selected framing sentence and first useful result. Park the other two ideas. Check that everyone received discussion time and can explain what they are going to build.

## 10. A workflow becomes a sequence

**Planning block: 0:50–1:30, slides 10–13.** Use 10 minutes for decomposition, 20 for AI interviews and drafting, and 10 for final plan reviews. Circulate to review drafts as they become ready during the interview period so reviews don't all queue at the end.

Say: “Let's take one of your workflows and break it into steps where we can see whether each one worked.”

Carry the competitor example through the steps on screen: one listing, one inventory match, one comparison, one threshold decision, one saved report. Similar vehicles are not matched by identical VINs; the participant must define acceptable model, trim, year, and mileage differences. Start with an accessible file or supplied listing so automatic discovery doesn't block the comparison.

Ask everyone to apply the same method to their chosen idea: “What are your steps? What could you show me after each one?” Their AI interview should turn those answers into the implementation plan.

## 11. Uncertainty is part of the project

Say: “If we don't know what ‘similar’ means, the agent will have to guess. Let's resolve that rule using one pair that should match and one that shouldn't.”

Ask: “What's the biggest unknown in your project? What's the smallest action that would answer it?”

Separate business decisions from technical questions. The participant decides which price counts; inspecting a listing establishes whether that price can be extracted.

## 12. PROJECT.md is the shared specification

Say: “Describe your workflow, give the AI the short template, and let it ask about the details it needs. Your job is to answer and correct its understanding.”

Have participants paste or attach the template with the interview prompt from prompts.md. The AI asks one or two questions at a time, then drafts the document. Participants review and confirm it before saving PROJECT.md. Confirm they have a saved file before building.

Say: “For each milestone, write down what will exist and how you'll check it. Bring me the plan before you start coding. I'll check that the first step is small, the input is accessible, and you know what a correct result looks like.”

Review each participant's own workflow. Ask for a revision if the agent has bundled the whole project into one milestone. An appropriate first milestone might load a few rows and display their fields.

Ask: “Does exactly 48 hours count?” Use their answer to show how a small wording choice changes the result.

## 13. A useful first prompt

Say: “Start with what you know about the work. The AI can recommend technical choices, but it needs you to explain the business rules. If it starts coding immediately, remind it to finish the interview first.”

Point to prompts.md for copyable wording. Encourage corrections such as “That row should be excluded because…” Once participants confirm the document, use the separate first-build prompt.

Transition: “You now have enough of a specification to build the first working piece.”

## 14. Build sprint: first useful output

**1:30–2:15.** Give 5 minutes of direction, 30 minutes to build with continuous milestone check-ins, and 10 minutes to capture the current result and next step.

Say: “Ask for the first step, run it, inspect its output, and correct it before asking for the next. Your target is one correct result from a small input, then a saved report. At the end, show the command, the input, and one row you've checked yourself.”

Have participants use the first-build prompt in prompts.md, which explicitly limits the agent to one milestone and requires it to stop. Say: “The agent showing you a result is your cue to inspect it. Record working, blocked, or needs review, with a short note about what you observed.”

As you circulate, ask each person: “What just worked? How did you check it? What's the next smallest step?” Routine approval comes from the participant; they can continue after verifying the result without waiting for you. Require a facilitator check for blockers or scope changes. If the agent races ahead, have the participant stop it and return to the current milestone's check.

Check in after 15 minutes. Ask “What works now?” and “What's the next observable step?” If someone is spending time on appearance, return to their acceptance example. Ask everyone to save working progress before the break.

## 15. Break

**2:15–2:25.** Announce the exact return time.

Say: “Before you step away, leave yourself one sentence: what's working and what's blocking you next.”

Use those notes to identify people who need help or an input fallback when they return.

## 16. Connection choices

**Integration block: 2:25–3:00, slides 16–18.** Allow 5 minutes for direction, 20 minutes to connect inputs, and 10 minutes to check results.

Say: “If your current milestone isn't working yet, stay with it. If it's checked, move to the next agreed milestone. Everyone is building a different workflow, so these are shared check-in times rather than a requirement to advance together.”

Say: “These machines are locked down. We won't ask you to install programs or register a Microsoft 365 app. We'll first check which browser tools are already available and permitted.”

Explain the two browser paths: an extension in the participant's browser, or Playwright using an already available runtime and browser with a separate local profile. The participant signs into that profile manually and completes MFA. Never copy an everyday profile, cookies, or credentials. Extension loading can also be blocked by policy, so verify it before planning the build.

Say: “For preparing changes to production records, our default is an extension. You inspect the prepared result in the application and personally click Save, Submit, or Send. If we choose another approach, we need a concrete reason and a review together.”

Add: “If your process reads or edits spreadsheets on disk as well as using a website, a local script plus Playwright is a sensible choice. The script and an available spreadsheet library handle the files; Playwright handles browser interaction.” Write local results to a new file by default. This requires the existing approved runtime and libraries; it does not justify installing software.

For handing prepared web changes back to the user, explain: “Headed mode means you can see and interact with Chromium. We set `headless: false`, stop before submission, and leave it open while you review and click the final button yourself.” The process must stay alive and must not reach browser cleanup until the user finishes.

Playwright's [`page.pause()`](https://playwright.dev/docs/api/class-page#page-pause) supports manual interaction while pausing the script, but Resume continues execution. Keep submission code out of the continuation entirely. For workshop scripts, an explicit terminal wait is another option: tell the user to review and submit in the browser, then return to the terminal only when ready to close. No automatic timeout should close the window mid-review. Pausing Playwright does not pause the website's autosave behavior.

Explain that browser interaction can depend on changing page layouts and login sessions. It still requires authorized access. After 10 minutes on an access problem, help the participant switch to an export or fictional input.

## 17. Examples in this repository

Say: “These folders are starting points for different kinds of work. Pick the one that matches your next step and follow its README.”

Mention that each project has its own dependencies. Excel needs an input workbook. Outlook needs authorized mailbox access and verification against the current page. Its existing test covers CSV formatting, not live inbox extraction.

These READMEs describe general development setup, not permission to install tools here. Select only starters supported by the existing approved environment. An extension build still needs an available build environment and a permitted way to load the output. A file output is sufficient for today's goal. Avoid touring every code file.

## 18. Real-input checkpoint

Say: “Compare the result with the original source. Pick a few included records and at least one record that should have been left out.”

Remind participants that this is a public repository and its React app publishes through Pages on pushes to main. Keep customer information, generated private reports, and login profiles out of commits.

If access is still unavailable, document that limitation and continue testing the transformation with fictional records.

## 19. Reliability lab

**Reliability block: 3:00–3:40, slides 19–20.** Allow 5 minutes of direction, 25 minutes to test and fix, and 10 minutes to rerun.

Say: “Now we're going to give the program something awkward on purpose. What happens when a field is missing, the file is empty, or the same record appears twice?”

Ask participants to write the expected behavior before running the case. Start with the “Done when” examples in PROJECT.md. The target is one handled failure with a useful explanation, alongside a successful rerun of the normal case.

## 20. Results people can trust

Say: “A useful error tells you which row or field needs attention. A useful run tells you what it read and where it saved the result.”

Ask: “If you run this twice, what happens? Do you replace a report, append duplicate rows, or send two messages?” That question introduces idempotency without needing the terminology.

Explain that retries are suitable only when repeating the operation is safe. For production writes, the user's final action is mandatory, not just an optional confirmation dialog. Approval in chat does not authorize the agent to click Send or perform the equivalent API write.

Ask: “Does typing into this field already save it? Does changing the dropdown update the record?” If so, even prefilling would cross the boundary. Generate a separate preview and let the user transfer the values manually. Test this behavior on fictional data or a test page, never by experimenting with production writes.

## 21. A trigger makes the script an automation

**Triggers and handoff: 3:40–4:10, slides 21–22.** Spend 10 minutes on triggers, 15 on handoff, and 5 preparing participant sharing.

Say: “So far you've started the script yourself. A schedule or arriving file can start it later, but we need to decide where it runs and who finds out if it fails.”

Ask: “Which machine will be available? What account runs it? What happens if yesterday's run is still going?” Mention Windows Task Scheduler as a possible next step for local scripts. A sleeping laptop cannot guarantee a timely run.

If the manual run is still unreliable, record the trigger plan and focus on finishing the working version.

## 22. Handoff checkpoint

Say: “Swap with a partner. Can they find the command and understand the expected output from your README without you narrating every step?”

Have participants record installation, working directory, output location, known limitations, and the owner. Use the final five minutes to choose what they will show and confirm no private data will appear on screen.

## 23. Demo time

**4:10–4:30.** For eight participants, allow two minutes each and four minutes total for transitions. For six, allow three minutes each plus two minutes of transitions.

Say: “Tell us what you did manually, show the result, explain one check you used, and name the next improvement.”

Keep the focus on participants' own projects. If someone estimates savings, ask them to include the time they still spend reviewing the output. Label the number as an estimate.

## 24. What you take away

Say: “You now have a process written down precisely enough to run and test. Keep the working version, the rules, and the next improvement together so you can continue from here.”

Ask each participant to record who owns the next run and when it will happen. Acknowledge any remaining access or reliability work explicitly. Close by inviting them to use the same process on their next small workflow.
