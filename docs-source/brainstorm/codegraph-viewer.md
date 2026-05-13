---
title: "Vibe Coding Guide for Non-Coders"
description: "A complete guide to Vibe Coding with CodyMaster — no programming knowledge required."
keywords: ["vibe coding", "no-code", "ai agent", "codymaster", "tutorial"]
robots: "index, follow"
---

# Vibe Coding Guide for Non-Coders

> **Vibe Coding** = You talk, AI codes. No programming knowledge required.  
> This documentation is for non-developers — founders, PMs, marketers, designers — who want to use AI to build real products.

---

## Table of Contents

1. [What is Vibe Coding?](#what-is-vibe-coding)
2. [What do you need to prepare?](#what-do-you-need-to-prepare)
3. [Installing CodyMaster (5 minutes)](#installing-codymaster-5-minutes)
4. [5-Step Workflow](#5-step-workflow)
5. [10 Sample Prompts — Copy & Use Instantly](#10-sample-prompts-copy-use-instantly)
6. [Tips for Effective Vibe Coding](#tips-for-effective-vibe-coding)
7. [Common Mistakes](#common-mistakes)
8. [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

---

## What is Vibe Coding?

**Vibe Coding** is a method of creating products by **talking to AI**. You describe your ideas in natural language (Vietnamese works perfectly fine), and the AI will:

* 📋 Plan in detail
* 🎨 Design the interface
* 💻 Write the source code
* 🧪 Run tests to ensure no bugs
* 🚀 Deploy the product to the internet

You don't need to touch a single line of code. Your job is to **"Vibe"** — maintain the vision, give feedback, and direct the AI.

---

## What do you need to prepare?

1. **A clear idea:** What do you want to build? (e.g., A landing page for a coffee shop, a personal financial management app).
2. **An AI Agent:** We recommend using **Cursor** (an AI-powered code editor) or **Claude Code** (a command-line tool).
3. **CodyMaster Kit:** This is the "brain" that helps AI work professionally, write clean code, and avoid common mistakes.

---

## Installing CodyMaster (5 minutes)

### Method 1: Use the installer (Recommended)

Open the Terminal (on Mac) or Command Prompt (on Windows) and type:

```bash
npx @tody-agent/codymaster init
```

The `codymaster` command will open a menu to choose your AI Agent (Cursor, Claude, Gemini...) and automatically install everything for you.

### Method 2: Automatic installation via Script

If your machine doesn't have npm, use the following command:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all
```

This command automatically detects and installs CodyMaster for all AI agents on your machine.

### Method 3: Manual installation for each agent

**Cursor IDE:**
Copy the `skills/` folder into the `.cursor/rules/` directory of your project.

**Claude Code:**
```bash
claude plugin install cm@codymaster
```

**Gemini Antigravity:**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --antigravity
```

---

## 5-Step Workflow

### Step 1: 💡 Describe your idea (The Prompt)

Talk to the AI agent as if you were talking to a senior developer.

**Example:**
> "I want to create a landing page for my premium spa brand. It needs a booking form, a photo gallery, and a customer reviews section."

**Tip:** Be as specific as possible. State clearly:
* Brand name
* Style/tone (luxury, playful, professional...)
* Required features
* Preferred colors (if any)

### Step 2: 📋 AI Analysis & Planning

CodyMaster will:
1. Analyze your requirements
2. Ask for more information if something is missing
3. Write an `implementation_plan.md` — a detailed plan

**⚠️ IMPORTANT:** AI will ask you to approve the plan before coding. **READ IT CAREFULLY** and give feedback! This is your most important "direction" moment.

### Step 3: 🎨 AI Interface Design

CodyMaster automatically:
* Chooses appropriate fonts and colors
* Applies 48 UX rules (Fitts's Law, Hick's Law, etc.)
* Creates a preview for you to see

You review and say: "Okay" or "Make the font bigger, add a CTA button at the end."

### Step 4: 💻 AI Coding & Testing

CodyMaster writes code with full:
* ✅ Automated tests (test first, code later — TDD)
* ✅ Security scans (no leaked secret keys, passwords)
* ✅ Automated bug checks

You **don't need to read the code**. If the AI encounters an error, CodyMaster will tell it how to fix it itself.

### Step 5: 🚀 One-Click Deploy

Once you are satisfied, say:
> "Deploy this to the internet."

CodyMaster runs the 8-gate "Safe Deploy" pipeline:
`Gate 1: Secrets → Gate 2: Syntax → Gate 3: Tests → Gate 4: i18n → Gate 5: Build → Gate 6: Smoke test → Gate 7: Deploy → Gate 8: Verify live`

All gates pass → your product is automatically live on the internet! 🎉

---

## 10 Sample Prompts

Copy & paste these prompts into your AI agent to get started right away:

### 1. 🌐 Create a Landing Page
> Create a landing page for the brand [NAME]. Industry [INDUSTRY]. Tone [STYLE]. Needs: hero section, introduction, pricing table, testimonials, contact form, and footer. Deploy immediately.

### 2. 📊 Management Dashboard
> Create a management dashboard for [DATA TYPE] for [BUSINESS TYPE]. Needs revenue charts by day/month, a list table of [ITEMS], and filters by time period.

### 3. 📱 Booking System
> Create a booking system for [SERVICE TYPE]. Customers choose a service → choose date/time → enter information → confirm. Send email reminder 24h before.

### 4. 🛒 Sales Page
> Create a sales page for the product [PRODUCT NAME]. Needs: product photos, description, price, buy button, FAQ, social proof, and Zalo/Messenger buttons.

### 5. ✍️ Blog & Content
> Create a blog for brand [NAME] in the field of [FIELD]. Write the first 5 articles about [TOPIC]. SEO optimized.

### 6. 🔐 Member Portal
> Build a member portal where users can register, log in, and see content reserved for [MEMBERSHIP LEVEL]. Use Supabase for authentication.

### 7. 🤖 Custom AI Bot
> Create a web interface for an AI chatbot specializing in [EXPERTISE]. Use the OpenAI API. Needs chat history and a "Clear Chat" button.

### 8. 📅 Event Page
> Create a registration page for the event [EVENT NAME]. Needs a countdown timer, speakers list, agenda, and a "Register Now" button that saves data to a Google Sheet.

### 9. 🎨 Portfolio
> Create a portfolio for a [PROFESSION]. Needs a project gallery with filter by category, an "About Me" section, and a contact form. Minimalist style.

### 10. 🛠️ Internal Tool
> Build a tool for the team to [TASK NAME]. Needs to connect to [API/DATABASE] and allow users to search, edit, and export data to Excel.

---

## Tips for Effective Vibe Coding

1. **Start Small:** Don't try to build "Facebook" in one day. Build one core feature first, then expand.
2. **The "Approved" Rule:** Never let AI code until you have read and approved the `implementation_plan.md`.
3. **Use the Dashboard:** Run `cm dashboard` to see the work progress visually.
4. **Don't Be Afraid to Reject:** If the design is ugly, say it's ugly. AI doesn't have feelings — tell it exactly what you want to change.
5. **Continuous Continuity:** Use `cm continuity status` to ensure the AI remembers what it was doing from the previous session.

---

## Common Mistakes

* **Vague prompts:** "Build me a website" → AI won't know what you want.
* **Skipping tests:** "Code it fast, no need for tests" → You will get bugs later.
* **Not reading the plan:** This is the #1 cause of AI "going off track."
* **Over-complicating:** Trying to add too many features at once makes the AI confused.

---

## Frequently Asked Questions (FAQ)

**Q: Do I really not need to know any code?**
A: Correct. But you need to know "Logic." You need to be able to describe how the app should work.

**Q: Is it expensive?**
A: You only pay for the AI API (OpenAI/Claude) which is usually a few dollars for a small project. CodyMaster is free and open source.

**Q: Can I build mobile apps?**
A: Yes. You can build web apps that work perfectly on mobile or use Flutter/React Native to build native apps.

**Q: What if the AI gets stuck?**
A: Use the `cm-debugging` skill. It will help the AI analyze why it's stuck and find a way out.

---

> **"A non-coder's most painful lesson is a sleepless night.  
> And now, you don't have to go through those nights."**  
> — Tody Le, Creator of CodyMaster

---

*This documentation is part of the [CodyMaster Kit](https://github.com/tody-agent/codymaster) — Free & Open Source.*
