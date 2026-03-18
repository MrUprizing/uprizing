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
    date: "2023 - 2024",
    description: "Backend Developer.",
    id: 1,
    title: "Transportes ERAP",
  },
  {
    date: "2024",
    description: "European Hackathons.",
    id: 2,
    title: "2 Hackathons Winner",
  },
  {
    date: "2024 - 2025",
    description: "Open source contributions.",
    id: 3,
    title: "Open source Projects",
  },
  {
    date: "2025",
    description: "Full-stack Developer.",
    id: 4,
    title: "Kebo",
  },
];

export default function TimelineMain() {
  return (
    <Timeline className="mt-3" defaultValue={4} orientation="horizontal">
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
