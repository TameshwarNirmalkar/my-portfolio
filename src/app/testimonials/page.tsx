import type { Metadata } from "next";
import Comments from "@/components/Comments";
import CommentsCard from "@components/CommentsCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container  m-4">
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          <h1 className="text-2xl text-gray-300">Testimonials</h1>
          <div className="flex flex-col-3 gap-6 top-0">
            {/* Card 1 */}
            <CommentsCard
              coverImage="/assets/images/rotating_card_thumb2.png"
              profleImage="/assets/images/ai-image1.jpeg"
            />

            {/* Card 2 */}
            <CommentsCard
              coverImage="/assets/images/rotating_card_thumb.png"
              profleImage="/assets/images/ai-image1.jpeg"
            />

            {/* Card 3 */}
            <CommentsCard
              coverImage="/assets/images/rotating_card_thumb3.png"
              profleImage="/assets/images/ai-image1.jpeg"
            />
          </div>

          <Comments />
        </div>
      </div>
    </div>
  );
}
