import { Link } from "next-view-transitions";
import ServicesUI from "@/components/service-ui";
import { CustomLink, Description, WhiteSpan } from "@/components/typography";

export default function Page() {
  return (
    <div>
      <div className="font-mono text-muted text-sm">Hey It's me</div>
      <div className="flex items-baseline gap-4">
        <div className="title-transition font-doto font-extrabold text-2xl">
          UPRIZING
        </div>
        <Link
          className="font-mono font-normal text-sm text-muted hover:text-primary transition-colors duration-200"
          href="https://github.com/MrUprizing"
        >
          @MrUprizing
        </Link>
      </div>
      <Description>
        I am a <WhiteSpan> Back-End Developer </WhiteSpan> with a strong focus
        on cloud technologies and AI-driven solutions. My experience spans{" "}
        <WhiteSpan> cloud architecture, </WhiteSpan> backend systems, and the
        development of software that integrates{" "}
        <WhiteSpan> artificial intelligence </WhiteSpan> to deliver scalable,
        high-performance applications.
      </Description>
      <Description className="pt-4">
        I like to build things for <WhiteSpan> users </WhiteSpan> and
        <WhiteSpan> developers </WhiteSpan>, thinking deeply about how the
        interface looks, feels, and behaves, with a strong focus on{" "}
        <WhiteSpan> serverless </WhiteSpan>
        technologies and efficiency. The <WhiteSpan> Front-End </WhiteSpan> is
        my hobby. Check out my latest project{" "}
        <CustomLink href="https://auth.uprizing.me/" _blank>
          Auth CN.
        </CustomLink>
      </Description>
      <Description className="pt-4">
        You can gain further insights into my background and interests through
        my <CustomLink href="/thoughts">thoughts,</CustomLink>{" "}
        <CustomLink href="/work">work,</CustomLink> find me on{" "}
        <CustomLink href="https://github.com/MrUprizing" _blank>
          GitHub
        </CustomLink>{" "}
        and{" "}
        <CustomLink href="https://x.com/MrUprizing" _blank>
          X/Twitter.
        </CustomLink>
      </Description>
      <div className="pt-4">
        <ServicesUI />
      </div>
    </div>
  );
}
