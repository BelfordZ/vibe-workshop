# Before the workshop

Bring three repetitive tasks you would like to automate. Describe each current process rather than proposing an app:

> When ___ happens, I manually ___, then ___, then ___. This happens ___ times per week and takes ___ minutes each time. I get input from ___ and produce ___.

Bring an approved, anonymized example of the input and a sample of the output you want. A CSV export is sufficient. Avoid customer names, contact details, financial details, passwords, or live browser profiles in anything shared with the group.

## Laptop readiness

- Bring a charged laptop and charger.
- Machines are locked down. Do not install programs, runtimes, browsers, or change security settings for this workshop.
- Sign in to your coding agent and confirm you can use it.
- Have a GitHub account if you want to publish code. Local work is enough for the exercises.
- Tell the facilitator which approved tools are already available and whether loading a workshop Chrome extension is permitted. We will choose a workflow that fits existing access.
- Prepare authorized access to the chosen input, ideally a test account or approved export.

If terminal use is permitted, these commands check existing tools without installing them. Missing tools are a planning constraint, not an instruction to install:

```bash
node --version
npm --version
git --version
node -e "console.log('Workshop ready')"
```

If Git is already available and its use is permitted, obtain the repository using HTTPS:

```bash
git clone https://github.com/BelfordZ/vibe-workshop.git
cd vibe-workshop
```

If any setup command fails, share the command and error with the facilitator before the workshop. Do not change corporate security settings to make a command work.

The facilitator will identify a usable starter within the existing environment. Some repository READMEs include installation commands for general development; those are not setup instructions for these locked-down machines. Dependency installation or extension loading must not be assumed available. If local setup is unavailable, use approved materials provided by the facilitator.

We will not register Microsoft 365 applications or request new organization permissions. A Playwright workflow requires its runtime and browser to be present already and uses a dedicated local profile where you sign in manually. If neither Playwright nor extension loading is available, use an approved export or fictional data. A coding-agent login does not grant access to business systems.
