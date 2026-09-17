# Before the workshop

Bring three repetitive tasks you would like to automate. Describe each current process rather than proposing an app:

> When ___ happens, I manually ___, then ___, then ___. This happens ___ times per week and takes ___ minutes each time. I get input from ___ and produce ___.

Bring an approved, anonymized example of the input and a sample of the output you want. A CSV export is sufficient. Avoid customer names, contact details, financial details, passwords, or live browser profiles in anything shared with the group.

## Laptop readiness

- Bring a charged laptop and charger.
- Install an organization-approved Node.js LTS release, Git, Chrome, and VS Code or your chosen editor.
- Sign in to your coding agent and confirm you can use it.
- Have a GitHub account if you want to publish code. Local work is enough for the exercises.
- Arrange IT approval for required installations ahead of time if the machine is managed.
- Prepare authorized access to the chosen input, ideally a test account or approved export.

In PowerShell on Windows, or Terminal on macOS, run:

```bash
node --version
npm --version
git --version
node -e "console.log('Workshop ready')"
```

Clone the workshop using HTTPS so no SSH key setup is required:

```bash
git clone https://github.com/BelfordZ/vibe-workshop.git
cd vibe-workshop
```

If any setup command fails, share the command and error with the facilitator before the workshop. Do not change corporate security settings to make a command work.

Install dependencies only for the starter you choose, following its README. If Outlook access is unavailable, use a file-based exercise. A coding-agent login does not grant access to your business systems.
