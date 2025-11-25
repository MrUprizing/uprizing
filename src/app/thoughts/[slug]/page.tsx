import fs from "fs";
import type { Metadata } from "next";
import path from "path";

interface PostMetadata {
  title: string;
  description?: string;
  date?: string;
  author?: string;
}

interface PostComponent {
  default: React.ComponentType<{ metadata: PostMetadata }>;
  metadata: PostMetadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = (await import(`@/content/${slug}.tsx`)) as PostComponent;
  const Post = module.default;
  const metadata = module.metadata;

  return (
    <div>
      <header className="mb-8 border-b pb-6">
        <div className="flex gap-4 text-sm text-muted-foreground">
          {metadata.date && <time>{metadata.date}</time>}
        </div>
        <div className="font-extrabold text-2xl">{metadata.title}</div>

        {metadata.description && (
          <p className="text-muted-foreground mt-3">{metadata.description}</p>
        )}
      </header>
      <Post metadata={metadata} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const module = (await import(`@/content/${slug}.tsx`)) as PostComponent;
    const postMeta = module.metadata;

    return {
      title: postMeta.title || slug,
      description: postMeta.description || "",
      openGraph: {
        title: postMeta.title || slug,
        description: postMeta.description || "",
        type: "article",
        publishedTime: postMeta.date,
        authors: postMeta.author ? [postMeta.author] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: postMeta.title || slug,
        description: postMeta.description || "",
      },
    };
  } catch (error) {
    return {
      title: slug,
      description: "Blog post",
    };
  }
}

export function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDirectory);

  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => ({
      slug: file.replace(/\.tsx$/, ""),
    }));
}

export const dynamicParams = false;
