import type { Metadata } from "next";
import Image from "next/image";

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
            <div className="flex-2">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="cover">
                      <Image
                        src="/assets/images/rotating_card_thumb2.png"
                        width={100}
                        height={100}
                        alt="back thumnails"
                      />
                    </div>
                    <div className="user">
                      <Image
                        alt="circle image"
                        width={100}
                        height={100}
                        className="img-circle"
                        src="/assets/images/rotating_card_profile.png"
                      />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">Inna Corman</h3>
                        <p className="profession">Product Manager</p>

                        <p className="text-center">
                          &apos;I&rsquo;m the new Sinatra, and since I made it
                          here I can make it anywhere, yeah, they love me
                          everywhere&apos;
                        </p>
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
                      <h5 className="motto">
                        To be or not to be, this is my awesome motto!
                      </h5>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">Job Description</h4>
                        <p className="text-center">
                          Web design, Adobe Photoshop, HTML5, CSS3, Corel and
                          many others...
                        </p>

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

            {/* Card 2 */}
            <div className="flex-2">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="cover">
                      <Image
                        alt="thumb img"
                        width={100}
                        height={100}
                        src="/assets/images/rotating_card_thumb.png"
                      />
                    </div>
                    <div className="user">
                      <Image
                        alt="circle img"
                        width={40}
                        height={40}
                        className="img-circle"
                        src="/assets/images/rotating_card_profile.png"
                      />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">Inna Corman</h3>
                        <p className="profession">Product Manager</p>

                        <p className="text-center">
                          &apos;I&rsquo;m the new Sinatra, and since I made it
                          here I can make it anywhere, yeah, they love me
                          everywhere&apos;
                        </p>
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
                      <h5 className="motto">
                        To be or not to be, this is my awesome motto!
                      </h5>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">Job Description</h4>
                        <p className="text-center">
                          Web design, Adobe Photoshop, HTML5, CSS3, Corel and
                          many others...
                        </p>

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

            {/* Card 3 */}

            <div className="flex-2">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="cover">
                      <Image
                        alt="thumb img"
                        width={100}
                        height={100}
                        src="/assets/images/rotating_card_thumb3.png"
                      />
                    </div>
                    <div className="user">
                      <Image
                        alt="circle img"
                        width={100}
                        height={100}
                        className="img-circle"
                        src="/assets/images/rotating_card_profile.png"
                      />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">Inna Corman</h3>
                        <p className="profession">Product Manager</p>

                        <p className="text-center">
                          &apos;I&rsquo;m the new Sinatra, and since I made it
                          here I can make it anywhere, yeah, they love me
                          everywhere&apos;
                        </p>
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
                      <h5 className="motto">
                        To be or not to be, this is my awesome motto!
                      </h5>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">Job Description</h4>
                        <p className="text-center">
                          Web design, Adobe Photoshop, HTML5, CSS3, Corel and
                          many others...
                        </p>

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
          </div>
        </div>
      </div>
    </div>
  );
}
