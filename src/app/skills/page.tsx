import {
  IconAnthropic,
  IconAWS,
  IconBedrock,
  IconBetterAuth,
  IconBun,
  IconClaude,
  IconCloudinary,
  IconDocker,
  IconDrizzle,
  IconDynamo,
  IconEcho,
  IconElysia,
  IconFiber,
  IconFigma,
  IconFirecrawl,
  IconGcp,
  IconGitHub,
  IconGo,
  IconGorm,
  IconHono,
  IconKubernetes,
  IconMistral,
  IconNeon,
  IconNextjs,
  IconNode,
  IconPostgres,
  IconPrisma,
  IconPulumi,
  IconRedis,
  IconResend,
  IconShadcn,
  IconSql,
  IconSQLite,
  IconSST,
  IconSupabase,
  IconSvelte,
  IconTailwind,
  IconTurbo,
  IconTypescript,
  IconUpstash,
  IconV0,
  IconVercel,
  IconZed,
  IconZod,
} from "@/assets";
import { Description, MyBadge } from "@/components/typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-2">
      <div className="w-full max-w-3xl flex flex-col">
        <div className="flex items-baseline">
          <div className="title-transition font-doto font-extrabold text-2xl">
            SKILLS
          </div>
          <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
            Which I use? See below
          </div>
        </div>
        <Description>
          My main tech stack centers on{" "}
          <MyBadge icon={IconTypescript} title="TypeScript" /> and{" "}
          <MyBadge icon={IconGo} title="Go" /> . For infrastructure as code I
          work with <MyBadge icon={IconSST} title="SST" /> and{" "}
          <MyBadge icon={IconPulumi} title="Pulumi" />, and{" "}
          <MyBadge icon={IconAWS} title="AWS" /> is my primary cloud provider.
          My databases include{" "}
          <MyBadge icon={IconPostgres} title="PostgreSQL" />,{" "}
          <MyBadge icon={IconRedis} title="Redis" />, and{" "}
          <MyBadge icon={IconDynamo} title="DynamoDB" />, using{" "}
          <MyBadge icon={IconDrizzle} title="Drizzle" />,{" "}
          <MyBadge icon={IconPrisma} title="Prisma" /> and{" "}
          <MyBadge icon={IconGorm} title="Gorm" /> (for Go) as ORMs. For
          frontend development I use{" "}
          <MyBadge icon={IconNextjs} title="NextJs" /> and{" "}
          <MyBadge icon={IconSvelte} title="Svelte" /> with{" "}
          <MyBadge icon={IconTailwind} title="Tailwind" /> CSS.
        </Description>
        <Description className="pt-4">
          At last, but not least, I use <MyBadge icon={IconZed} title="Zed" />{" "}
          IDE for creating awesome projects, and I have a certified B2+ level of
          English.
        </Description>
        <h3 className="text-muted-foreground pt-4">{`<Core/>`}</h3>
        <div className="pt-2 flex gap-2">
          <MyBadge icon={IconTypescript} title="TypeScript" />
          <MyBadge icon={IconGo} title="Go" />
          <MyBadge icon={IconSql} title="SQL" />
        </div>

        <h3 className="text-muted-foreground pt-4">{`<Frameworks & More.../>`}</h3>
        <div className="pt-2 flex gap-2 flex-wrap">
          <MyBadge icon={IconHono} title="Hono ❤️" />
          <MyBadge icon={IconElysia} title="ElysiaJs" />
          <MyBadge icon={IconEcho} title="Echo" />
          <MyBadge icon={IconFiber} title="Fiber" />
          <MyBadge icon={IconZod} title="Zod ❤️" />
          <MyBadge icon={IconShadcn} title="Shadcn UI" />
          <MyBadge icon={IconNextjs} title="NextJs" />
          <MyBadge icon={IconBetterAuth} title="Better Auth ❤️" />
          <MyBadge icon={IconSvelte} title="Svelte" />
          <MyBadge icon={IconTailwind} title="Tailwind" />
          <MyBadge icon={IconBun} title="Bun Js ❤️" />
          <MyBadge icon={IconTurbo} title="Turborepo" />
          <MyBadge icon={IconNode} title="Node Js" />
          <MyBadge icon={IconResend} title="Resend ❤️" />
          <MyBadge icon={IconFigma} title="Figma " />
        </div>

        <h3 className="text-muted-foreground pt-4">{`<Database/>`}</h3>
        <div className="pt-2 flex gap-2">
          <MyBadge icon={IconPostgres} title="PostgreSQL" />
          <MyBadge icon={IconSQLite} title="SQLite" />
          <MyBadge icon={IconRedis} title="Redis" />
          <MyBadge icon={IconDynamo} title="DynamoDB" />
        </div>

        <h3 className="text-muted-foreground pt-4">{`<AI/>`}</h3>
        <div className="pt-2 flex gap-2 flex-wrap">
          <MyBadge icon={IconVercel} title="Ai SDK ❤️" />
          <MyBadge icon={IconAnthropic} title="Anthropic AI Api" />
          <MyBadge icon={IconMistral} title="Mistral AI Api" />
          <MyBadge icon={IconFirecrawl} title="Firecrawl Api" />
          <MyBadge icon={IconV0} title="V0 & Api❤️" />
          <MyBadge icon={IconBedrock} title="AWS Bedrock" />
          <MyBadge icon={IconClaude} title="Claude Code" />
          <MyBadge icon={IconVercel} title="Vercel AI Gateway" />
        </div>

        <h3 className="text-muted-foreground pt-4">{`<Dev Ops/>`}</h3>
        <div className="pt-2 flex gap-2 flex-wrap">
          <MyBadge icon={IconPulumi} title="Pulumi" />
          <MyBadge icon={IconSST} title="SST ❤️" />
          <MyBadge icon={IconDocker} title="Docker" />
          <MyBadge icon={IconGitHub} title="GitHub Actions" />
          <MyBadge icon={IconKubernetes} title="Kubernetes" />
        </div>

        <h3 className="text-muted-foreground pt-4">{`<Cloud Providers/>`}</h3>
        <div className="pt-2 flex gap-2 flex-wrap">
          <MyBadge icon={IconAWS} title="Aws ❤️" />
          <MyBadge icon={IconGcp} title="Gcp " />
          <MyBadge icon={IconVercel} title="Vercel ❤️" />
          <MyBadge icon={IconSupabase} title="Supabase" />
          <MyBadge icon={IconCloudinary} title="Cloudinary" />
          <MyBadge icon={IconNeon} title="Neon" />
          <MyBadge icon={IconUpstash} title="Upstash" />
        </div>
      </div>
    </div>
  );
}
