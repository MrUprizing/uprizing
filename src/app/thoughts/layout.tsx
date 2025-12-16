import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts - uprizing",
  description: "Where i write about craft :)",
  openGraph: {
    title: "Thoughts - MrUprizing",
    description: "Where i write about craft :)",
    url: "/thoughts",
    type: "website",
    siteName: "MrUprizing",
    images: [
      {
        url: "/og-thoughts.png",
        width: 1200,
        height: 630,
        alt: "Thoughts - MrUprizing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts - MrUprizing",
    description: "Where i write about craft :)",
    images: ["/og-thoughts.png"],
  },
};

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
