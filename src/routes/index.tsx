import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
  MessageCircle,
  Github,
  Cpu,
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Terminal,
  Layers,
  ShieldCheck,
  X,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/972594820775";
const TELEGRAM = "https://t.me/ehabalhayekm";
const EMAIL = "mailto:ehabalhayekm@gmail.com";
const GITHUB = "https://github.com/ethanmarten/";

type Category = "All" | "Web Development" | "AI & Automation" | "Tech Support";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  link: string;
  description: string;
  badges: string[];
  details?: {
    overview: string;
    architecture: string[];
    stats: { label: string; value: string }[];
    insights: string[];
  };
};

const PROJECTS: Project[] = [
  {
    title: "Vertex Estates",
    category: "Web Development",
    link: "https://vertex-elite.lovable.app",
    description:
      "Luxury real estate platform with an ultra-premium brand system and corporate-grade UX.",
    badges: ["React", "Tailwind", "Premium UI"],
  },
  {
    title: "Chronos Elite",
    category: "Web Development",
    link: "https://chronos-elite.lovable.app",
    description:
      "High-end horology e-commerce store featuring dynamic cart drawer architecture and editorial storytelling.",
    badges: ["E-Commerce", "UX Design", "React"],
  },
  {
    title: "Effortless Elegance",
    category: "Web Development",
    link: "https://effortless-elegance.framer.ai",
    description:
      "Minimalist editorial branding site focused on quiet luxury, whitespace, and typographic craft.",
    badges: ["Framer", "Minimalism", "Branding"],
  },
  {
    title: "AI Automated Content Agent",
    category: "AI & Automation",
    link: "#",
    description:
      "Automated video clipping and social curation pipeline powered by custom LLM orchestration.",
    badges: ["Python", "LLM", "Automation"],
    details: {
      overview:
        "A production pipeline that ingests long-form video, uses an LLM to identify high-signal moments, auto-clips them, and schedules distribution across social channels.",
      architecture: [
        "Ingestion worker → Whisper transcription → semantic chunking",
        "LLM scoring agent ranks clip candidates against virality heuristics",
        "FFmpeg render farm produces vertical / horizontal variants",
        "Scheduler pushes to TikTok, Shorts, and Reels via provider APIs",
      ],
      stats: [
        { label: "Avg. clips / video", value: "12" },
        { label: "Manual editing removed", value: "94%" },
        { label: "Cost per clip", value: "< $0.08" },
      ],
      insights: [
        "Prompt-chained scoring beat single-shot classification by 38%.",
        "Caching transcripts + embeddings cut LLM spend by ~60%.",
      ],
    },
  },
  {
    title: "Unity 6 AI Navigation Node",
    category: "AI & Automation",
    link: "#",
    description:
      "Workstation node optimization for real-time pathfinding and AI simulation using NVIDIA CUDA.",
    badges: ["Unity 6", "CUDA", "AI Engineering"],
    details: {
      overview:
        "A dedicated workstation node tuned for Unity 6's AI navigation stack — offloading pathfinding and behavioural simulation to CUDA cores for real-time responsiveness at scale.",
      architecture: [
        "NVIDIA CUDA-accelerated NavMesh baking pipeline",
        "Parallel A* + flow-field pathfinding across thousands of agents",
        "Deterministic tick scheduler for reproducible AI behavior",
        "Telemetry hooks streaming frame-time and GPU utilization",
      ],
      stats: [
        { label: "Concurrent agents", value: "5,000+" },
        { label: "Avg. frame time", value: "6.2 ms" },
        { label: "GPU utilization", value: "82%" },
      ],
      insights: [
        "Batching path requests per frame eliminated 70% of kernel launches.",
        "Thermal tuning kept sustained boost within 3°C of target.",
      ],
    },
  },
  {
    title: "High-Performance Workstation Tuning",
    category: "Tech Support",
    link: "#",
    description:
      "3+ years optimizing system health, thermals, and enterprise hardware across mission-critical workstations.",
    badges: ["Diagnostics", "Hardware", "Security"],
    details: {
      overview:
        "Long-term engagements tuning enterprise workstations and small-fleet infrastructure — from thermal engineering and kernel-level diagnostics to secure remote access playbooks.",
      architecture: [
        "Structured diagnostic matrix (POST → kernel → user-space)",
        "Undervolt + fan curve tuning for sustained boost stability",
        "Driver + firmware baseline pinned per workstation profile",
        "Encrypted remote support pipeline with audit logging",
      ],
      stats: [
        { label: "Workstations serviced", value: "80+" },
        { label: "Avg. temp reduction", value: "-14°C" },
        { label: "First-call resolution", value: "91%" },
      ],
      insights: [
        "Most 'GPU' failures were PSU rail sag under transient load.",
        "A pinned driver baseline cut recurring tickets by nearly half.",
      ],
    },
  },
];

