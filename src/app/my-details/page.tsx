import Image from "next/image";
import Link from "next/link";
import MyDetailsLayout from "./layout";

export default function MyDetailsPage() {
  return (
    <MyDetailsLayout>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="container  m-4">
            <div className="max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
              <div className="flex flex-col top-0 animate__animated animate__fadeInLeft">
                <div className="bg-gray-800 border border-gray-900 shadow-lg rounded-2xl p-4 hover:bg-gray-700 hover:cursor-pointer">
                  <div className="flex-none sm:flex">
                    <div className="relative sm:mb-0 mb-3">
                      <Image
                        src="/assets/images/singlePic.png"
                        alt="aji"
                        width={120}
                        height={220}
                        style={{ width: "auto", height: "auto" }}
                        className="object-cover rounded-2xl"
                        priority
                      />
                      <Link
                        href="/"
                        className="absolute -right-2 bottom-2 -ml-3  text-white p-1 text-xs bg-orange-400 hover:bg-orange-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                      <div className="flex items-center justify-between sm:mt-2">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                              Tameshwar Nirmalkar
                            </div>
                            <div className="flex-auto text-gray-400 my-1">
                              <span className="mr-3 ">UI/UX Developer</span>
                              <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                              <span>Chhattishgarh, IND</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-5 w-5 text-yellow-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex-1 inline-flex   items-center ml-2 space-x-2">
                          <a href="/" target="_blank">
                            <svg
                              className=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-orange-500 hover:text-white transition ease-in duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="48"
                              height="48"
                              viewBox="0 0 172 172"
                              style={{ fill: "#4a90e2" }}
                            >
                              <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: "normal" }}
                              >
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#ffffff">
                                  <path d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z"></path>
                                </g>
                              </g>
                            </svg>
                          </a>

                          <a href="https://www.linkedin.com/in/tameshwar-nirmalkar" target="_blank">
                            <svg
                              className="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-orange-500 hover:text-white transition ease-in duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30"
                              height="30"
                              viewBox="0 0 172 172"
                              style={{ fill: "#ffffff" }}
                            >
                              <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: "normal" }}
                              >
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#ffffff">
                                  <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"></path>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <a href="https://twitter.com/tnirmalkar?lang=en" target="_blank">
                            <svg
                              className="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-orange-400 hover:text-white transition ease-in duration-300"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="24"
                              height="24"
                              viewBox="0 0 172 172"
                              style={{ fill: "#ffffff" }}
                            >
                              <g
                                fill="none"
                                fillRule="nonzero"
                                stroke="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: "normal" }}
                              >
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#ffffff">
                                  <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z"></path>
                                </g>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="flex pt-2  text-sm text-gray-400">
                        <div className="flex-1 inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                          </svg>
                          <p className="text-orange-400">1.2k Followers</p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <p className="text-orange-400">10 Components</p>
                        </div>
                        <a
                          href="https://www.behance.net/apnatwit"
                          target="_blank"
                          className="flex-no-shrink bg-orange-400 hover:bg-orange-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-orange-300 hover:border-orange-500 text-white rounded-full transition ease-in duration-300"
                        >
                          DOWNLOAD RESUME
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="grid grid-cols-1 animate__animated animate__fadeInLeft animate__delay-1s">
                <h1 className="text-2xl font-bold py-2 text-gray-200">About Me!</h1>
                <div
                  className="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl
                hover:bg-gray-700 hover:cursor-pointer"
                >
                  <div className="">
                    <div className="p-5 flex-auto justify-center">
                      <div className="text-md text-gray-400 px-4">
                        <ul className="list-none md:list-disc">
                          <li>
                            Working as Freelauncer with around 12 years of experience on front-end React, Angular, Vue,
                            JavaScript based web development.
                          </li>
                          <li>
                            Hands on experience in Nodejs, ReactJs, Redux, Ant Design, Angular, Angular Material, HTML5,
                            CSS3, Tailwind, Bootstrap, SCSS, JavaScript, Rest API.
                          </li>
                          <li>Knowledge of database concepts of SQL such as MongoDB, PostgreSQL, MySql.</li>
                          <li>Worked on Agile Methodology.</li>
                          <li>
                            Attended Adobe UX Trainings and Usability Workshops to Bring UX into Consideraton when
                            Developing Web Applicatons.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="grid grid-cols-1 animate__animated animate__fadeInLeft animate__delay-2s">
                <h1 className="text-2xl font-bold py-2 text-gray-200">My Experience!</h1>
                <div className="flex flex-col p-4 relative justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl hover:bg-gray-700 hover:cursor-pointer">
                  <div className="">
                    <div className="p-5 flex-auto">
                      <div className="text-md text-gray-400">
                        <table className="table-auto w-full">
                          <thead>
                            <tr className="text-left">
                              <th>Company</th>
                              <th>Tenure</th>
                              <th>Company Website</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Scalio</td>
                              <td>2022 - 2023</td>
                              <td>
                                <Link href={"https://scal.io/"} target="_blank">
                                  https://scal.io/
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>FutureRx</td>
                              <td>2021 - 2022</td>
                              <td>
                                <Link href={"https://futurerx.com/"} target="_blank">
                                  https://futurerx.com/
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Mobiquity - Hexaware</td>
                              <td>2019 - 2021</td>
                              <td>
                                <Link href={"https://hexaware.com/"} target="_blank">
                                  https://hexaware.com/
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>Altimetrik</td>
                              <td>2017 - 2019</td>
                              <td>
                                <Link href={"https://www.altimetrik.com/"} target="_blank">
                                  https://www.altimetrik.com/
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="grid grid-cols-1 animate__animated animate__fadeInLeft animate__delay-3s">
                <h1 className="text-2xl font-bold py-2 text-gray-200">Qualification</h1>
                <div className="flex flex-col p-1 relative justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl hover:bg-gray-700 hover:cursor-pointer">
                  <div className="">
                    <div className="p-5 flex-auto">
                      <div className="text-md text-gray-400">
                        <table className="table-auto w-full">
                          <thead>
                            <tr className="text-left">
                              <th>Degree</th>
                              <th>Specialized</th>
                              <th>Year</th>
                              <th>%/Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>B.C.A (Bachelor of Computer Application)</td>
                              <td>Artificial Inteligence</td>
                              <td>2008 - 2011</td>
                              <td>B</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyDetailsLayout>
  );
}
