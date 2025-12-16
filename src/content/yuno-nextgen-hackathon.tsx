import { ProjectArchitecturFlow } from "@/components/content/yuno-global-beam";
import TrueFocus from "@/components/TrueFocus";
import {
  CodeBlock,
  ContainerLinks,
  CustomLink,
  Description,
  ImageComponent,
  Paragraph,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "Yuno NextGen Hackathon",
  date: "16-12-2025",
  description:
    "24 hours to solve the payment integration problem nobody wanted to touch.",
  author: "Mr Uprizing",
};

export default function YunoNextGenHackathon() {
  return (
    <>
      <ImageComponent src="/yuno-01.webp" alt="Yuno" width={900} height={600} />
      <Description className="pt-4">
        We recently participated in the{" "}
        <CustomLink href="https://yuno-hackathon-nextgen-internship.vercel.app/">
          Yuno NextGen Hackathon
        </CustomLink>
        . They gave us several challenges to choose from. One caught our
        attention: <WhiteSpan>the SDK was a mess</WhiteSpan>. We picked it. 24
        hours later, we had a solution that changed how we think about payment
        integration.
      </Description>

      <Subtitle title="The Challenge We Chose" />
      <Paragraph>
        Yuno merchants were frustrated with the current SDK. It wasn't flexible.
        You couldn't customize it without code. And every change required a new
        version, store approvals, endless waits.
      </Paragraph>

      <div className="ml-4 border-l-2 border-primary/30 pl-4 my-4 space-y-2">
        <Paragraph>"I can't change colors without recompilation"</Paragraph>
        <Paragraph>
          "How long does it take to add a new payment method?"
        </Paragraph>
        <Paragraph>
          "Why do I need to deploy just for a visual adjustment?"
        </Paragraph>
      </div>

      <Paragraph>
        The SDK was rigid, didn't scale, and generated constant friction.{" "}
        <WhiteSpan>So we decided to rethink everything from scratch</WhiteSpan>
      </Paragraph>

      <Subtitle title="24 Hours of Focus" />

      <Paragraph>
        We didn't have time for perfection. Only clarity. We separated two
        things that traditionally go together: payment logic and visual
        presentation.
      </Paragraph>

      <Paragraph>
        We created two ways to build checkouts.{" "}
        <WhiteSpan>Without requiring you to be a developer</WhiteSpan>. Anyone
        on the merchant's team can create, edit, and add checkouts.
      </Paragraph>

      <div className="ml-4 my-4 space-y-4">
        <div>
          <h4 className="font-semibold text-primary mb-1">
            1. Drag & Drop (JSON to CDN)
          </h4>
          <Paragraph>
            Minimalist visual editor. You choose colors, fields, order. Clicks.
            No code. Generates JSON that uploads to S3. Propagates via
            CloudFront globally.
          </Paragraph>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-1">
            2. AI Agent + VM (Single URL)
          </h4>
          <Paragraph>
            The agent creates a 100% customizable checkout in a VM. For those
            who want more control, access to VSCode Web for manual edits.
            Automatic deploy. Generates a unique URL you use directly in the
            iframe. No JSON.
          </Paragraph>
        </div>
      </div>

      <Paragraph>
        Both options are so intuitive that the marketing, product, or design
        team can use them without waiting for developers. Live changes. Fast
        iteration.
      </Paragraph>

      <Subtitle title="How Everything Flows" />
      <ProjectArchitecturFlow />

      <Subtitle title="The Resulting SDK" />
      <Paragraph>
        What came out was an SDK that requires exactly one thing.
      </Paragraph>

      <CodeBlock
        name="checkout.tsx"
        language="typescript"
        code={`npm install yuno-payment-sdk

import YunoIframe from "yuno-payment-sdk";

export default function Page() {
  return (
    <div>
      <YunoIframe url="https://api.y.uno/checkout/merchant-xyz" height="800px" />
    </div>
  );
}`}
      />

      <Paragraph>
        Install. Just once. The URL you pass to the iframe can be a drag & drop
        JSON, or a unique URL from the AI Agent. Either way, everything is cloud
        configuration. New payment method. New fields. Colors. Layouts. No
        redeploy. No App Store. No new version. No developers involved in every
        change.
      </Paragraph>

      <Subtitle title="The Real Workflow" />
      <Paragraph>
        It's so simple it sounds unreal. You edit in the dashboard. Change what
        you need. And hit send. That's it.
      </Paragraph>

      <div className="my-8 py-8">
        <TrueFocus
          sentence="Design Build Ship"
          manualMode={false}
          blurAmount={5}
          borderColor="gray"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </div>

      <Paragraph>
        No compilation. No waiting for store approvals. No new versions. The
        change propagates to the CDN in seconds. Customers see it immediately.
      </Paragraph>

      <Subtitle title="Why It Works" />
      <Paragraph>It wasn't magic. It was decoupling.</Paragraph>

      <div className="ml-4 my-4 space-y-3">
        <div>
          <h4 className="font-semibold text-primary mb-1">
            The Checkout Isn't Your Code
          </h4>
          <Paragraph>
            It lives on Yuno's servers. It's an iframe. Maximum security.
            Instant changes.
          </Paragraph>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-1">
            Zero Breaking Changes
          </h4>
          <Paragraph>
            The SDK never changes. It receives a URL. Done. Everything is cloud
            configuration.
          </Paragraph>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-1">
            Accessible to Everyone
          </h4>
          <Paragraph>
            You don't need to be a developer. Drag & drop or AI Agent. Both
            tools are made for anyone to use.
          </Paragraph>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-1">
            Speed in Development
          </h4>
          <Paragraph>
            Merchants iterate fast. Adding a payment method is clicks, not
            sprints.
          </Paragraph>
        </div>
      </div>

      <Subtitle title="The Subtle Detail" />
      <Paragraph>
        The technology itself is simple: JSON or VM URL + CDN + iframe. It's not
        innovative.
      </Paragraph>

      <Paragraph>
        What's innovative is the design decision:{" "}
        <WhiteSpan>
          thinking of the developer as your primary user, but not your only user
        </WhiteSpan>
        .
      </Paragraph>

      <Paragraph>
        If an SDK requires 50 pages of documentation, complex configuration,
        debugging incompatibilities… something is wrong. A good SDK does one
        thing. And does it well.
      </Paragraph>

      <Paragraph>Yuno Payment SDK: load an iframe. Done.</Paragraph>

      <Subtitle title="About Yuno NextGen Hackathon" />
      <Paragraph>
        Yuno demonstrated <WhiteSpan>excellent organization</WhiteSpan>{" "}
        throughout the entire event. Clear, real challenges. Constant support.
        Smooth communication. Expert mentors. And best of all:{" "}
        <WhiteSpan>Freedom to innovate</WhiteSpan>. They didn't tell us what
        technology to use, nor did they impose strict limits. Just one goal:
        improve the experience for their merchants.
      </Paragraph>

      <Paragraph>
        Our thanks to the Yuno team for the opportunity to collaborate on
        something that truly impacts their merchants. Hackathons like this are
        where the magic happens.
      </Paragraph>

      <Subtitle title="Why Hackathons Are Genius for Talent Discovery" />
      <Paragraph>
        Participating in this hackathon showed me why companies should do more
        of these. In 24 hours, you see how people really think under pressure.
        No resumes. No interviews. Just real problems, real solutions, and real
        collaboration.{" "}
        <WhiteSpan>This is how you find your best talent</WhiteSpan>. Yuno
        nailed it. More companies should adopt this approach to hiring.
      </Paragraph>

      <ContainerLinks
        links={[
          {
            title: "Yuno",
            href: "https://y.uno",
            _blank: true,
          },
          {
            title: "Hackathon",
            href: "https://yuno-hackathon-nextgen-internship.vercel.app/",
            _blank: true,
          },
        ]}
      />
    </>
  );
}
