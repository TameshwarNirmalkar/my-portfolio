import Image from "next/image";
import React, { memo } from "react";

interface CardInfoI {
  ratings: number;
  label: string;
  description: string;
  amount_per_hour: number;
  card_image: string;
  css_class_name?: string;
}

const CardInfo: React.FC<CardInfoI> = ({
  ratings,
  label,
  description,
  amount_per_hour,
  card_image,
  css_class_name = "",
}) => {
  return (
    <div className={`p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl ${css_class_name}`}>
      <div className="flex-none lg:flex">
        <div className="h-full w-full lg:h-30 lg:w-30 lg:mb-0 mb-3">
          <Image
            src={card_image || "/assets/images/support.jpeg"}
            alt={label}
            width={100}
            height={110}
            className=" w-full object-scale-down lg:object-cover rounded-2xl"
          />
        </div>
        <div className="flex-auto lg:ml-3 justify-evenly py-2">
          <div className="flex flex-col ">
            <div className="flex items-center mr-auto text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-300 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="font-normal text-gray-500">{ratings}</p>
            </div>
            <div className="flex items-center  justify-between min-w-0">
              <h2 className="mr-auto   text-base text-gray-100 font-medium truncate">{label}</h2>
              <div className="flex items-center font-medium text-gray-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {amount_per_hour}
                <span className="text-gray-500 text-sm font-normal">/Hour</span>
              </div>
            </div>
            <p className="flex items-center text-sm text-gray-400">
              {description}
              <span className="relative inline-flex rounded-md shadow-sm ml-2">
                <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </span>
            </p>
          </div>
          {/* Button Section */}
          {/* <div className="flex space-x-3 text-sm font-medium">
                      <button
                        className="cursor-pointer mb-2 md:mb-0 flex-no-shrink bg-orange-400 hover:bg-orange-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-orange-300 hover:border-orange-500 text-white rounded-full transition ease-in duration-300"
                        type="button"
                        aria-label="like"
                      >
                        Book Now
                      </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default memo(CardInfo);
