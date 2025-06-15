import type { Metadata } from "next";
import CardInfo from "@/components/CardInfo";
import Image from "next/image";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Blockchain, web3, eatharem, metamask",
};

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container  m-4">
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          <h1 className="text-2xl text-gray-300">Services</h1>
          <div className="flex flex-col-2 gap-6 top-0">
            <Image
              src={"/assets/images/ai-image1.jpeg"}
              width={100}
              height={100}
              alt="AI Image"
              className="object-scale-down lg:object-cover  lg:h-36 rounded-2xl"
            />
            <div>
              Stop wasting time and money designing and managing a website that doesn&apos;t get results. Happiness
              guaranteed!
              <ul className="list-disc list-outside px-4">
                <li>Startup</li>
                <li>SaaS Business</li>
                <li>Agency</li>
                <li>App Landing</li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-2 gap-6">
            <CardInfo
              ratings={4.5}
              label={"Graphics Designing"}
              description={"Figma, Photoshop, Illustrator etc."}
              amount_per_hour={25}
              card_image={"/assets/images/ai_image_3.jpeg"}
              css_class_name="animate__animated animate__flipInY"
            />

            <CardInfo
              ratings={4.5}
              label={"Frontend Development"}
              description={"React, Redux, Node, Angular etc."}
              amount_per_hour={15}
              card_image={"/assets/images/ai_image_2.jpeg"}
              css_class_name="animate__animated animate__flipInY"
            />
            <CardInfo
              ratings={4.5}
              label={"Mobile Development"}
              description={"React Native."}
              amount_per_hour={15}
              card_image={"/assets/images/ai-mobile-4.jpeg"}
              css_class_name="animate__animated animate__flipInY"
            />

            <CardInfo
              ratings={4.5}
              label={"Application Support"}
              description={"React, Redux, Node, Angular etc."}
              amount_per_hour={15}
              card_image={"/assets/images/support.jpeg"}
              css_class_name="animate__animated animate__flipInY"
            />

            <CardInfo
              ratings={4.5}
              label={"Blockchain Development"}
              description={"Web3, Metamask, Ethereum, Binance etc."}
              amount_per_hour={30}
              card_image={"/assets/images/ai_image_5.jpg"}
              css_class_name="animate__animated animate__flipInY"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
