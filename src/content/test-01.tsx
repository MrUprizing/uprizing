import { Link } from "next-view-transitions";

export const metadata = {
  title: "Mi Primer Pensamiento",
  date: "28.11.2025",
  description: "Una descripción corta de mi pensamiento",
  author: "Tu nombre",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-2">
      <div className="w-full max-w-3xl flex flex-col">
        <div className="flex items-baseline gap-4">
          <div className="font-extrabold text-2xl">Content test</div>
          <div className="font-mono font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
            Which I use? See belowasdasdas
          </div>
        </div>
      </div>
    </div>
  );
}
