"use client";

import { IconGitHub, IconLink, IconStar } from "@/assets";
import { Description } from "@/components/typography";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";

const projects = [
  {
    id: 1,
    title: "Elements",
    subtitle: "Full-stack shadcn/ui components",
    stars: 465,
    description:
      "Full-stack shadcn/ui components. Production-ready building blocks for modern web apps.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/elements",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 2,
    title: "Auth CN",
    subtitle: "Full-stack Components for Better Auth",
    stars: 138,
    description:
      "Full-stack components for Better Auth using shadcn/registry. Reached 100+ GitHub stars and 600+ likes on X within three days of launch.",
    links: [
      {
        label: "Live",
        href: "https://auth.uprizing.me/",
        icon: "link" as const,
      },
      {
        label: "GitHub",
        href: "https://github.com/MrUprizing/auth-cn",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 3,
    title: "Zed MCP · shadcn",
    subtitle: "Shadcn UI MCP Extension for Zed",
    stars: 18,
    description:
      "MCP extension for Zed editor that brings shadcn/ui component search and docs directly into your editor. 15k+ downloads.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MrUprizing/zed-mcp-server-shadcn",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 4,
    title: "Zed MCP · Next.js",
    subtitle: "NextJS MCP Extension for Zed",
    stars: 15,
    description:
      "MCP extension for Zed editor that brings Next.js docs and code actions into your workflow. 15k+ downloads.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MrUprizing/zed-mcp-server-nextjs",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 5,
    title: "Pawboard",
    subtitle: "Project management board",
    stars: 26,
    description:
      "A project management board with a clean and minimal interface.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/pawboard",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 6,
    title: "She Ships",
    subtitle: "8M hackathon — women in tech",
    stars: 15,
    description:
      "Main web platform for She Ships, a hackathon held on March 8th exclusively for women in tech. Built to celebrate and showcase their projects and contributions.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/she.ships",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 7,
    title: "exec0",
    subtitle: "Code Execution API",
    stars: 8,
    description:
      "Code execution API for running untrusted code in isolated environments. Fast, secure and scalable.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/exec0",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 8,
    title: "opensandbox",
    subtitle: "Self-hosted Docker Sandbox API",
    stars: 3,
    description:
      "A lightweight, self-hosted API for creating and managing isolated Docker containers on demand.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MrUprizing/opensandbox",
        icon: "github" as const,
      },
    ],
  },
  {
    id: 9,
    title: "perks",
    subtitle: "Achievements app for She Ships",
    stars: 5,
    description:
      "Achievement and rewards system for She Ships. Tracks milestones and gamifies participant contributions across the hackathon.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/perks",
        icon: "github" as const,
      },
    ],
  },
];

const contributions = [
  {
    title: "shadcn/ui",
    stars: "109k",
    href: "https://github.com/shadcn-ui/ui",
    subtitle: "Fixed navigation menu docs",
  },
  {
    title: "shadcn/ui",
    stars: "109k",
    href: "https://github.com/shadcn-ui/ui",
    subtitle: "Fixed broken link in registry docs",
  },
  {
    title: "Better Auth",
    stars: "27k",
    href: "https://github.com/better-auth/better-auth",
    subtitle: "Fixed missing import headers in docs",
  },
  {
    title: "Better Auth",
    stars: "27k",
    href: "https://github.com/better-auth/better-auth",
    subtitle: "Fixed wrong env variable name in example",
  },
  {
    title: "Vercel AI SDK",
    stars: "22k",
    href: "https://github.com/vercel/ai",
    subtitle: "Fixed incorrect tool parameter in docs",
  },
  {
    title: "SST",
    stars: "25k",
    href: "https://github.com/anomalyco/sst",
    subtitle: "Fixed example project naming",
  },
  {
    title: "useSend",
    stars: "4k",
    href: "https://github.com/usesend/useSend",
    subtitle: "Fixed local dev link in README",
  },
  {
    title: "IntentUI",
    stars: "1.9k",
    href: "https://github.com/intentui/intentui",
    subtitle: "Improved color swatch types",
  },
  {
    title: "Better Auth UI",
    stars: "1.5k",
    href: "https://github.com/better-auth-ui/better-auth-ui",
    subtitle: "Fixed syntax error",
  },
  {
    title: "Zed",
    stars: "1.5k",
    href: "https://github.com/zed-industries/extensions",
    subtitle: "Added shadcn MCP extension",
  },
  {
    title: "Zed",
    stars: "1.5k",
    href: "https://github.com/zed-industries/extensions",
    subtitle: "Added Next.js DevTools MCP extension",
  },
  {
    title: "Vercel SWR",
    stars: "506",
    href: "https://github.com/vercel/swr-site",
    subtitle: "Added Spanish translation",
  },
  {
    title: "Hono",
    stars: "158",
    href: "https://github.com/honojs/website",
    subtitle: "Improved client typing docs",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-baseline">
        <div className="title-transition font-doto font-extrabold text-2xl">
          PROJECTS
        </div>
        <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          Things I've built
        </div>
      </div>
      <Description>
        A selection of projects I've worked on — open source, freelance, and
        hackathon builds.
      </Description>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <MorphingDialog
            key={project.id}
            transition={{ type: "spring", bounce: 0.05, duration: 0.25 }}
          >
            <MorphingDialogTrigger
              style={{ borderRadius: "0" }}
              className="flex flex-col gap-2 p-4 border border-dashed border-border hover:border-primary/10 hover:bg-accent/40 dark:hover:bg-input/30 transition-colors duration-200 text-left w-full"
            >
              <div className="flex items-start justify-between gap-2">
                <MorphingDialogTitle className="font-semibold text-sm">
                  {project.title}
                </MorphingDialogTitle>
                {project.stars !== null && (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground shrink-0">
                    <IconStar className="size-3 text-yellow-400" />
                    {project.stars}
                  </span>
                )}
              </div>
              <MorphingDialogSubtitle className="text-xs text-muted-foreground">
                {project.subtitle}
              </MorphingDialogSubtitle>
            </MorphingDialogTrigger>

            <MorphingDialogContainer>
              <MorphingDialogContent
                style={{ borderRadius: "0" }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-dashed border-border bg-background sm:w-[440px]"
              >
                <div className="p-6">
                  <MorphingDialogTitle className="text-lg font-bold">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-sm text-muted-foreground mt-0.5">
                    {project.subtitle}
                  </MorphingDialogSubtitle>
                  <MorphingDialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 6 },
                    }}
                  >
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.links.length > 0 && (
                      <div className="mt-4 flex gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-150"
                          >
                            {link.icon === "github" ? (
                              <IconGitHub className="size-5" />
                            ) : (
                              <IconLink className="size-5" />
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </MorphingDialogDescription>
                </div>
                <MorphingDialogClose
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </div>

      <div className="flex items-baseline mt-10 mb-5">
        <div className="title-transition font-doto font-extrabold text-2xl">
          CONTRIBUTIONS
        </div>
        <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          Open source
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contributions.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 p-4 border border-dashed border-border hover:border-primary/10 hover:bg-accent/40 dark:hover:bg-input/30 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-sm">{c.title}</span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground shrink-0">
                <IconStar className="size-3 text-yellow-400" />
                {c.stars}
              </span>
            </div>
            <span className="text-xs text-muted-foreground/80">
              {c.subtitle}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
