import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { faGithubSquare, faLinkedin, faSquareBehance, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import Link from "next/link";

const interFont = Inter({
  weight: ["200", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact to developer",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container  m-4">
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          <h1 className="text-2xl text-gray-300">Contact</h1>
          <div className="flex flex-col-3 gap-1 top-0">
            <section className="px-8 py-16">
              <div className={`${interFont.className} "mx-auto"`}>
                <div className="mx-auto w-full text-4xl text-center animate__animated animate__fadeInUp">
                  <p>Let&apos;s Keep In Touch!</p>
                  <p>Thank you for visiting out my profile.</p>
                  <p>If you would like to get into contact with me.</p>
                </div>
                <div className="flex gap-6 justify-center py-6 animate__animated animate__fadeInDown">
                  <Link href="https://github.com/TameshwarNirmalkar" className="shadow-amber-100 shadow-2xl">
                    <FontAwesomeIcon icon={faGithubSquare} size="2xl" color="white" style={{ fontSize: 100 }} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/tameshwar" className="shadow-cyan-300 shadow-2xl">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" color="cyan" style={{ fontSize: 100 }} />
                  </Link>
                  <Link href="https://www.behance.net/tameshwar" className="shadow-blue-600 shadow-2xl">
                    <FontAwesomeIcon icon={faSquareBehance} size="2xl" color="blue" style={{ fontSize: 100 }} />
                  </Link>
                  <Link href="https://www.youtube.com/tameshwar" className="shadow-red-600 shadow-2xl">
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2xl" color="#cc0000" style={{ fontSize: 100 }} />
                  </Link>
                  <Link href="https://www.facebook.com/tameshwar" className="shadow-blue-700 shadow-2xl">
                    <FontAwesomeIcon icon={faFacebookSquare} size="2xl" color="#1d48d2" style={{ fontSize: 100 }} />
                  </Link>
                </div>
              </div>

              {/* <div className="container mx-auto border border-gray-500 rounded">
                <div className="grid grid-cols-1">
                  <div className="w-full p-8 bg-gray-900">
                    <div className="mb-2 text-white text-2xl">
                      Contact Information
                    </div>
                    <div className="mx-auto mb-8 text-base text-white">
                      Let&apos;s Keep In Touch! Thank you for visiting out my
                      profile. If you would like to get into contact with me.
                    </div>
                    <div className="flex gap-5 align-middle">
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        className="h-4 w-4 text-orange-400"
                      />
                      <span className="mb-2 text-white">+91 9595617447</span>
                    </div>
                    <div className="flex gap-5 align-middle">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="h-6 w-6 text-orange-400"
                      />
                      <div className="mb-2 text-white">
                        tameshwar.nirmalkar@mail.com
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                    <form action="_">
                      <div className="mb-8 grid gap-2">
                        <label className="text-white">Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          placeholder="eg. Lucas"
                          className="w-full border p-3 rounded"
                        />
                      </div>
                      <div className="mb-8 grid gap-4">
                        <label className="text-white">Email</label>
                        <input
                          type="text"
                          name="email"
                          placeholder="eg. lucas@mail.com"
                          className="w-full border p-3 rounded"
                        />
                      </div>
                      <div className="mb-2 text-white">
                        What are you interested on?
                      </div>
                      <div className="mb-8 grid gap-2">
                        <textarea
                          name="message"
                          className="w-full border p-3 rounded"
                        />
                      </div>
                      <div className="w-full flex justify-end">
                        <button className="w-full bg-amber-500 rounded text-white p-2">
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
