import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";

import {
  faUser,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex flex-col-3 gap-6 top-0">
            <section className="px-8 py-16">
              <div className="container mx-auto mb-20 text-center">
                <div className="mb-4 text-gray-100">Contact Us</div>
                <div className="mx-auto w-full lg:w-5/12 !text-gray-500">
                  Ready to get started? Feel free to reach out through the
                  contact form, and let&apos;s embark on a journey of innovation
                  and success.
                </div>
              </div>

              <div className="container mx-auto border border-gray-500 rounded">
                <div className="grid grid-cols-1">
                  <div className="w-full p-8 bg-gray-900">
                    <div className="mb-2 text-white text-2xl">
                      Contact Information
                    </div>
                    <div className="mx-auto mb-8 text-base text-white">
                      Fill up the form and our Team will get back to you within
                      24 hours.
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
                    <form action="#">
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
