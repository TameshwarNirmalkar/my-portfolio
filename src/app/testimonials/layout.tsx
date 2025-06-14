import { Metadata } from "next";
import TestimonialsPage from "./page"; // import your Demo's page

export const metadata: Metadata = {
  title: "Testimonials",
  description: "clients feedback about me.",
};

export default function TestimonialsLayout() {
  return <TestimonialsPage />;
}
