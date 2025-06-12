import React, { memo } from "react";
import Image from "next/image";

interface CommentsCardI {
  coverImage: string;
  profleImage: string;
  email: string;
  comments: string;
}

const CommentsCard: React.FC<CommentsCardI> = ({ coverImage, profleImage, email, comments }) => {
  return (
    <div className="">
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="cover gradientBg py-3 rounded-t-1xl">
              {/* <Image src={coverImage} width={100} height={100} alt="back thumnails" /> */}
              <div className="flex justify-center items-center">
                <Image
                  alt="circle image"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-white shadow-2xl"
                  src={profleImage}
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-1 break-words">
              <div className="p-4">
                <h3 className="text-2xl text-black-500 text-center">Client Name</h3>
                <div className="text-orange-600 text-center">{email}</div>
                <div>{comments}</div>
              </div>
            </div>
          </div>

          <div className="back gradientBg">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CommentsCard);
