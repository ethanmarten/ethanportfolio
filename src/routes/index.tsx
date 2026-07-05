import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/972594820775";
const TELEGRAM = "https://t.me/ehabalhayekm";
const EMAIL = "mailto:ehabalhayekm@gmail.com";
const GITHUB = "https://github.com/ethanmarten/";

type Category = "All" | "Web Design" | "AI & Automation" | "Tech Support & Systems";

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  link: string;
  description: string;
  badges: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Vertex Estates",
    category: "Web Design",
    link: "https://vertex-elite.lovable.app",
    description:
      "An ultra-luxury digital brand and corporate real estate platform built with premium aesthetics.",
    badges: ["React", "Tailwind", "Premium UI"],
  },
  {
    title: "Chronos Elite",
    category: "Web Design",
    link: "https://chronos-elite.lovable.app",
    description:
      "A high-end editorial horology e-commerce experience featuring dynamic cart drawer architectures.",
    badges: ["E-Commerce", "UX Design", "React"],
  },
  {
    title: "Effortless Elegance",
    category: "Web Design",
    link: "https://effortless-elegance.framer.ai",
    description:
      "An avant-garde minimalist editorial branding site focusing on quiet luxury and timeless whitespace.",
    badges: ["Framer", "Minimalism", "Branding"],
  },
  {
    title: "AI Automated Content Agent",
    category: "AI & Automation",
    link: "#",
    description:
      "Custom Large Language Model (LLM) integration for production automated clipping pipelines and social curation.",
    badges: ["Python", "LLM", "Automation"],
  },
  {
    title: "Unity 6 AI Navigation System",
    category: "AI & Automation",
    link: "#",
    description:
      "Configuring advanced workstation nodes using NVIDIA CUDA for seamless pathfinding and real-time AI simulations.",
    badges: ["Unity 6", "CUDA", "AI Engineering"],
  },
  {
    title: "High-Performance Systems Tuning",
    category: "Tech Support & Systems",
    link: "#",
    description:
      "System health diagnostic matrices, advanced hardware thermal optimization, and high-security enterprise troubleshooting.",
    badges: ["Diagnostics", "Hardware", "Security"],
  },
];

const CATEGORIES: Category[] = ["All", "Web Design", "AI & Automation", "Tech Support & Systems"];

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
          rel="noreferrer"
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
          <span className="text-muted-foreground">/ Open for Contracts</span>
        </div>

        <h1 className="mt-8 max-w-5xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          Engineering{" "}
          <span className="text-gradient">Intelligent Systems</span>
          <br className="hidden md:block" /> & Crafting{" "}
          <span className="italic font-light text-muted-foreground">Digital Experiences.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          AI Engineering Student & Web Developer with <span className="text-foreground font-semibold">3+ years</span> of
          professional technical support experience. Bridging the gap between complex algorithms and
          pixel-perfect user interfaces.
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
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-emerald-accent/60 hover:text-emerald-accent"
          >
            Start a Conversation
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
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-medium transition-all",
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const inactive = project.link === "#";
  const Wrapper: React.ElementType = inactive ? "div" : "a";
  const wrapperProps = inactive
    ? {}
    : { href: project.link, target: "_blank", rel: "noreferrer" };

  return (
    <Wrapper
      {...wrapperProps}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all duration-500 animate-fade-in",
        inactive
          ? "opacity-90"
          : "hover:-translate-y-1 hover:border-emerald-accent/50 hover:bg-surface-2",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              inactive ? "bg-muted-foreground" : "bg-emerald-accent"
            }`}
          />
          {project.category}
        </div>
        {inactive ? (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Case Study
          </span>
        ) : (
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-accent" />
        )}
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
      </div>
    </Wrapper>
  );
}

/* ---------- Timeline ---------- */

function Timeline() {
  const items = [
    {
      icon: GraduationCap,
      period: "Present",
      title: "B.Sc. Artificial Intelligence Engineering",
      org: "Islamic University of Gaza",
      body: "Deep focus on Large Language Models, pathfinding algorithms, and CUDA-accelerated compute for real-time AI simulation.",
      tag: "Academic",
    },
    {
      icon: Briefcase,
      period: "3+ Years",
      title: "Technical Support Specialist",
      org: "Enterprise & SMB Infrastructure",
      body: "Infrastructure management, hardware diagnosis, and operating system kernel troubleshooting across mission-critical deployments.",
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
              rel="noreferrer"
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
          <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href={TELEGRAM} target="_blank" rel="noreferrer" aria-label="Telegram" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <Send className="h-5 w-5" />
          </a>
          <a href={EMAIL} aria-label="Email" className="text-muted-foreground transition-colors hover:text-emerald-accent">
            <Mail className="h-5 w-5" />
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-emerald-accent">
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
