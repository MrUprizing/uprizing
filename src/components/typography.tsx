import Image from "next/image";
import { Link } from "next-view-transitions";
import type { BundledLanguage } from "shiki";
import { IconCodeEditor, IconLink } from "@/assets";
import CodeBlockHtml from "@/components/ui/code";
import { CopyButton } from "@/components/ui/copy-button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import "@/styles/image-zoom.css";
import Zoom from "react-medium-image-zoom";
import type { ImageZoomProps } from "@/types/image-zoom";
import { DocsCodeCommand, DocsCodeCommandX } from "./code-commands";

function getImageSrc(src: ImageZoomProps["src"]): string {
  if (typeof src === "string") return src;
  return src.src;
}

const Title = ({ className, title }: { className?: string; title: string }) => {
  return (
    <h2 id={title} className={cn(className, "text-2xl sm:text-3xl font-bold")}>
      <a href={`#${title}`}>{title}</a>
    </h2>
  );
};

const Subtitle = ({
  className,
  title,
  withoutLink = false,
}: {
  className?: string;
  title: string;
  withoutLink?: boolean;
}) => {
  return (
    <h3 id={title} className={cn(className, "text-xl font-medium mt-4")}>
      {withoutLink ? title : <a href={`#${title}`}>{title}</a>}
    </h3>
  );
};

const Description = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        className,
        "text-muted-foreground text-sm sm:text-base mt-1 leading-4 sm:leading-7",
      )}
    >
      {children}
    </p>
  );
};

const SubDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        className,
        "text-muted-foreground/70 text-sm sm:text-base font-light mt-1",
      )}
    >
      {children}
    </p>
  );
};

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-base mt-2")}>
      {children}
    </p>
  );
};

const ContainerLinks = ({
  className,
  links,
}: {
  className?: string;
  links: { title: string; href: string; _blank?: boolean }[];
}) => {
  return (
    <div className={cn(className, "flex flex-row gap-2 mt-3")}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link._blank !== false ? "_blank" : "_self"}
          className="border bg-card hover:text-primary rounded-sm px-2 text-sm shadow-xs hover:bg-accent dark:bg-input/50 dark:border-input dark:hover:bg-input/70 group"
        >
          {link.title}

          <IconLink className="inline ml-0.5 text-muted-foreground group-hover:text-primary duration-200 size-3.5" />
        </Link>
      ))}
    </div>
  );
};

const MyBadge = ({
  className,
  icon: Icon,
  title,
}: {
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
}) => {
  return (
    <span
      className={cn(
        className,
        "inline-flex items-center text-primary gap-2 bg-card border rounded-sm px-1 py-0.5 text-xs font-semibold shadow-xs dark:bg-input/50 dark:border-input",
      )}
    >
      {Icon && <Icon className="size-3.5" />}
      <span>{title}</span>
    </span>
  );
};

const WhiteSpan = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary font-medium">{children}</span>;
};

const CustomLink = ({
  children,
  className,
  href,
  _blank,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  _blank?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={_blank ? "_blank" : "_self"}
      className={cn(className, "text-primary group")}
    >
      <span className="relative">
        <span className="absolute -bottom-px h-px rounded w-full bg-primary/50 transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
        {children}
      </span>
      <IconLink className="inline ml-0.5 group-hover:text-primary text-muted-foreground duration-200 size-3" />
    </Link>
  );
};

// Component are picked from
// https://github.com/fuma-nama/fumadocs and adapted to this project

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  zoomInProps,
  rmiz,
}: ImageZoomProps) => {
  const imageSrc = getImageSrc(src);

  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...rmiz}
      zoomImg={{
        src: imageSrc,
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className="rounded-xl border mt-2"
        width={width ? Number(width) : 900}
        height={height ? Number(height) : 600}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px "
      />
    </Zoom>
  );
};

const CodeBlock = async ({
  name,
  code,
  language,
}: {
  name: string;
  code: string;
  language: BundledLanguage;
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl border dark:[--color-muted:var(--color-zinc-900)] overflow-hidden flex flex-col mt-4">
      <header className="flex flex-wrap items-center justify-between px-4 py-0.5 bg-card border-b rounded-t-xl">
        <div className="flex items-center gap-2">
          <IconCodeEditor />
          <h3 className="font-medium text-sm font-mono">{name}</h3>
        </div>

        <CopyButton code={code} />
      </header>
      <section className="flex-1 overflow-auto max-h-[450px] py-3 rounded-b-xl">
        <CodeBlockHtml code={code} language={language} heightAuto />
      </section>
    </div>
  );
};

const TabsComponent = ({
  items,
  defaultValue,
  children,
}: {
  items: Array<{ label: string; value: string }>;
  defaultValue: string;
  children: React.ReactNode;
}) => {
  return (
    <Tabs defaultValue={defaultValue} className="mt-4">
      <TabsList className="h-auto rounded-none border-b bg-background p-0">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="relative rounded-t-md border-none bg-transparent py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:shadow-none data-[state=active]:after:bg-primary hover:bg-transparent"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export {
  Title,
  Subtitle,
  WhiteSpan,
  SubDescription,
  Paragraph,
  MyBadge,
  ContainerLinks,
  Description,
  CustomLink,
  ImageComponent,
  CodeBlock,
  DocsCodeCommand as CodeCommand,
  DocsCodeCommandX as CodeCommandX,
  TabsComponent,
};
