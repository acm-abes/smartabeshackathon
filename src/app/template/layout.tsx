/** @format */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Template | Smart ABES Hackathon",
  description:
    "Get the official template for Smart ABES Hackathon - Your starting point for building innovative projects powered by Data Structures and Algorithms.",
  openGraph: {
    title: "Template | Smart ABES Hackathon",
    description:
      "Get the official template for Smart ABES Hackathon - Your starting point for building innovative projects powered by Data Structures and Algorithms.",
    images: ["/logo.png"],
  },
};

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
