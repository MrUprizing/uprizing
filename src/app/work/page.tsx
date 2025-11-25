import DatabaseWithRestApi from "@/components/db-ui";
import TimelineMain from "@/components/timeline-main";
import TimelineSecondary from "@/components/timeline-secondary";
import { CustomLink, Description, WhiteSpan } from "@/components/typography";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div>
      <div className="flex items-baseline">
        <div className="title-transition font-doto font-extrabold text-2xl">
          Work
        </div>
        <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          My timeline with 22 years old :)
        </div>
      </div>
      <Description>
        Browse a timeline of my work and projects across the years, including
        early school creations, personal experiments, professional experience,
        and key milestones such as winning two hackathons, being invited to{" "}
        <WhiteSpan>Google’s offices in Colombia</WhiteSpan>, and launching{" "}
        <CustomLink href="https://auth.uprizing.me/" _blank>
          {" "}
          Auth CN,
        </CustomLink>{" "}
        which reached{" "}
        <CustomLink href="https://github.com/MrUprizing/auth-cn">
          100+ GitHub stars
        </CustomLink>{" "}
        and over 600 likes on its announcement{" "}
        <CustomLink
          href="https://x.com/MrUprizing/status/1991299770921709622?s=20"
          _blank
        >
          post on X
        </CustomLink>{" "}
        within just three days.
      </Description>
      <DatabaseWithRestApi />
      <div className="flex items-baseline mt-3 mb-5">
        <div className="title-transition font-doto font-extrabold text-2xl">
          Principal Timeline
        </div>
        <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          My most important milestones
        </div>
      </div>
      <TimelineMain />
      <Separator className="my-8" />
      <div className="flex items-baseline mt-3 mb-5">
        <div className="title-transition font-doto font-extrabold text-2xl">
          Complete Timeline
        </div>
        <div className="font-mono ml-4 font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          {"<3"}
        </div>
      </div>
      <TimelineSecondary />
    </div>
  );
}