const CATEGORIES: Category[] = ["All", "Web Development", "AI & Automation", "Tech Support"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-accent/30 selection:text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-emerald-accent/40 bg-emerald-accent/10 font-mono text-sm font-bold text-emerald-accent">
            E
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.14em] sm:inline">
            ETHAN <span className="text-muted-foreground">/</span> EHAB ALHAYEK
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-accent/50 bg-emerald-accent/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-accent transition-all hover:bg-emerald-accent hover:text-primary-foreground"
        >
          Inquire Now
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/40 bg-emerald-accent/5 px-3 py-1.5 text-xs font-medium">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-accent" />
          <span className="font-mono tracking-wide text-emerald-accent">SYSTEM ONLINE</span>
          <span className="text-muted-foreground">/ Available for Custom Tech & Web Contracts</span>
        </div>

        <h1 className="mt-8 max-w-5xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Engineering{" "}
          <span className="text-gradient">Intelligent Systems</span>
          <br className="hidden md:block" /> & Crafting{" "}
          <span className="italic font-light text-muted-foreground">Digital Experiences.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          AI Engineering Student at the <span className="text-foreground font-semibold">Islamic University of Gaza</span> &
          Web Developer with <span className="text-foreground font-semibold">3+ years</span> of professional technical
          support experience. Bridging the gap between complex algorithms and pixel-perfect user interfaces.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-emerald"
          >
            View Selected Work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://ehabmohammed.carrd.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-emerald-accent/60 hover:text-emerald-accent"
          >
            Start a Conversation
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <a
            href={EMAIL}
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-emerald-accent/60 hover:text-emerald-accent"
          >
            <Mail className="h-3.5 w-3.5" />
            ehabalhayekm@gmail.com
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-emerald-accent/60 hover:text-emerald-accent"
          >
            <Phone className="h-3.5 w-3.5" />
            +972 59-482-0775
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
          {[
            { k: "3+", v: "Years Support Experience" },
            { k: "6", v: "Shipped Projects" },
            { k: "AI", v: "Engineering Focus" },
            { k: "24/7", v: "Response Window" },
          ].map((s) => (
            <div key={s.v} className="bg-background px-6 py-6">
              <div className="font-mono text-3xl font-bold text-emerald-accent">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
        <SectionLabel index="01" label="About" />
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            A hybrid operator — half systems engineer, half interface designer.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I'm Ehab (Ethan) Alhayek — an AI Engineering student at the Islamic University of Gaza
            with a technical support background rooted in hardware, kernels, and infrastructure.
            I build production-grade web experiences and LLM-powered automation for teams that
            demand both aesthetic precision and engineering rigor.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Cpu, label: "AI & LLMs" },
              { icon: Code2, label: "Web Craft" },
              { icon: ShieldCheck, label: "Systems" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl border border-hairline bg-surface p-4 transition-colors hover:border-emerald-accent/40"
              >
                <Icon className="h-5 w-5 text-emerald-accent" />
                <div className="mt-3 text-sm font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="projects" className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02" label="Selected Work" inline />
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Projects across design, intelligence, and infrastructure.
            </h2>
          </div>
          <div className="-mx-6 md:mx-0">
            <div
              className="flex gap-2 overflow-x-auto px-6 pb-1 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Project categories"
            >
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  role="tab"
                  aria-selected={active === c}
                  className={[
                    "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-all",
                    active === c
                      ? "border-emerald-accent bg-emerald-accent text-primary-foreground"
                      : "border-hairline bg-surface text-muted-foreground hover:border-emerald-accent/50 hover:text-foreground",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setOpenProject(p)} />
          ))}
        </div>
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const isCaseStudy = project.link === "#";
  const commonClass =
    "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-6 text-left transition-all duration-500 animate-fade-in hover:-translate-y-1 hover:border-emerald-accent/50 hover:bg-surface-2";

  const content = (
    <>
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isCaseStudy ? "bg-cyan-accent" : "bg-emerald-accent"
            }`}
          />
          {project.category}
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-accent" />
      </div>

      <h3 className="mt-8 text-2xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
        {project.badges.map((b) => (
          <span
            key={b}
            className="rounded-md border border-hairline bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {b}
          </span>
        ))}
        {isCaseStudy && (
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-emerald-accent">
            View Case Study →
          </span>
        )}
      </div>
    </>
  );

  if (isCaseStudy) {
    return (
      <button type="button" onClick={onOpen} className={commonClass}>
        {content}
      </button>
    );
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClass}
    >
      {content}
    </a>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project || !project.details) return null;
  const d = project.details;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-background/70 p-0 backdrop-blur-md sm:items-center sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl border border-hairline bg-surface shadow-2xl sm:rounded-2xl"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-accent/15 blur-3xl" />
        <div className="relative max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/40 bg-emerald-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                {project.category} · Case Study
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline bg-background/60 text-muted-foreground transition-colors hover:border-emerald-accent/60 hover:text-emerald-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {d.overview}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
            {d.stats.map((s) => (
              <div key={s.label} className="bg-background/60 p-4">
                <div className="font-mono text-lg font-bold text-emerald-accent sm:text-xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent">
              Architecture
            </div>
            <ul className="mt-3 space-y-2">
              {d.architecture.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-accent">
              Source Insights
            </div>
            <ul className="mt-3 space-y-2">
              {d.insights.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-hairline pt-6">
            {project.badges.map((b) => (
              <span
                key={b}
                className="rounded-md border border-hairline bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Timeline ---------- */

function Timeline() {
  const items = [
    {
      icon: GraduationCap,
      period: "2025 — Present",
      title: "B.Sc. Artificial Intelligence Engineering",
      org: "Islamic University of Gaza",
      body: "Focus on LLM integration, autonomous agents, system architecture, and CUDA-accelerated compute for real-time AI simulation.",
      tag: "Academic",
    },
    {
      icon: Briefcase,
      period: "3+ Years",
      title: "Technical Support Specialist",
      org: "Enterprise & SMB Infrastructure",
      body: "Hardware diagnostics, CUDA workstation configurations, and infrastructure troubleshooting across mission-critical deployments.",
      tag: "Professional",
    },
  ];
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel index="03" label="Trajectory" inline />
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          Education & professional experience.
        </h2>

        <div className="relative mt-16 space-y-10 pl-6 md:pl-10">
          <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-emerald-accent via-hairline to-transparent md:left-4" />
          {items.map((it) => (
            <div key={it.title} className="relative">
              <div className="absolute -left-[26px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-accent bg-background md:-left-[34px]" />
              <div className="grid gap-6 rounded-2xl border border-hairline bg-surface p-6 md:grid-cols-[auto_1fr] md:p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <it.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full border border-emerald-accent/40 px-2 py-0.5 text-emerald-accent">
                      {it.tag}
                    </span>
                    <span>{it.period}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">{it.title}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{it.org}</div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {it.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  const groups = [
    {
      icon: Terminal,
      title: "Languages",
      items: ["Python", "SQL", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      icon: Layers,
      title: "Architecture",
      items: ["Framer", "Lovable.app", "Streamlit", "UI/UX Design", "Bespoke Branding"],
    },
    {
      icon: Cpu,
      title: "Systems",
      items: ["NVIDIA CUDA", "Unity 6", "Hardware Diagnostics", "Infrastructure Tuning"],
    },
  ];
  return (
    <section id="skills" className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel index="04" label="Capability Matrix" inline />
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
          The stack behind the work.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all hover:border-emerald-accent/40"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-accent/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-accent/10 text-emerald-accent">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{g.title}</h3>
              </div>
              <ul className="relative mt-6 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center justify-between border-b border-hairline py-2 text-sm last:border-b-0"
                  >
                    <span className="text-foreground">{it}</span>
                    <Sparkles className="h-3.5 w-3.5 text-emerald-accent/60" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+972 594 820 775",
      href: WHATSAPP,
      cta: "Chat",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "+970 594 820 775",
      href: TELEGRAM,
      cta: "Message",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ehabalhayekm@gmail.com",
      href: EMAIL,
      cta: "Compose",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@ethanmarten",
      href: GITHUB,
      cta: "Follow",
    },
  ];
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-accent/60 to-transparent" />
        <SectionLabel index="05" label="Contact" inline />
        <h2 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
          Let's craft something{" "}
          <span className="text-gradient">unparalleled.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Available for freelance engagements, technical consulting, and long-term collaboration on
          intelligent products.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all hover:-translate-y-1 hover:border-emerald-accent/60 hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-accent/10 text-emerald-accent transition-colors group-hover:bg-emerald-accent group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-accent" />
              </div>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 truncate text-base font-semibold text-foreground">{c.value}</div>
              <div className="mt-4 text-xs text-emerald-accent">{c.cta} →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-emerald-accent/40 bg-emerald-accent/10 font-mono text-sm font-bold text-emerald-accent">
            E
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.14em]">
              ETHAN <span className="text-muted-foreground">/</span> EHAB ALHAYEK
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Engineered with intent.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <Send className="h-5 w-5" />
          </a>
          <a href={EMAIL} aria-label="Email" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- shared ---------- */

function SectionLabel({
  index,
  label,
  inline = false,
}: {
  index: string;
  label: string;
  inline?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground ${
        inline ? "" : "sticky top-24"
      }`}
    >
      <span className="text-emerald-accent">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      <span>{label}</span>
    </div>
  );
}
