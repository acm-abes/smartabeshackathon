/** @format */

import { Metadata } from "next";

export const siteConfig = {
  name: "Smart ABES Hackathon",
  description:
    "Build innovative projects powered by Data Structures and Algorithms.",
  url: "https://smartabeshackathon.tech",
  ogImage: "https://smartabeshackathon.tech/logo.png",
  links: {
    github: "https://github.com/acm-abes/smartabeshackathon", // Update with actual link if available
  },
  authors: [{ name: "ABES ACM" }],
  keywords: [
    "hackathon",
    "DSA",
    "coding",
    "competition",
    "Smart ABES Hackathon",
    "innovation",
  ],
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/logo.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
