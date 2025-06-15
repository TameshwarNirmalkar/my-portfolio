import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Tameshwar Nirmalkar, full details",
};

export default function MyDetailsLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
