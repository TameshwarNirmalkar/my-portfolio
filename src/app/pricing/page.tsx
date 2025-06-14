import PricingLayout from "./layout";

export default function PricePage() {
  return (
    <PricingLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="container  m-4">
          <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
            <h1 className="text-2xl text-gray-300">Pricing</h1>
            <div className="flex flex-col-3 gap-6 top-0">
              <div className="flex-2">
                <div className="shadow-gray-400 rounded-xl bg-gray-800">
                  <div className="p-4">
                    <h5 className="text-orange-400 text-2xl text-center">Hourly Basis</h5>
                    <h1 className=" text-gray-200 py-3 text-center">
                      <span className="text-2xl">$</span>
                      <span className="text-5xl">
                        15<span className="text-xl">/hr</span>
                      </span>
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
                    <h5 className="text-orange-400 text-2xl text-center">Part Time</h5>
                    <h1 className=" text-gray-200 py-3 text-center">
                      <span className="text-2xl">$</span>
                      <span className="text-5xl">
                        56<span className="text-xl">/4hr</span>
                      </span>
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
                    <h5 className="text-orange-400 text-2xl text-center">Permanent</h5>
                    <h1 className=" text-gray-200 py-3 text-center">
                      <span className="text-2xl">$</span>
                      <span className="text-5xl">
                        3000<span className="text-xl">/Month</span>
                      </span>
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
    </PricingLayout>
  );
}
