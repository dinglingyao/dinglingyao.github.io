import { motion, MotionConfig } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Flower2,
} from "lucide-react";
import portrait from "../me.jpeg";
import cvFile from "../my_cv.pdf";

const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10";
const Motion = motion;

const DATA = {
  name: "Dingling Yao",
  title: "Machine Learning Researcher",
  tagline: "Measure. Identify. Reason.",
  thesis:
    "I build the foundations for machine learning to answer scientific “what if” questions: measuring the right variables, identifying stable structure, and reasoning about worlds we have never observed.",
  affiliation:
    "Final-year ELLIS PhD candidate at ISTA and MPI-IS · Google PhD Fellow · Visiting researcher at Caltech.",
  credentials: ["Google PhD Fellow", "Caltech Visiting Researcher", "Artist", "Bunny Sitter"],
  interests: [
    "Scientific AI",
    "Representation Learning",
    "Causal Structure",
    "Climate & Physics Modeling",
  ],
  projects: [
    {
      step: "01", stage: "Measure", question: "Are we measuring what matters?",
      title: "From predictions to scientific measurements",
      contribution: "A strong predictor is not automatically a valid scientific instrument. TC-Bench tests whether representations preserve physical distinctions; T-MEX examines whether learned proxies support the causal question we want to ask.",
      venue: "ICML 2026 · NeurIPS 2025", status: "Measurement validity",
      accent: "from-rose-100 via-sky-50 to-white",
      links: [
        { label: "TC-Bench", href: "https://openreview.net/forum?id=wqs3uxBFRo" },
        { label: "T-MEX", href: "https://arxiv.org/abs/2505.17708" },
      ],
    },
    {
      step: "02", stage: "Identify", question: "What structure makes recovery possible?",
      title: "Scientific variables anchored by invariance",
      contribution: "I study how invariance, multiple views, and dynamical structure make scientific variables identifiable. These principles connect learned representations to the underlying physical parameters and mechanisms across changing conditions.",
      venue: "ICLR 2025 · NeurIPS 2024", status: "Identifiability & dynamics",
      accent: "from-emerald-100 via-teal-50 to-white",
      links: [
        { label: "Invariance", href: "https://arxiv.org/abs/2409.02772" },
        { label: "Dynamics", href: "https://arxiv.org/abs/2405.13888" },
      ],
    },
    {
      step: "03", stage: "Reason", question: "What if the world had been different?",
      title: "Beyond observations, with mechanisms",
      contribution: "My ongoing work combines pretrained emulators with partial knowledge of physical mechanisms to answer unseen intervention questions. Climate offers a motivating case: how would the system respond if CO₂ had followed a different path?",
      venue: "Preprint · 2026", status: "Counterfactual reasoning",
      accent: "from-violet-100 via-indigo-50 to-white",
      links: [
        { label: "Preprint", href: "https://arxiv.org/abs/2610.02252" },
        { label: "X post", href: "https://x.com/Dingling_Yao/status/2111089834865332293" },
      ],
    },
  ],
  publications: [
    {
      year: "2026",
      title: "Counterfactual Predictions in Scientific Emulators Without Controlled Experiments",
      authors: [
        "Dingling Yao",
        "Kahaan Gandhi",
        "Valentin Duruisseaux",
        "Boris Bonev",
        "Francesco Locatello",
        "Anima Anandkumar",
      ],
      meta: "Preprint · arXiv:2610.02252",
      links: [
        { label: "Preprint", href: "https://arxiv.org/abs/2610.02252" },
        { label: "X post", href: "https://x.com/Dingling_Yao/status/2111089834865332293" },
      ],
    },
    {
      year: "2025",
      title: "The Third Pillar of Causal Analysis? A Measurement Perspective on Causal Representations",
      authors: ["Dingling Yao", "S. Huang", "R. Cadei", "K. Zhang", "F. Locatello"],
      meta: "NeurIPS 2025 · Equal contribution: D. Yao and S. Huang",
      links: [{ label: "Paper", href: "https://arxiv.org/abs/2505.17708" }],
    },
    {
      year: "2026",
      title: "The Perception–Physics Paradox: Probing Scientific Alignment with TC-Bench",
      authors: [
        "Dingling Yao",
        "Andrea Polesello",
        "Adeel Pervez",
        "Caroline Muller",
        "Francesco Locatello",
      ],
      meta: "ICML 2026",
      links: [
        { label: "Paper", href: "https://openreview.net/forum?id=wqs3uxBFRo" },
      ],
    },
    {
      year: "2025",
      title: "Unifying Causal Representation Learning with the Invariance Principle",
      authors: [
        "Dingling Yao",
        "Dario Rancati",
        "Riccardo Cadei",
        "Marco Fumero",
        "Francesco Locatello",
      ],
      meta: "ICLR 2025",
      links: [
        { label: "Paper", href: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/85381f4549b5ddf1d48e2e287d7d3d15-Abstract-Conference.html" },
        { label: "arXiv", href: "https://arxiv.org/abs/2409.02772" },
      ],
    },
    {
      year: "2025",
      title: "Scalable Mechanistic Neural Networks",
      authors: [
        "Jiale Chen",
        "Dingling Yao",
        "Adeel Pervez",
        "Dan Alistarh",
        "Francesco Locatello",
      ],
      meta: "ICLR 2025",
      links: [
        { label: "Paper", href: "https://iclr.cc/virtual/2025/poster/29818" },
      ],
    },
    {
      year: "2024",
      title: "Multi-view causal representation learning with partial observability",
      authors: [
        "Dingling Yao",
        "Danru Xu",
        "Sébastien Lachapelle",
        "Sara Magliacane",
        "Perouz Taslakian",
        "Georg Martius",
        "Julius von Kügelgen",
        "Francesco Locatello",
      ],
      meta: "ICLR 2024 Spotlight · Top 5%",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2311.04056" },
        { label: "Code", href: "https://github.com/CausalLearningAI/multiview-crl" },
      ],
    },
    {
      year: "2025",
      title: "Propagating Model Uncertainty through Filtering-based Probabilistic Numerical ODE Solvers",
      authors: ["Dingling Yao", "Filip Tronarp", "Nathanael Bosch"],
      meta: "ProbNum 2025 Oral",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2503.04684" },
      ],
    },
    {
      year: "2024",
      title: "A Sparsity Principle for Partially Observable Causal Representation Learning",
      authors: [
        "Danru Xu",
        "Dingling Yao",
        "Sébastien Lachapelle",
        "Perouz Taslakian",
        "Julius von Kügelgen",
        "Francesco Locatello",
        "Sara Magliacane",
      ],
      meta: "ICML 2024",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2403.08335" },
      ],
    },
    {
      year: "2024",
      title: "Marrying Causal Representation Learning with Dynamical Systems for Science",
      authors: ["Dingling Yao", "Caroline Muller", "Francesco Locatello"],
      meta: "NeurIPS 2024",
      links: [
        { label: "Paper", href: "https://proceedings.neurips.cc/paper_files/paper/2024/hash/83eb339ed42297658fa24b5cec939285-Abstract-Conference.html" },
        { label: "arXiv", href: "https://arxiv.org/abs/2405.13888" },
      ],
    },
    {
      year: "2021",
      title: "Active Learning in Gaussian Process State Space Model",
      authors: [
        "Hon Sum Alec Yu",
        "Dingling Yao",
        "Christoph Zimmer",
        "Marc Toussaint",
        "Duy Nguyen-Tuong",
      ],
      meta: "ECML PKDD 2021",
      links: [
        { label: "Paper", href: "https://arxiv.org/abs/2108.00819" },
        { label: "Springer", href: "https://link.springer.com/chapter/10.1007/978-3-030-86523-8_21" },
      ],
    },
  ],
  datasets: [
    {
      title: "Scientific evaluation toolkits",
      description:
        "Benchmarks and analysis tooling for testing whether representations preserve actionable scientific structure.",
      href: "#",
    },
    {
      title: "Open-source research code",
      description:
        "Reusable implementations for causality-aware representation learning, latent forecasting, and model diagnostics.",
      href: "https://github.com/dinglingyao",
    },
  ],
  talks: [
    {
      date: "September 2026",
      title: "Answering climate what-if questions from observations",
      meta: "International Institute for Applied Systems Analysis · Laxenburg, Austria",
    },
    {
      date: "September 2026",
      title: "Reason Beyond Observation: From Scientific Measurements to Counterfactual Worlds",
      meta: "U.S. talk series · UC San Diego, UC Santa Barbara, Broad Institute of MIT and Harvard, Columbia University, and New York University",
    },
    {
      date: "April 2025",
      title: "Causal Representation Learning for Scientific Discovery",
      meta: "Institute of Computing Technology, Chinese Academy of Sciences · Remote",
    },
    {
      date: "March 2024",
      title: "SIAM Conference on Uncertainty Quantification",
      meta: "Invited talk · Trieste, Italy",
      href: "https://www.siam.org/conferences/cm/conference/uq24",
    },
    {
      date: "February 2024",
      title: "Bellairs Workshop on Causality 2024",
      meta: "Invited talk · Barbados",
      href: "https://bclworkshop.github.io/",
    },
    {
      date: "December 2023",
      title: "NeurIPS 2023 Workshop on Causal Representation Learning",
      meta: "Contributed talk · New Orleans, US",
      href: "https://crl-workshop.github.io/",
    },
  ],
  services: [
    {
      period: "2025",
      role: "Lead Organizer",
      title: "CauScien Workshop at NeurIPS 2025",
      description: "Led the inaugural workshop on causality and science, with more than 300 participants.",
      href: "https://sites.google.com/view/causcien/about",
    },
    {
      period: "2025–present",
      role: "Organizer",
      title: "ELLIS × UniReps Speaker Series",
      description: "Co-organizing a series on unifying representations, with more than 100 participants.",
      href: "https://unireps.org/speaker-series/",
    },
    {
      period: "Ongoing",
      role: "Reviewer",
      title: "NeurIPS, ICML, ICLR, KDD AI for Science Track, TMLR, Journal of Computational Physics, and IEEE TNNLS",
    },
  ],
  notes: [
    {
      title: "Scientific alignment",
      body: "Representations should behave like scientific instruments: stable, interpretable, and testable against physical structure.",
    },
    {
      title: "Method as medium",
      body: "Latent-space forecasting is useful when it makes the governing structure of a system more legible rather than more opaque.",
    },
    {
      title: "Research communication",
      body: "Papers, code, and datasets should form a coherent narrative so collaborators can understand not just results, but the research lens behind them.",
    },
  ],
  email: "yaodingling806@gmail.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/dinglingyao", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dingling-yao/",
      icon: Linkedin,
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=vOJUvb0AAAAJ&hl=en",
      icon: BookOpen,
    },
    { label: "CV", href: cvFile, icon: FileText },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}

