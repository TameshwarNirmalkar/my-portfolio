import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Hourly changes of the task",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
