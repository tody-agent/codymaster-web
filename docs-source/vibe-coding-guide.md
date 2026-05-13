# Vibe Coding Guide for Non-Coders

> **Vibe Coding** = You talk, AI codes. No programming knowledge required.  
> This documentation is for non-developers — founders, PMs, marketers, designers — who want to use AI to build real products.

---

## Table of Contents

1. [What is Vibe Coding?](#what-is-vibe-coding)
2. [What Do You Need to Prepare?](#what-do-you-need-to-prepare)
3. [Installing CodyMaster (5 Minutes)](#installing-codymaster-5-minutes)
4. [5-Step Workflow](#5-step-workflow)
5. [10 Sample Prompts — Copy & Use Immediately](#10-sample-prompts)
6. [Tips for Effective Vibe Coding](#tips-for-effective-vibe-coding)
7. [Common Mistakes](#common-mistakes)
8. [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

---

## What is Vibe Coding?

**Vibe Coding** is a method of creating products by **talking to AI**. You describe your idea in natural language (English, Vietnamese, etc. are all OK), and the AI will:

- 📋 Create a detailed plan
- 🎨 Design a professional user interface
- 💻 Write production-ready code
- 🧪 Perform automated testing and security scans
- 🚀 Deploy it to the internet

### Simple Analogy

| | The Old Way | Vibe Coding |
|---|---|---|
| **Role** | You are the builder | You are the architect / director |
| **What You Do** | Learn to code, build it yourself | Describe ideas, review, and approve |
| **What AI Does** | Provides fragmented suggestions | Runs the whole team: planning, design, code, test, deploy |
| **Result** | Fragmented code, manual assembly | Complete product, live on the internet |

### Who Should Use Vibe Coding?

- ✅ **Founders** — Have ideas but don't know how to code.
- ✅ **Product Managers** — Want to prototype quickly.
- ✅ **Marketers** — Need landing pages, blogs, or content tools.
- ✅ **Designers** — Want to turn mockups into code.
- ✅ **Anyone** — Who wants to create websites, apps, or tools without hiring a developer.

---

## What Do You Need to Prepare?

### Hardware
- 💻 A computer (Mac, Windows, or Linux)
- 🌐 Stable internet connection

### Software (Choose one of the following AI agents)

| Agent | Platform | Note |
|-------|----------|---------|
| **Cursor IDE** | Desktop app | Beautiful UI, easiest for beginners |
| **Claude Code** | CLI (Terminal) | Powerful, requires Terminal knowledge |
| **Gemini Antigravity** | CLI (Terminal) | Free, Google integration |
| **OpenCode** | CLI (Terminal) | Open source |

> 💡 **Recommendation for beginners:** Use **Cursor IDE** — it has a visual interface and doesn't require typing Terminal commands.

### Accounts
- GitHub account (free, used to store code)
- An account for the AI agent you chose

---

## Installing CodyMaster (5 Minutes)

### Method 1: Install via NPM (Recommended - Fastest)

Open Terminal (on Mac: search for "Terminal" in Spotlight) and type:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all
codymaster
```

The `codymaster` command will open a menu to select an AI Agent (Cursor, Claude, Gemini...) and automatically install everything for you.

### Method 2: Automatic Installation via Script

If your machine doesn't have npm, use this command:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all
```

This command automatically detects and installs CodyMaster for all AI agents on your machine.

### Method 3: Individual Installation for Each Agent

**Cursor IDE:**
```bash
git clone https://github.com/tody-agent/codymaster.git ~/.cody-master
cp -r ~/.cody-master/skills .cursor/skills/
```

**Claude Code:**
```bash
claude plugin install cm@codymaster
```

**Gemini Antigravity:**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --antigravity
```

### Check if Installation was Successful

After installation, open your agent and type:
```
/cm-status
```

If you see information about CodyMaster → you have successfully installed it! 🎉

---

## 5-Step Workflow

This is the process CodyMaster automatically runs when you ask it to work:

### Step 1: 💬 You Chat — Describe Your Idea

Tell the AI what you want in normal language:

```
"Create a landing page for a spa named Serenity. Minimalist, 
elegant interface, with a booking form, photo gallery, 
and a customer review section."
```

**Tip:** Be as specific as possible. State clearly:
- Brand name
- Style/Tone (elegant, playful, professional...)
- Required functions
- Preferred colors (if any)

### Step 2: 📋 AI Analysis & Planning

CodyMaster will:
1. Analyze your requirements
2. Ask for more information if something is missing
3. Write an `implementation_plan.md` — a detailed plan

**⚠️ IMPORTANT:** The AI will ask you to approve the plan before coding. **READ IT CAREFULLY** and provide feedback! This is your most important "direction" moment.

### Step 3: 🎨 AI Interface Design

CodyMaster automatically:
- Selects appropriate fonts and colors
- Applies 48 UX rules (Fitts's Law, Hick's Law, etc.)
- Creates a preview for you to see

You review and say: "Okay" or "Make the font larger, add a CTA button at the end."

### Step 4: 💻 AI Coding & Testing

CodyMaster writes code with full:
- ✅ Automated tests (test-driven development — TDD)
- ✅ Security scans (no exposed secret keys or passwords)
- ✅ Automated error checking

You **don't need to read the code**. Just watch the test results to see if they pass ✅ or fail ❌.

### Step 5: 🚀 Deploy to the Internet

CodyMaster runs an 8-gate checkpoint pipeline:

```
Gate 1: Secret check → Gate 2: Syntax → Gate 3: Test 
→ Gate 4: i18n → Gate 5: Build → Gate 6: Smoke test 
→ Gate 7: Deploy → Gate 8: Verify live
```

Once all gates pass → your product is automatically live on the internet! 🎉

---

## 10 Sample Prompts

Copy & paste these prompts into your AI agent to get started immediately:

### 1. 🌐 Create a Landing Page
```
Create a landing page for the brand [NAME]. Industry: [INDUSTRY]. 
Tone: [STYLE]. Needs to have: hero section, introduction, pricing table, 
testimonials, contact form, and footer. Deploy it immediately.
```

### 2. 📊 Management Dashboard
```
Create a management dashboard for [DATA TYPE] for [BUSINESS TYPE]. 
Needs daily/monthly revenue charts, a list of [ITEMS], 
and a date range filter.
```

### 3. 📱 Booking System
```
Create a booking system for [SERVICE TYPE]. 
Customers select service → select date/time → enter info → confirm. 
Send an email reminder 24 hours in advance.
```

### 4. 🛒 Sales Page
```
Create a sales page for the product [PRODUCT NAME]. 
Needs: product images, description, price, buy button, FAQ, 
social proof, and Zalo/Messenger buttons.
```

### 5. ✍️ Blog & Content
```
Create a blog for the brand [NAME] in the field of [FIELD]. 
Write the first 5 articles about [TOPIC]. SEO optimized. 
Deploy the complete blog.
```

### 6. 🐛 Bug Fixing
```
The website has an error: [DESCRIPTION OF ERROR]. 
Desired behavior: [HOW IT SHOULD WORK]. 
Find the root cause and fix it.
```

### 7. 🎨 UI Adjustment
```
Change the current interface to a [COLOR] tone. 
Change the font to [FONT NAME]. 
Add smooth scroll animations.
```

### 8. 🌍 Add Multi-language Support
```
Add [LANGUAGE] support for the entire website. 
Translate all content. Add a language switcher button in the header.
```

### 9. 📱 Responsive Check
```
Check and fix the interface on mobile. 
Ensure all sections look good on iPhone and Android.
```

### 10. 📝 Generate Documentation
```
Read the entire project code and create:
1. Architecture documentation
2. User manual
3. API reference
```

---

## Tips for Effective Vibe Coding

### 🎯 Be Specific, Not Vague

| ❌ Too General | ✅ Specific |
|---|---|
| "Make a beautiful website" | "Create a landing page for Morning Brew coffee shop. Rustic, warm tone. Brown + cream colors. Needs a menu, 6-image gallery, booking form, and Google Maps." |
| "Fix website bug" | "When clicking the 'Order' button on product.html, the page reloads instead of showing a confirmation popup." |

### 🪜 Break It Down — Don't Ask for "Everything" at Once

```
# ❌ Wrong
"Create a complete app with login, dashboard, reports, chat, and payments"

# ✅ Right
Chat 1: "Create the login + registration pages"
Chat 2: "Add the dashboard after login"
Chat 3: "Add the report page with charts"
```

### 👀 Always Review the AI's Plan

The AI will provide `implementation_plan.md` before coding. **READ IT CAREFULLY!**

Provide specific feedback:
- "Remove the real-time chat, it's not needed yet."
- "Add an FAQ section to the landing page."
- "Use navy blue instead of green."

### 🗣️ Use Natural Language Freely

CodyMaster understands natural language. You don't need to use technical jargon or English if you prefer your native language.

### 📸 Send Reference Images

If you like the look of a certain website:
- Send the URL: *"Refer to the UI of https://example.com"*
- Or a screenshot: *"Design something similar to this image"*

### 🔁 Iterate — Continuous Improvements via Chat

After the first version:
- *"Make the CTA button bigger, change it to orange"*
- *"Add a customer review section"*
- *"Change the heading font to Montserrat"*

The AI remembers the context → updates without breaking existing code.

### ⚡ Use the `/cm-start` Command to Automate

```
/cm-start "Create a skincare blog for Serenity brand, 10 SEO articles"
```

CodyMaster will automatically run the entire pipeline: Plan → Design → Code → Test → Deploy.

---

## Common Mistakes

### 1. ❌ Not Reading the AI's Plan

**Consequence:** The AI goes in the wrong direction → you have to scrap the code and restart.  
**Fix:** Always read `implementation_plan.md` and comment before approving.

### 2. ❌ Asking for Too Many Things at Once

**Consequence:** The AI gets overloaded → provides mediocre results.  
**Fix:** Divide the task into small steps. Finish one step before moving to the next.

### 3. ❌ Vague Prompts

**Consequence:** The AI has to guess → results don't match your vision.  
**Fix:** State names, colors, functions, and styles clearly. The more specific, the better.

### 4. ❌ Copy-pasting Code from ChatGPT instead of Using the Workflow

**Consequence:** Fragmented code, no tests, no deployment flow.  
**Fix:** Use the CodyMaster workflow — it handles the entire pipeline for you.

### 5. ❌ Not Checking on Mobile

**Consequence:** The website looks great on a laptop but breaks on a phone.  
**Fix:** After deploying, always check on your phone. Or ask the AI: *"Check mobile responsiveness."*

---

## Frequently Asked Questions

### I don't know how to code at all, can I use this?

**Yes!** CodyMaster was created by a Product Manager (Tody Le) — not a developer. You just need to chat in natural language.

### How is Vibe Coding different from ChatGPT?

| | ChatGPT | CodyMaster (Vibe Coding) |
|---|---|---|
| Output | Fragmented code snippets | A complete product |
| Testing | No | Automated TDD |
| Security | No checks | 8-gate checkpoint |
| Deployment | You handle it yourself | 1 command |
| Memory | Forgets every session | Remembers project context |

### Is there a fee?

**CodyMaster is 100% free.** You only pay for the AI agent (Cursor ~$20/month, Claude API based on usage). Many agents have free tiers.

### Is the product created "real"?

**Yes.** This is real code, really deployed, and running on the real internet. It's not a mockup. CodyMaster creates production-ready code with test coverage, security scans, and an 8-gate deployment pipeline.

### What if I want to edit it later?

Just chat again! The AI remembers the project context via `cm-continuity`. For example: *"Change the header color to dark blue"* — the AI updates it without breaking old code.

### What can I create with Vibe Coding?

- 🌐 Landing pages & Websites
- 📊 Dashboards & Admin panels
- 📱 Booking systems
- 🛒 E-commerce pages
- ✍️ Blogs & Content platforms
- 📝 Documentation sites
- 📧 Email templates
- 🎨 UI/UX mockups

---

## Get Started Now

```bash
# 1. Install CodyMaster (1 command)
bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all

# 2. Open your AI agent and type:
/cm-start "Describe your project here"

# 3. Sit back, review, and chat your feedback. CodyMaster handles the rest.
```

> **"60 skills. Each skill is a lesson. Each lesson is a sleepless night. 
> And now, you don't have to go through those nights."**  
> — Tody Le, Creator of CodyMaster

---

*This documentation is part of the [CodyMaster Kit](https://github.com/tody-agent/codymaster) — Free & Open Source.*
