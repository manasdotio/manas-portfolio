import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PORTFOLIO_DATA, Project } from "../../../data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Manas Singh",
    };
  }

  return {
    title: `${project.name} — Technical Case Study | Manas Singh`,
    description: project.caseStudy.tagline,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.caseStudy.tagline,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom pagination
  const enabledProjects = PORTFOLIO_DATA.projects.filter((p) => p.enabled);
  const currentIndex = enabledProjects.findIndex((p) => p.slug === slug);
  const nextProject = enabledProjects[(currentIndex + 1) % enabledProjects.length];

  return (
    <div className="min-h-screen w-full bg-[#07080b] text-[#e5e7eb] selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Bar */}
      <header className="sticky top-0 z-50 border-b border-[#202534] bg-[#07080b]/85 px-6 py-3.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#9ca3af] hover:text-white transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to selected work</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-[#272d3e] bg-[#12151e] px-3 py-1 text-xs font-medium text-[#d1d5db] hover:border-[#3c455d] hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
        {/* Project Header */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded bg-[#161a26] border border-[#2b334a] px-2.5 py-0.5 font-mono text-xs font-semibold text-[#60a5fa]">
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-6xl font-medium tracking-tight text-white mb-4">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#9ca3af] font-light leading-relaxed max-w-2xl">
            {project.caseStudy.tagline}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-[#23293a] bg-[#11141e] px-3 py-1 font-mono text-xs text-[#9ca3af]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Media Preview */}
        <div className="mb-16 overflow-hidden rounded-xl border border-[#252b3d] bg-[#10131d] shadow-2xl shadow-black/80">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="w-full h-auto object-cover max-h-[540px]"
          />
        </div>

        {/* Structured Case Study Sections */}
        <div className="space-y-16 text-sm sm:text-base leading-relaxed text-[#a3a3a3]">
          {/* Section 1: Overview */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400">01</span>
              <h2 className="font-instrument text-2xl sm:text-3xl text-white font-medium">
                Overview &amp; Context
              </h2>
            </div>
            <p className="text-[#a3a3a3] leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </section>

          {/* Section 2: The Challenge & The Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-[#202535] bg-[#0c0f16] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">⚠️</span>
                <h3 className="font-semibold text-white text-base">The Technical Challenge</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-sm">💡</span>
                <h3 className="font-semibold text-white text-base">The Engineered Solution</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Section 3: Architecture & Key Decisions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400">02</span>
              <h2 className="font-instrument text-2xl sm:text-3xl text-white font-medium">
                System Architecture &amp; Key Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.caseStudy.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#1e2332] bg-[#0d1017] p-5 space-y-2 hover:border-[#333d54] transition-colors"
                >
                  <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                    Architecture 0{i + 1}
                  </span>
                  <h4 className="font-semibold text-white text-sm">{arch.title}</h4>
                  <p className="text-xs text-[#888888] leading-relaxed">{arch.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Key Features Breakdown */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400">03</span>
              <h2 className="font-instrument text-2xl sm:text-3xl text-white font-medium">
                Key Features Shipped
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.caseStudy.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-md border border-[#1a1f2c] bg-[#0b0e14] p-3.5 text-xs text-[#d1d5db]"
                >
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: What I Learned */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400">04</span>
              <h2 className="font-instrument text-2xl sm:text-3xl text-white font-medium">
                What I Learned
              </h2>
            </div>

            <div className="rounded-lg border border-[#1e2434] bg-[#0b0d13] p-6 space-y-3">
              <ul className="space-y-2.5">
                {project.caseStudy.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9ca3af]">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Bottom Pagination / Next Project */}
        <div className="mt-20 pt-10 border-t border-[#1f2434] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#projects"
            className="text-xs font-mono text-[#9ca3af] hover:text-white transition-colors"
          >
            ← Back to all projects
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider">
                Next Project
              </span>
              <span className="font-instrument text-xl text-white group-hover:text-blue-400 transition-colors">
                {nextProject.name} →
              </span>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
