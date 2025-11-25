import { Link } from "next-view-transitions";
import {
  Description,
  CustomLink,
  Paragraph,
  Subtitle,
  Title,
  WhiteSpan,
  ContainerLinks,
} from "@/components/typography";
import ServicesUI from "@/components/service-ui";

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
        Yup! I'm a <WhiteSpan> BackEnd Developer. </WhiteSpan> Big deal, right?
        But wait — there's more! I'm not just writing APIs, I'm building
        <WhiteSpan> Cloud Architectures. </WhiteSpan> And if that wasn't enough,
        guess what? <WhiteSpan> AI Integration </WhiteSpan>
        Specialist? Oh yeah, I've got that badge too!
      </Description>
      <Description className="pt-4">
        I love both <WhiteSpan> Code </WhiteSpan>&{" "}
        <WhiteSpan>Cloud infrastructure. </WhiteSpan> So, that means I can
        create scalable and intelligent services. I'm always looking for new
        opportunities to learn and grow.
      </Description>
      <Description className="pt-4">I love serverless</Description>
      <Description className="pt-4">
        You can gain further insights into my background and interests through
        my <CustomLink href="/thoughts">thoughts,</CustomLink>{" "}
        <CustomLink href="/work">projects,</CustomLink> find me on{" "}
        <CustomLink href="https://github.com/MrUprizing" _blank>
          GitHub
        </CustomLink>{" "}
        and{" "}
        <CustomLink href="https://x.com/MrUprizing" _blank>
          X/Twitter.
        </CustomLink>{" "}
      </Description>
      <div className="pt-6">
        <ServicesUI />
      </div>
    </div>
  );
}
