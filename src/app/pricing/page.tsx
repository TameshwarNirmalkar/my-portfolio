// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Hourly changes of the task",
};

export default function PricePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container  m-4">
        <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
          <h1 className="text-2xl text-gray-300">Pricing</h1>
          <div className="flex flex-col-3 gap-6 top-0">
            <div className="flex-2">
              <div className="shadow-gray-400 rounded-xl bg-gray-800">
                <div className="p-4">
                  <h5 className="text-orange-400 text-2xl">Hourly Basis</h5>
                  <h1 className=" text-gray-200 py-3">
                    <span className="text-2xl">$</span>
                    <span className="text-5xl">15/hr</span>
                  </h1>
                  <div className="p-4">
                    <ul className="text-gray-400 list-disc list-outside">
                      <li>Carefully crafted components</li>
                      <li>Amazing page examples</li>
                      <li>Super friendly support team</li>
                      <li>Awesome Support</li>
                    </ul>
                  </div>
                  {/* <FontAwesomeIcon icon={faUser} color="red" />
                  <FontAwesomeIcon icon={faEnvelope} /> */}
                </div>
              </div>
            </div>
            <div className="flex-2">
              <div className="shadow-gray-400 rounded-xl bg-gray-800">
                <div className="p-4">
                  <h5 className="text-orange-400 text-2xl">Part Time</h5>
                  <h1 className=" text-gray-200 py-3">
                    <span className="text-2xl">$</span>
                    <span className="text-5xl">56/4hr</span>
                  </h1>
                  <div className="p-4">
                    <ul className="text-gray-400 list-disc list-outside">
                      <li>Carefully crafted components</li>
                      <li>Amazing page examples</li>
                      <li>Super friendly support team</li>
                      <li>Awesome Support</li>
                    </ul>
                  </div>
                  {/* <FontAwesomeIcon icon={faUser} color="red" />
                  <FontAwesomeIcon icon={faEnvelope} /> */}
                </div>
              </div>
            </div>
            <div className="flex-2">
              <div className="shadow-gray-400 rounded-xl bg-gray-800">
                <div className="p-4">
                  <h5 className="text-orange-400 text-2xl">Permanent</h5>
                  <h1 className=" text-gray-200 py-3">
                    <span className="text-2xl">$</span>
                    <span className="text-5xl">3000/Year</span>
                  </h1>
                  <div className="p-4">
                    <ul className="text-gray-400 list-disc list-outside">
                      <li>Carefully crafted components</li>
                      <li>Amazing page examples</li>
                      <li>Super friendly support team</li>
                      <li>Awesome Support</li>
                    </ul>
                  </div>
                  {/* <FontAwesomeIcon icon={faUser} color="red" />
                  <FontAwesomeIcon icon={faEnvelope} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
