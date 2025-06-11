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
    <div className="flex-2">
      <div className="card-container">
        <div className="card">
          <div className="front">
            <div className="cover">
              <Image src={coverImage} width={100} height={100} alt="back thumnails" />
            </div>
            <div className="user">
              <Image alt="circle image" width={100} height={100} className="rounded-full" src={profleImage} priority />
            </div>
            <div className="content">
              <div className="main">
                <h3 className="name">Inna Corman</h3>
                <p className="profession">{email}</p>

                <p className="text-center">{comments}</p>
              </div>
              {/* <div className="footer">
                          <div className="rating">
                            <i className="fa fa-mail-forward"></i> Auto Rotation
                          </div>
                        </div> */}
            </div>
          </div>

          <div className="back">
            <div className="header">
              <h5 className="motto">To be or not to be, this is my awesome motto!</h5>
            </div>
            <div className="content">
              <div className="main">
                <h4 className="text-center">Job Description</h4>
                <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                <div className="stats-container">
                  <div className="stats">
                    <h4>235</h4>
                    <p>Followers</p>
                  </div>
                  <div className="stats">
                    <h4>114</h4>
                    <p>Following</p>
                  </div>
                  <div className="stats">
                    <h4>35</h4>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="social-links text-center">
                <a href="https://creative-tim.com" className="facebook">
                  <i className="fa fa-facebook fa-fw"></i>
                </a>
                <a href="https://creative-tim.com" className="google">
                  <i className="fa fa-google-plus fa-fw"></i>
                </a>
                <a href="https://creative-tim.com" className="twitter">
                  <i className="fa fa-twitter fa-fw"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CommentsCard);
