import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { TextScramble } from "@/components/ui/text-scramble";

interface PostMetadata {
  title: string;
  date: string;
  description?: string;
}

interface PostComponent {
  metadata: PostMetadata;
}

export const metadata: Metadata = {
  title: "Thoughts - uprizing",
};

export default async function BlogList() {
  const contentDirectory = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".tsx"))
      .map(async (file) => {
        const slug = file.replace(/\.tsx$/, "");
        const module = await import(`@/content/${slug}.tsx`);
        const postMetadata = module.metadata as PostMetadata;

        return {
          slug,
          ...postMetadata,
          sort: Number(postMetadata?.date?.replaceAll(".", "") || 0),
        };
      }),
  );

  posts.sort((a, b) => b.sort - a.sort);

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <div className="title-transition font-doto font-extrabold text-2xl">
          THOUGHTS
        </div>
        <div className="font-mono font-normal text-sm text-muted hover:text-primary transition-colors duration-200">
          Where i write about craft :)
        </div>
      </div>
      <ul className="mt-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/thoughts/${post.slug}`}
              className="group flex gap-1 justify-between items-center"
              draggable={false}
            >
              <TextScramble
                className="font-mono text-sm"
                duration={1.2}
                characterSet=". "
              >
                {post.title}
              </TextScramble>
              <span className="dot-leaders flex-1 text-muted-foreground/50 group-hover:text-primary transition-colors self-center" />
              <time className="block text-muted-foreground/70 tabular-nums tracking-tight group-hover:text-primary transition-colors">
                {post.date || "-"}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
