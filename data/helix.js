    window.PROJECT_DATA = {
      name: "Helix — Fitness Coaching App",
      client: "Jason",
      lastUpdated: "March 9, 2026",     // ← update this each time you edit
      phases: ["Discovery", "Design", "Build V1", "Launch"],
      currentPhase: 1,               // ← 0=Discovery, 1=Design, 2=Build, 3=Launch

      // ── SUMMARY (keep in sync with tasks below) ──
      summary: { total: 60, done: 24, inProgress: 0, blocked: 0, todo: 36 },

      // ── DISCIPLINES & TASKS ──
      // status options: "todo" | "in-progress" | "blocked" | "done"
      // priority options: "high" | "medium" | "low"
      disciplines: [
        {
          id: "product", label: "Product",
          color: "#2563EB", lightColor: "#EFF6FF", borderColor: "#BFDBFE",
          owner: "Cowork",
          tasks: [
            { id: 1,  text: "Process discovery call transcript",                                      status: "done",    priority: "high" },
            { id: 2,  text: "Update product brief with client inputs",                                status: "done",    priority: "high" },
            { id: 3,  text: "Validate assumptions from tracker",                                      status: "done",    priority: "high" },
            { id: 4,  text: "Confirm V1 vs V2 scope with client",                                     status: "done",    priority: "high" },
            { id: 5,  text: "Document full periodization methodology — extract sticky logic pieces",  status: "done",    priority: "high" },
            { id: 23, text: "Write feature spec: programming intake flow (sequence → phases → blocks → weeks → sessions)", status: "done", priority: "high" },
            { id: 24, text: "Write feature spec: pre-session readiness check-in and session adjustment logic", status: "done", priority: "high" },
            { id: 25, text: "Write feature spec: RPE-per-set logging and progressive overload decisions", status: "done", priority: "high" },
            { id: 33, text: "Scope Nutrition module — complete spec or formally defer to Phase 2",    status: "done",    priority: "high" },
            { id: 42, text: "✅ Q4 ANSWERED — Exercise selection filter order (A1): Zone → Focus → Equipment → Injury → Duplication → Order Validation", status: "done", priority: "high" },
            { id: 43, text: "✅ Q5 ANSWERED — Barbell override: 7 rule categories (zone, folder conflicts, genre rules, equipment conflicts, fatigue, Helix Rank, neural stacking)", status: "done", priority: "high" },
            { id: 44, text: "Write feature spec: performance assessments (intake-selectable, calendar-schedulable, repeat frequency)", status: "todo", priority: "high" },
            { id: 45, text: "Write feature spec: coach dashboard (compliance, readiness flags, fatigue trend, override flow)", status: "todo", priority: "high" },
            { id: 46, text: "Write feature spec: Google Calendar integration",                        status: "todo", priority: "high" },
            { id: 47, text: "Define gamification feature: 1RM tracker — user stories and acceptance criteria", status: "todo", priority: "high" },
            { id: 22, text: "Review Jason's exercise database spreadsheet and finalize filter tag structure", status: "todo", priority: "high" },
            { id: 32, text: "Define Phase 1 vs Phase 2 feature designations for Product Outline",     status: "todo", priority: "high" },
            { id: 34, text: "Clarify Hotel Travel programming mode integration with main automation logic", status: "done", detail: "✅ RESOLVED: Travel mode is a subset of the main engine, lives as folder within engine", priority: "medium" },
            { id: 35, text: "Define Ethnicity and Gender question downstream logic for programming engine", status: "done", detail: "✅ RESOLVED: Gender is tracking-only (case studies, research) — no programming impact", priority: "medium" },
            { id: 36, text: "Confirm whether Assessment sheet feeds directly into Synopsis by Joint Data", status: "todo", priority: "medium" },
            { id: 37, text: "Audit blank filter cells in Exercise Database (Single or Pair, Loading Position columns)", status: "todo", priority: "medium" },
          ],
        },
        {
          id: "ux", label: "UX",
          color: "#7C3AED", lightColor: "#F5F3FF", borderColor: "#DDD6FE",
          owner: "Cowork",
          tasks: [
            { id: 6,  text: "Map full programming intake flow as UX user flow",           status: "todo", priority: "high" },
            { id: 7,  text: "Design self-guided → coaching conversion moment",             status: "todo", priority: "high" },
            { id: 8,  text: "Design coach dashboard — compliance, readiness flags, override", status: "done", priority: "high", groupId: "ux-wireframes-v1", groupLabel: "UX Wireframes v1" },
            { id: 9,  text: "Design pre-session readiness check-in screen flow",           status: "done", priority: "high", groupId: "ux-wireframes-v1", groupLabel: "UX Wireframes v1", groupAsset: "https://helix-io-ctrl.github.io/helix-dashboard/assets/ux/helix-wireframes-v1.html" },
            { id: 52, text: "Wireframes v2: Revise readiness check-in — add deload button (opaque until triggered), update colors to blue=fresh green=normal", status: "todo", priority: "high", detail: "Jason feedback: deload button appears when readiness scores trigger it. Blue for fresh state, green for normal." },
            { id: 53, text: "Wireframes v2: Revise workout logging — showcase supersets, smaller weight/rep boxes (no lateral scroll), RPE as 1-10 tappable buttons", status: "todo", priority: "high", detail: "Jason feedback: tapping RPE buttons instead of text entry is a nice feature." },
            { id: 54, text: "Wireframes v2: Design session overview screen — full session view, begin button, modalities button to update session", status: "todo", priority: "high", detail: "Jason feedback: user needs to see entire session before starting. Modalities button updates session in real-time." },
            { id: 55, text: "Wireframes v2: Design client profile screen — metric/imperial toggle, demographics, biometrics, phase/block/week, goals, injuries, calendar access", status: "todo", priority: "high", detail: "Jason feedback: comprehensive profile view with quick calendar access for managing tasks/events." },
            { id: 56, text: "Wireframes v2: Revise coach dashboard — client bars show age, population, call/message/calendar icons; first screen for coach profiles only", status: "todo", priority: "high", detail: "Jason feedback: coach dashboard is coach-only (not client). Client bars need more info at a glance." },
            { id: 57, text: "Wireframes v2: Design client home screen — calendar at bottom, stats/profile at top", status: "todo", priority: "high", detail: "Jason feedback: for the client view, calendar bottom half + stats/profile top half." },
            { id: 26, text: "Design RPE per-set logging screen",                           status: "todo", priority: "medium" },
            { id: 27, text: "Design self-guided onboarding for travel kit users (QR → first workout)", status: "todo", priority: "medium" },
          ],
        },
        {
          id: "engineering", label: "Engineering",
          color: "#059669", lightColor: "#ECFDF5", borderColor: "#A7F3D0",
          owner: "Cowork",
          tasks: [
            { id: 10, text: "Decide tech stack (mobile framework, backend, DB)",                  status: "done", priority: "high" },
            { id: 11, text: "Design data model: exercise database (folders, filter tags, videos)", status: "done", priority: "high" },
            { id: 12, text: "Design data model: adaptive programming engine (program hierarchy)",  status: "done", priority: "high" },
            { id: 48, text: "Implement exercise selection filter logic (Q4/Q5 ANSWERED — now unblocked)", status: "todo", priority: "high" },
            { id: 49, text: "Implement FSS formula and week-to-week progressive overload engine", status: "todo", priority: "high" },
            { id: 50, text: "Implement cumulative fatigue model and 5-condition deload trigger system", status: "todo", priority: "high" },
            { id: 51, text: "Implement performance assessment schema and scheduling logic",        status: "todo", priority: "high" },
            { id: 13, text: "Set up repo and staging/production environment",                     status: "done", detail: "✅ Repo scaffolded: github.com/Helix-iO-ctrl/helix-app — monorepo with Expo mobile, Node API, adaptive engine, Supabase schema", priority: "medium" },
            { id: 38, text: "Verify all AVERAGE formulas in Joint ROM sheet are live calculations, not text strings", status: "todo", priority: "high" },
            { id: 39, text: "Client to QA 648 applied exercise name changes, then delete Name Changes tab", status: "todo", priority: "high" },
            { id: 40, text: "Validate Stork Balance equation (AP Sway + ML Sway) against client's methodology", status: "todo", priority: "medium" },
            { id: 41, text: "Confirm 18-sheet Automation Matrix is complete set — or identify missing Team Programming sheets", status: "todo", priority: "medium" },
          ],
        },
        {
          id: "marketing", label: "Marketing",
          color: "#DC2626", lightColor: "#FEF2F2", borderColor: "#FECACA",
          owner: "Cowork",
          tasks: [
            { id: 14, text: "Finalize coach-facing positioning ('Get a day back every week')",    status: "todo", priority: "medium", detail: "Needs: (1) core value prop statement, (2) 3-5 messaging pillars, (3) competitive differentiation language. Hayden asked what's left — moved back to todo." },
            { id: 15, text: "Research helix.io domain + backup options (helix.app, gethelix.com)", status: "done", priority: "high", detail: "✅ RESOLVED: Domain helix.mobile secured. Helix available as app name." },
            { id: 16, text: "Draft travel kit landing page strategy (Shopify → Amazon FBA)",      status: "todo", priority: "high" },
            { id: 28, text: "Define 4-layer business ecosystem funnel for marketing materials",   status: "todo", priority: "medium" },
            { id: 29, text: "Develop pre-sale campaign concept for travel kit (20-unit batch)",   status: "todo", priority: "medium" },
          ],
        },
        {
          id: "creative", label: "Creative",
          color: "#D97706", lightColor: "#FFFBEB", borderColor: "#FDE68A",
          owner: "Cowork",
          tasks: [
            { id: 17, text: "Begin visual identity exploration for Helix — mood board, palette, type", status: "done", priority: "medium", assetPath: "https://helix-io-ctrl.github.io/helix-dashboard/assets/creative/helix-visual-identity-v1.html", detail: "✅ Jason selected Carbon Precision palette (Option C). Brand territory and visual identity positioning wording updated per Jason's feedback." },
            { id: 18, text: "Design travel kit branding concept (embroidered bag, QR card)",          status: "todo",        priority: "medium" },
            { id: 30, text: "Formalize app name as Helix — reserve brand assets, confirm domain",    status: "done",        priority: "high", detail: "✅ RESOLVED: Domain helix.mobile secured. Helix available as app name." },
            { id: 58, text: "Finalize Carbon Precision palette hex values and create design token spec", status: "todo", priority: "high" },
            { id: 59, text: "Update readiness check-in color scheme: blue=fresh, green=normal per Jason's feedback", status: "todo", priority: "high" },
          ],
        },
        {
          id: "data", label: "Data",
          color: "#0891B2", lightColor: "#ECFEFF", borderColor: "#A5F3FC",
          owner: "Cowork",
          tasks: [
            { id: 19, text: "Set up PostHog and instrument V1 events",              status: "todo", priority: "medium", detail: "Pending cost research — Hayden wants to see pricing and free alternatives first." },
            { id: 20, text: "Define core event tracking plan",                      status: "done", priority: "high" },
            { id: 21, text: "Define north star metrics",                            status: "done", priority: "high" },
            { id: 31, text: "Define travel kit validation metrics (pre-sale KPIs)", status: "todo", priority: "high" },
            { id: 60, text: "Research PostHog pricing tiers and free alternatives — cost breakdown needed before setup", status: "todo", priority: "medium", detail: "Hayden's request: see costs and free options until scale. Also wants scheduled data task integration." },
          ],
        },
      ],

      // ── DECISIONS ──
      decisions: [
        { date: "Mar 9, 2026", title: "Domain secured: helix.mobile",
          detail: "helix.mobile secured as primary domain. Helix available as app name in app stores. Original helix.io target replaced." },
        { date: "Mar 9, 2026", title: "Color palette selected: Carbon Precision (Option C)",
          detail: "Jason selected Carbon Precision (warm, approachable, premium). Rationale: stands out from competitors, catching but not overbearing, opposite spectrum from palettes used heavily by other brands in similar spaces." },
        { date: "Mar 9, 2026", title: "Brand territory wording updated per Jason's feedback",
          detail: "Updated to: 'Helix is built for coaching businesses that demand precision, scalability, and intelligence. The visual identity reflects three core values: authority through data, respect for human expertise, and premium engineering.' Positioning: between premium sport tech and high-performance medical." },
        { date: "Mar 9, 2026", title: "Readiness color scheme: blue = fresh (best state)",
          detail: "Jason requested blue for 'fresh' readiness state instead of green. Blue is commonly the best/highest score in performance systems. Green becomes 'normal.' Yellow, orange, red remain as presented." },
        { date: "Mar 6, 2026", title: "Performance test frequency: coach's discretion",
          detail: "No system-enforced repeat interval. Coaches schedule performance tests on each client's calendar at their discretion. No default cadence in V1." },
        { date: "Mar 6, 2026", title: "Hotel Travel mode: subset of main engine",
          detail: "Travel programming is not a standalone mode — it's a subset of the main engine with constrained equipment filters. Lives as a folder within the engine architecture." },
        { date: "Mar 6, 2026", title: "Gender field: tracking only, no programming impact",
          detail: "Gender (including 'Decline to Identify') is collected for case studies and research only. It does not influence programming adjustments. No bypass logic needed." },
        { date: "Mar 6, 2026", title: "GitHub repo created: Helix-iO-ctrl/helix-app",
          detail: "Monorepo scaffolded with Expo mobile app, Node.js TypeScript API, shared types package, and Supabase initial migration. Full adaptive engine module structure maps 1:1 to spec sections." },
        { date: "Mar 5, 2026", title: "Build order: Training MVP before Nutrition",
          detail: "Confirmed in Session 1.1 team sync. Training engine is built first; nutrition module is fully deferred to V2. Jake + Keagan defining nutrition MVP terms this week." },
        { date: "Mar 5, 2026", title: "Jake Cannizzaro — confirmed full collaborator",
          detail: "Jake is not just a nutrition consultant — he is a confirmed full collaborator with ownership of the V2 nutrition spec. His templates will be the data foundation for the nutrition module." },
        { date: "Mar 5, 2026", title: "Target market: coach tool, not large platform",
          detail: "Jason wants to market to individual PTs, performance coaches, and small coaching businesses (LA Fitness, coaching agencies). Not a consumer fitness marketplace." },
        { date: "Mar 5, 2026", title: "MVP beta: 10–15 people",
          detail: "First test cohort is 10-15 coached clients. Josh (USA Men's Sevens rugby S&C coach) flagged as a high-value potential beta user and advisor." },
        { date: "Mar 5, 2026", title: "Weekly workflow updated: Tuesdays + Fridays",
          detail: "Tuesdays: Jason + Keagan sync. Fridays: full team with Hayden. (Previously listed as Wednesday + Friday — corrected.)" },
        { date: "Mar 5, 2026", title: "Performance testing: V1 feature (calendar-schedulable, intake-selectable)",
          detail: "4 categories: Balance, Power, COD/Agility, Strength. ~43 tests total. Client selects relevant tests at intake; tests are scheduled to calendar with configurable repeat frequency." },
        { date: "Mar 5, 2026", title: "Official training zones: 6 zones only (canonical set confirmed)",
          detail: "Strength, Strength Endurance, Power, Power Endurance, Hypertrophy, Muscular Endurance. These are the only zones in V1 — no others. Prior docs listing 7 zones were incorrect." },
        { date: "Mar 5, 2026", title: "Block transitions: default time-based, event-triggered for athletes",
          detail: "Most demographics transition at end of block by week count. Athlete demographic uses event date for taper logic. Documented in adaptive-engine-spec.md Section XIV." },
        { date: "Mar 6, 2026", title: "Q4 & Q5 ANSWERED — Adaptive engine fully unblocked",
          detail: "Q4: A1 exercise selection filter order confirmed (6 steps). Q5: Barbell override rules confirmed (7 categories). Helix Rank system introduced (5 levels: Foundation → Apex). Stress added as 3rd readiness input. Folder conflict rules (33 folder system), movement genre rules, and equipment conflict rules all documented. See adaptive-engine-spec.md sections XXIII–XXV." },
        { date: "Mar 5, 2026", title: "Adaptive engine: full spec documented in adaptive-engine-spec.md",
          detail: "Q1–Q3 fully answered. FSS formula, RPE ladders, 6 zones, tier structures, cumulative fatigue model, 5 deload triggers, plateau detection, and block construction rules all captured." },
        { date: "Mar 1, 2026", title: "Volleyball positions added to intake form",
          detail: "Added Setter, Outside Hitter, Middle Blocker, Opposite Hitter, Libero, Defensive Specialist. Client to confirm these are correct for their athlete population." },
        { date: "Mar 1, 2026", title: "Exercise name standardization applied",
          detail: "648 renames applied across all 34 exercise sheets (wall ball → med ball, straight bar → small bar, pull down bar updates, banded body renames). Client QA required before Name Changes tab is deleted." },
        { date: "Mar 1, 2026", title: "Fitness ranking field — data format corrected",
          detail: "23 cells corrected from datetime objects (e.g., 2025-01-02) to proper text scale format (1 – 2, 3 – 4, etc.). Schema must enforce text type for this field." },
        { date: "Feb 27, 2026", title: "App name: Helix",
          detail: "AI-suggested name selected by Jason. Domain target: helix.io. Supports future voice feature ('Hey Helix...')." },
        { date: "Feb 27, 2026", title: "V1 scope locked",
          detail: "V1: adaptive engine, readiness check-ins, RPE logging, coach dashboard, client app (iOS + Android), messaging, Stripe. V2: motion capture, team management, nutrition, professional sports." },
        { date: "Feb 27, 2026", title: "Business ecosystem: 4-layer model",
          detail: "Kit (lead gen) → Helix app (delivery) → Coaching service (recurring) → School/education (content). Each layer feeds the next." },
        { date: "Feb 27, 2026", title: "Travel kit near-term: Everfit + QR code",
          detail: "Use Everfit for travel kit delivery while Helix is built. QR code on packaging → Everfit onboarding → migrate to Helix when ready." },
        { date: "Feb 27, 2026", title: "Travel kit fulfillment: Amazon FBA",
          detail: "Shopify landing page → Amazon checkout → FBA fulfillment. No warehouse needed. Source from Amazon initially, Alibaba at scale." },
        { date: "Feb 27, 2026", title: "Nutrition is V2 — MyFitnessPal API",
          detail: "MFP API is free and has the largest food database. Helix adds adaptive intelligence on top. Jake Cannizzaro owns the nutrition spec." },
        { date: "Feb 27, 2026", title: "Meeting cadence established",
          detail: "Updated in Session 1.1: Tuesdays — Keagan + Jason sync. Fridays — full team with Hayden." },
        { date: "Feb 27, 2026", title: "Project folder structure finalized",
          detail: "Using .skills/, docs/, tasks/, decisions/ architecture for Cowork and Claude Code." },
        { date: "Feb 27, 2026", title: "Cowork selected as primary execution tool",
          detail: "Paired with Claude Code for engineering tasks." },
        { date: "Feb 27, 2026", title: "PostHog selected for analytics",
          detail: "All-in-one: funnels, session replay, A/B testing." },
      ],

      // ── WEEKLY UPDATES ──
      // Added automatically each Friday by the weekly snapshot scheduled task.
      // Each entry: { week, dateRange, pct, done, blockers, wins, nextUp, snapshotUrl }
      weeklyUpdates: [
        {
          week: 1,
          dateRange: "Feb 24 – Feb 27",
          pct: 10,
          done: 5,
          blockers: 1,
          wins: [
            "Full competitive analysis completed across 7 platforms — clear differentiation confirmed",
            "North star metrics defined — weekly active clients completing check-in + workout",
            "Full project management system built — Cowork-ready folder structure with 7 skill files",
            "26 assumptions documented and prioritized — ready to validate on discovery call",
            "Discovery call prep completed — focused question guide with must-answers identified",
          ],
          nextUp: [
            "Process discovery call transcript — update product brief and log decisions",
            "Confirm V1 scope — what's in, what's explicitly out, timeline estimate",
            "Begin methodology extraction session — document periodization rules into engineering spec",
          ],
          snapshotUrl: "https://helix-io-ctrl.github.io/helix-dashboard/snapshots/snapshot-2026-02-27.html"
        },
        {
          week: 2,
          dateRange: "Mar 2 – Mar 6",
          pct: 35,
          done: 19,
          blockers: 0,
          wins: [
            "Processed Session 1.1 transcript + Jason's Q&A doc — complete periodization methodology extracted",
            "Created adaptive-engine-spec.md covering FSS formula, RPE ladders, 6-zone system, and deload logic",
            "Q4 RESOLVED: A1 exercise selection filter order confirmed (6-step deterministic algorithm)",
            "Q5 RESOLVED: Barbell override rules + Helix Rank 5-level system fully documented",
            "Updated data model with Session 1.1 entities and 9 new decisions logged",
          ],
          nextUp: [
            "Write feature specs: performance assessments, coach dashboard, Google Calendar integration",
            "Begin Supabase schema implementation using updated data-model.md",
            "Implement exercise selection filter logic (now unblocked by Q4/Q5)",
          ],
          snapshotUrl: "https://helix-io-ctrl.github.io/helix-dashboard/snapshots/snapshot-2026-03-06.html"
        },
      ],

      // ── ASSET LIBRARY ──
      // Central catalog of all deliverables. Each asset can have multiple versions.
      // status options: "draft" | "in-review" | "revision-needed" | "approved"
      // Add new entries when a deliverable is created; add versions when it's updated.
      assets: [
        {
          id: "visual-identity-v1",
          title: "Visual Identity Exploration",
          discipline: "creative",
          description: "Mood boards, color palettes, and typography direction for the Helix brand.",
          status: "approved",
          versions: [
            {
              version: 1,
              date: "Mar 6, 2026",
              url: "https://helix-io-ctrl.github.io/helix-dashboard/assets/creative/helix-visual-identity-v1.html",
              note: "3 palette options presented. Jason selected Option C: Carbon Precision. Brand territory wording updated.",
              status: "approved",
            },
          ],
        },
        {
          id: "ux-wireframes",
          title: "UX Wireframes",
          discipline: "ux",
          description: "Screen layouts for readiness check-in, workout logging, and coach dashboard.",
          status: "revision-needed",
          versions: [
            {
              version: 1,
              date: "Mar 6, 2026",
              url: "https://helix-io-ctrl.github.io/helix-dashboard/assets/ux/helix-wireframes-v1.html",
              note: "v1 delivered. Jason provided detailed feedback — 6 revision tasks created for v2.",
              status: "revision-needed",
            },
          ],
        },
      ],

      // ── FEEDBACK RESPONSES ──
      // Track the team's response to client feedback on assets and deliverables.
      // Key format matches comment grouping: "task-asset:{taskId}" or "task-group:{groupId}"
      // status options: "viewed" | "implementing" | "deferred" | "done"
      feedbackResponses: {
        "task-asset:17": {
          status: "done",
          note: "Carbon Precision palette selected. Brand territory and visual identity positioning wording updated per Jason's feedback. Changes applied to creative-guide.md. Full palette hex extraction deferred to visual identity v2.",
          respondedBy: "Cowork",
          respondedAt: "Mar 9, 2026",
        },
        "task-group:ux-wireframes-v1": {
          status: "deferred",
          note: "All screen-level feedback captured and logged. 6 new wireframe v2 tasks created covering: deload button, color scheme (blue=fresh), superset display, RPE tappable buttons, session overview screen, client profile screen, coach dashboard revisions, client home screen. Asset will be updated in wireframes v2 iteration.",
          respondedBy: "Cowork",
          respondedAt: "Mar 9, 2026",
        },
      },

      // ── OPEN QUESTIONS ──
      // urgency options: "critical" | "high" | "medium"
      openQuestions: [
        { q: "What are the simplest MVP terms for the nutrition piece?",
          urgency: "high", note: "Jake + Keagan to define this week. Nutrition module is V2 build but spec definition should start now." },
        { q: "What is the equity/compensation structure between Jason, Jake, Keagan, and Hayden?",
          urgency: "high", note: "Four-way conversation needed now that Jake is confirmed as a full collaborator. Jason has flagged he wants everyone to have a piece." },
        { q: "What are the startup costs for the travel kit (per-unit COGS, packaging, shipping)?",
          urgency: "high", note: "Keagan to research. Needed to validate the pre-sale pricing model." },
        { q: "What is the target coaching price point per client per month?",
          urgency: "medium", note: "Informs positioning and feature prioritization." },
        { q: "Does vertical jump factor into readiness inputs in addition to fatigue + soreness + stress?",
          urgency: "medium", note: "Stress confirmed as 3rd readiness input (from Q5 doc). Vertical jump not mentioned. Jason to confirm if it applies at all." },
        { q: "Is the Ethnicity field optional or required, and does it affect downstream automation logic?",
          urgency: "medium", note: "Must be defined before building intake form and programming engine." },
        { q: "When does Jason plan to leave Superhuman, and how does that affect the 4-week timeline goal?",
          urgency: "medium", note: "Timeline pressure from Session 1.1. Context on Jason's availability affects build sequencing." },
        { q: "Are there additional exercise categories planned beyond the current 34 sheets?",
          urgency: "medium", note: "Affects schema design for the exercise database — need final category count before building." },
        { q: "Is the 18-sheet Automation Matrix the complete set, or are Team Programming sheets planned?",
          urgency: "medium", note: "Engineering needs to know if the data model covers the full scope." },
      ],
    };
