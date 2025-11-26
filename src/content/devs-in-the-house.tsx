import {
  ContainerLinks,
  CustomLink,
  Description,
  ImageComponent,
  MyBadge,
  Paragraph,
  SubDescription,
  Subtitle,
  Title,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "Google Devs in the House 2025",
  date: "11-08-2025",
  description:
    "A day immersed in AI and Google Cloud solutions. Here's what I learned.",
  author: "Mr Uprizing",
};

export default function DevsInTheHouse() {
  return (
    <>
      <Description>
        I attended Devs in the House 2025 at OXO Center in Bogotá. A full day of
        AI, Google Cloud, and building real solutions with other developers.
        Here's what happened.
      </Description>

      <Subtitle title="The event" />

      <Description>
        Around 50 developers, designers, and entrepreneurs gathered to work on
        AI-powered use cases. The format was simple: teams of up to 4 people,
        with at least one technical person per team. We had training sessions,
        design sprints, and hands-on demos with Google Cloud tools.
      </Description>

      <ImageComponent
        src="/dith-01.webp"
        alt="Devs in the House 2025 main stage"
        width={900}
        height={600}
      />

      <Subtitle title="What we built" />

      <Description>
        Our team focused on how AI can improve developer workflows. We explored
        Vertex AI, built a prototype using Google Cloud's generative AI APIs,
        and presented our findings to judges and other developers.
      </Description>

      <Description>
        The best part wasn't winning. It was seeing how many different problems
        people were trying to solve with AI. Automation, customer service,
        content generation, code assistance. Everyone had different angles.
      </Description>

      <ImageComponent
        src="/dith-02.webp"
        alt="Team working on AI solution"
        width={900}
        height={600}
      />

      <Subtitle title="Key takeaway" />

      <Description>
        Google Cloud's tooling for AI is mature. The APIs are straightforward.
        You can go from idea to working prototype in hours, not weeks.
      </Description>

      <Description>
        But more than the tools, it was the energy. Developers building
        together, solving real problems, learning from each other. That's what
        made the day valuable.
      </Description>

      <ImageComponent
        src="/dith-03.webp"
        alt="Closing ceremony and demos"
        width={900}
        height={600}
      />

      <Subtitle title="Worth attending" />

      <Description>
        If Devs in the House happens again, go. Bring your team. You'll learn
        something. You'll meet people. And you might build something cool in the
        process.
      </Description>

      <ContainerLinks
        links={[
          {
            title: "Google Cloud AI Tools",
            href: "https://cloud.google.com/ai",
            _blank: true,
          },
          {
            title: "Vertex AI Documentation",
            href: "https://cloud.google.com/vertex-ai/docs",
            _blank: true,
          },
        ]}
      />
    </>
  );
}
