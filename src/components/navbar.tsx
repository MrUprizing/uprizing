"use client";

import cn from "clsx";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import ThemeToggle from "./theme-toggle";

function Item(props: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const href = props.href;

  if (typeof href !== "string") {
    throw new Error("`href` must be a string");
  }

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li
      className={cn(
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
        "transition-colors",
        "sm:-mx-3",
      )}
    >
      <Link
        {...props}
        className="inline-block w-full px-2 font-mono text-right text-sm font-med"
        draggable={false}
        prefetch={true}
      />
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="sm:mr-6 md:mr-10 lg:mr-14 w-full sm:w-16">
      <ul className="text-right sm:sticky top-10 md:top-10 lg:top-14 mb-6 sm:mb-0 flex gap-2 justify-end sm:block items-center sm:items-start">
        <Item href="/">About</Item>
        <Item href="/work">Work</Item>
        <Item href="/skills">Skills</Item>
        <Item href="/thoughts">Thoughts</Item>
        <hr className="border-t border-dashed mb-4 mt-4 sm:-mx-1" />
        {/*<DialogNavbar />*/}
        <ThemeToggle />
      </ul>
    </nav>
  );
}
