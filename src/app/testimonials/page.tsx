import type { Metadata } from "next";
import TestimonialsContainer from "./(components)/TestimonialsContainer";

const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-wrap">
      <div className="container mx-auto">
        <TestimonialsContainer />
      </div>
    </div>
  );
}
