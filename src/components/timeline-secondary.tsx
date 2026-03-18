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
      "Joined Transportes ERAP as Back-end Developer · Full-time · Bogotá, Hybrid",
    id: 3,
    title: "Transportes ERAP",
  },
  {
    date: "Apr, 2024",
    description:
      "3rd place in the Hola Mundo Day hackathon by Mouredev X Reflex",
    id: 4,
    title: "3rd place in my second hackathon.",
  },
  {
    date: "May, 2024",
    description: "First place in the Hackathon del dev.",
    id: 5,
    title: "Won my first hackathon.",
  },
  {
    date: "Dec, 2024",
    description:
      "Left Transportes ERAP after 2 years to focus on freelance and English studies.",
    id: 6,
    title: "Left Transportes ERAP",
  },
  {
    date: "Jul - Nov, 2024",
    description: "Worked on several freelance projects.",
    id: 7,
    title: "Freelance Developer",
  },
  {
    date: "Dec, 2024",
    description:
      "Joined Crafter Station as Back-end Developer · Freelance · Bogotá, Remote",
    id: 8,
    title: "Crafter Station",
  },
  {
    date: "Jan, 2025",
    description:
      "Joined Kebo as Full-stack Developer · Freelance · Bogotá, Remote",
    id: 9,
    title: "Kebo",
  },
  {
    date: "Aug 11, 2025",
    description: "Google Cloud invited me to their offices in Colombia.",
    id: 10,
    title: "Google Cloud offices visit - Colombia",
  },
  {
    date: "Aug 23, 2025",
    description: "4th place in the IA Hackathon in Sergio Arboleda University.",
    id: 11,
    title: "IA Hackathon",
  },
  {
    date: "Nov 19, 2025",
    description:
      "A minimalist component library with production-ready authentication setups designed for Better Auth and shadcn/ui.",
    id: 12,
    title: "Auth CN",
  },
];

export default function TimelineSecondary() {
  return (
    <Timeline className="mt-9" defaultValue={12}>
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