function Nav() {
  const items = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Publications", "#publications"],
    ["Talks", "#talks"],
    ["Mentoring", "#mentoring"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(248,246,242,0.82)] backdrop-blur-xl">
      <div className={`${CONTAINER} flex items-center justify-between py-4`}>
        <a
          href="#top"
          className="group text-sm font-semibold uppercase tracking-[0.24em] text-stone-900"
        >
          <span className="inline-flex items-center gap-2">
            <Flower2 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12" />
            {DATA.name}
          </span>
        </a>
        <nav aria-label="Main navigation" className="site-nav flex items-center gap-6 text-sm text-stone-600">
          {items.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-stone-950">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pond-hero relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.55),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(253,230,138,0.42),_transparent_30%),linear-gradient(180deg,_#f8f6f2_0%,_#f6f2ea_100%)]" />
      <div className={`${CONTAINER} grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]`}>
        <Motion.div
          initial={false}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <Motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.34em] text-stone-500"
          >
            {DATA.title}
          </Motion.p>
          <Motion.h1
            variants={fadeUp}
            className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl"
          >
            Counterfactual reasoning for science.
          </Motion.h1>
          <nav
            aria-label="Research profiles and CV"
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            {["Google Scholar", "LinkedIn", "CV", "GitHub"].map((label) => {
              const item = DATA.socialLinks.find((link) => link.label === label);
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300/80 bg-white/75 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm backdrop-blur-sm transition hover:border-stone-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-800"
                >
                  <Icon aria-hidden="true" className="h-4 w-4 text-stone-600" />
                  {item.label}
                  {item.label === "CV" && <span className="text-xs text-stone-500">PDF</span>}
                </a>
              );
            })}
          </nav>
          <Motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-stone-700"
          >
            {DATA.tagline}
          </Motion.p>
          <Motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-base leading-7 text-stone-600"
          >
            {DATA.thesis}
          </Motion.p>
          <Motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {DATA.credentials.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </Motion.div>
          <Motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Explore research
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
            >
              Get in touch
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="portrait-garden relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-200/70 via-amber-100/50 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_80px_rgba(64,47,20,0.14)] backdrop-blur">
              <img
                src={portrait}
                alt={`${DATA.name} portrait`}
                className="portrait h-[24rem] w-[20rem] rounded-[1.4rem] object-cover sm:h-[28rem] sm:w-[23rem]"
              />
            </div>
          </div>
        </Motion.div>
      </div>

      <div className={`${CONTAINER} mt-10`}>
        <div className="research-path" aria-label="Three steps to scientific reasoning">
          {DATA.projects.map((project) => (
            <a key={project.step} href={`#step-${project.step}`} className="path-step">
              <span className="path-number">{project.step}</span>
              <span><strong>{project.stage}</strong><span>{project.question}</span></span>
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-800"
        >
          Scroll for more
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="About"
          title="Reasoning beyond observations."
          description={DATA.affiliation}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-stone-700">
              Science asks about worlds we never observed. What would the climate
              look like without human-caused warming? Answering such questions
              requires representations that preserve scientific variables and
              mechanisms that remain meaningful under intervention.
            </p>
            <p className="mt-5 text-base leading-7 text-stone-600">
              My research connects measurement validity, causal identifiability, and
              physical mechanisms. Together, they form a path from learning patterns
              in observations to reasoning about how a system would respond to change.
            </p>
          </Motion.div>

          <Motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-stone-100 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Research interests
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {DATA.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Motion.div>
        </div>
        <section aria-labelledby="awards-heading" className="mt-8 overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Recognition</p>
          <h3 id="awards-heading" className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">Awards & fellowships</h3>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-3xl bg-stone-950 p-6 text-white sm:p-8">
              <p className="text-sm text-amber-200">2025–2027</p>
              <h4 className="mt-4 text-2xl font-semibold">Google PhD Fellowship</h4>
              <p className="mt-3 text-base leading-7 text-stone-300">Machine Learning and ML Foundations</p>
            </div>
            <ul className="divide-y divide-stone-200">
              {[
                ["2026", "EuroHPC Development Access Award", "Competitive Europe-wide GPU/HPC compute allocation"],
                ["2024", "ICLR Spotlight · Top 5%", "First-author paper"],
                ["2022–2023", "Amazon–MPI Fellowship", "Amazon–MPI Science Hub"],
              ].map(([year, title, detail]) => (
                <li key={title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-xs font-medium tracking-wide text-stone-500">{year}</p>
                  <h4 className="mt-1 text-lg font-semibold text-stone-900">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

function ResearchCard({ project }) {
  return (
    <Motion.article
      id={`step-${project.step}`}
      initial={false}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-[0_24px_60px_rgba(68,53,24,0.12)]"
    >
      <div className={`stage-header bg-gradient-to-br ${project.accent} p-6`}>
        <div className="flex items-center justify-between">
          <span className="stage-number">{project.step}</span>
          <Flower2 aria-hidden="true" className="h-7 w-7 opacity-50" />
        </div>
        <h3 className="stage-title">{project.stage}</h3>
        <p className="mt-2 text-sm text-stone-700">{project.question}</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-stone-950">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-stone-600">
          {project.contribution}
        </p>
        <p className="mt-4 text-xs font-medium tracking-wide text-stone-500">{project.venue}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </Motion.article>
  );
}

function Research() {
  return (
    <section id="research" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Research"
          title="Measure. Identify. Reason."
          description="Three connected steps toward counterfactual reasoning for science—from trustworthy measurements to unseen worlds."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {DATA.projects.map((project) => (
            <ResearchCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  const publicationsByYear = DATA.publications.reduce((groups, publication) => {
    const bucket = groups[publication.year] || [];
    bucket.push(publication);
    groups[publication.year] = bucket;
    return groups;
  }, {});

  const years = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="publications" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Publications"
          title="Publications."
          description="Conference papers and research publications across causal representation learning, scientific machine learning, and probabilistic numerics."
        />
        <div className="mt-10 space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="mb-4 flex items-center gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-950">
                  {year}
                </h3>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
              <div className="space-y-4">
                {publicationsByYear[year].map((publication) => (
                  <Motion.div
                    key={publication.title}
                    initial={false}
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="rounded-[1.6rem] border border-stone-200 bg-white px-6 py-5 shadow-sm sm:flex sm:items-center sm:justify-between"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-stone-950">
                        {publication.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {publication.authors.map((author, index) => (
                          <span key={author}>
                            {index > 0 ? ", " : ""}
                            <span
                              className={
                                author === DATA.name
                                  ? "font-semibold text-stone-950"
                                  : undefined
                              }
                            >
                              {author}
                            </span>
                          </span>
                        ))}
                      </p>
                      <p className="mt-1 text-sm text-stone-500">{publication.meta}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 sm:mt-0 sm:justify-end">
                      {publication.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-500 hover:text-stone-950"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Datasets & Open Source"
          title="Datasets, code, and research tooling."
          description="Open artifacts that make the work easier to inspect, reproduce, and build on."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {DATA.datasets.map((item) => (
            <Motion.a
              key={item.title}
              href={item.href}
              initial={false}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-white to-stone-50 p-7 shadow-sm transition hover:border-stone-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-stone-400" />
              </div>
            </Motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Talks() {
  return (
    <section id="talks" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Talks"
          title="Invited and contributed presentations."
          description="Selected talks and workshop presentations across causality, uncertainty, and scientific AI."
        />
        <div className="relative mt-10 pl-6 sm:pl-8">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-stone-200" />
          <div className="space-y-6">
            {DATA.talks.map((talk) => (
              <Motion.article
                key={`${talk.date}-${talk.title}`}
                initial={false}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="relative block rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-300"
              >
                <span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full border-4 border-[#f8f6f2] bg-stone-900" />
                <p className="text-sm font-medium text-stone-500">{talk.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-stone-950">
                  {talk.href ? <a href={talk.href} className="hover:underline">{talk.title}</a> : talk.title}
                </h3>
                <p className="mt-2 text-base text-stone-600">{talk.meta}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Mentoring() {
  const people = [
    {
      name: "Jiale Chen",
      affiliation: "ISTA · Co-supervision",
      href: "https://research-explorer.ista.ac.at/person/4d0a9064-1ff6-11ee-9fa6-ec046c604785",
      linkLabel: "ISTA profile",
      project: "Scalable Mechanistic Neural Networks",
      detail: "ICLR 2025",
      paper: "https://arxiv.org/abs/2410.06074",
    },
    {
      name: "Kahaan Gandhi",
      affiliation: "Caltech · Mentoring",
      href: "https://kahaan.com/",
      linkLabel: "Personal website",
      project: "Counterfactual Predictions in Scientific Emulators Without Controlled Experiments",
      detail: "Preprint · 2026",
      paper: "https://arxiv.org/abs/2610.02252",
    },
  ];
  return (
    <section id="mentoring" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading eyebrow="Teaching & mentoring" title="People & shared research." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {people.map((person) => (
            <article key={person.name} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">{person.affiliation}</p>
              <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                <a href={person.href} className="inline-flex items-center gap-2 rounded hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                  {person.name}<ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </h3>
              <a href={person.href} className="mt-2 inline-block text-sm text-stone-600 underline underline-offset-4">{person.linkLabel}</a>
              <div className="mt-6 border-t border-stone-200 pt-5">
                <p className="text-xs font-medium text-stone-500">{person.detail}</p>
                <a href={person.paper} className="mt-2 inline-block text-base font-medium leading-7 text-stone-800 hover:underline">{person.project}</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-[2rem] border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-stone-950">Teaching assistant</h3>
          <ul className="mt-4 grid gap-4 text-sm leading-7 text-stone-600 sm:grid-cols-2">
            <li><strong className="block text-stone-800">Applied Deep Learning</strong>Institute of Science and Technology Austria</li>
            <li><strong className="block text-stone-800">Undergraduate mathematics</strong>University of Tübingen</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Academic Service"
          title="Organizing and community-building."
          description="Workshop organizing, speaker series coordination, and reviewing across the ML research community."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DATA.services.map((item) => {
            const content = (
              <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {item.period} · {item.role}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-stone-950">
                  {item.title}
                </h3>
                {item.description && <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>}
              </div>
            );

            if (!item.href) {
              return (
                <Motion.div
                  key={item.title}
                  initial={false}
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                >
                  {content}
                </Motion.div>
              );
            }

            return (
              <Motion.a
                key={item.title}
                href={item.href}
                initial={false}
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="block"
              >
                {content}
              </Motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <SectionHeading
          eyebrow="Notes"
          title="A short statement of method."
          description="A few principles that shape how I think about representation learning for scientific use."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {DATA.notes.map((note) => (
            <Motion.article
              key={note.title}
              initial={false}
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                {note.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-stone-700">{note.body}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="grid gap-6 rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-stone-100 shadow-[0_30px_80px_rgba(34,26,10,0.18)] sm:p-10">
          <div>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let’s talk about scientific machine learning.
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-300">
                For collaborations, talks, workshop ideas, or research conversations, email is the fastest path.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-stone-100">
                <Mail className="h-4 w-4" />
                {DATA.email}
              </span>
              {DATA.socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-white/35 hover:bg-white/5"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pb-10 pt-4 text-center text-sm text-stone-500">
      © {new Date().getFullYear()} {DATA.name}
    </footer>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="site-shell min-h-screen selection:bg-stone-900 selection:text-white">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Talks />
        <Mentoring />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}
