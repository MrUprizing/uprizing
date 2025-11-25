import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    date: "Jan, 2021",
    description: "SENA - Colombia",
    id: 1,
    title: "Electronics technician",
  },
  {
    date: "Jan, 2022",
    description: "UMB - Colombia",
    id: 2,
    title: "Software engineering student",
  },
  {
    date: "Jan, 2023",
    description:
      "Joint Transportes ERAP as a Backend Developer, working on logistics solutions.",
    id: 3,
    title: "Transportes ERAP",
  },
  {
    date: "May, 2024",
    description: "First place in the Hackathon del dev.",
    id: 4,
    title: "Won my first hackathon.",
  },
  {
    date: "Apr, 2024",
    description:
      "3rd place in the Hola Mundo Day hackathon by Mouredev X Reflex",
    id: 5,
    title: "3rd place in my second hackathon.",
  },
  {
    date: "Jul, 2024",
    description:
      "I wanted to study intensive English, so I finished my job at Transportes ERAP.",
    id: 6,
    title: "Finish my work on Transportes ERAP.",
  },
  {
    date: "Jul-Nov, 2024",
    description: "I have worked on several freelance projects.",
    id: 7,
    title: "Frelance Developer",
  },
  {
    date: "Aug 11, 2025",
    description: "Google cloud invited me to their offices in Colombia.",
    id: 8,
    title: "Google Cloud offices visit - Colombia",
  },
  {
    date: "Aug 23, 2025",
    description:
      "4rth place in the IA Hackathon in Sergio Arboleda University.",
    id: 9,
    title: "IA Hackathon",
  },
  {
    date: "Nov 19, 2025",
    description:
      "A minimalist component library with production-ready authentication setups designed for Better Auth and shadcn/ui.",
    id: 10,
    title: "Auth CN",
  },
];

export default function TimelineSecondary() {
  return (
    <Timeline className="mt-9" defaultValue={9}>
      {items.map((item) => (
        <TimelineItem
          className="sm:group-data-[orientation=vertical]/timeline:ms-32"
          key={item.id}
          step={item.id}
        >
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:-left-32 sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:w-20 sm:group-data-[orientation=vertical]/timeline:text-right">
              {item.date}
            </TimelineDate>
            <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
