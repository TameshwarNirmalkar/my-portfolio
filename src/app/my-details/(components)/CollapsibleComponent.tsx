"use client";
import React, { memo } from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Image from "next/image";
import Link from "next/link";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CollapsibleComponent: React.FC = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "About Me!",
      children: (
        <div className="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
          <div className="">
            <div className="p-5 flex-auto justify-center">
              <div className="text-md text-gray-400 px-4">
                <ul className="list-none md:list-disc">
                  <li>
                    Working as Freelauncer with around 12 years of experience on front-end React, Angular, Vue,
                    JavaScript based web development.
                  </li>
                  <li>
                    Hands on experience in Nodejs, ReactJs, Redux, Ant Design, Angular, Angular Material, HTML5, CSS3,
                    Tailwind, Bootstrap, SCSS, JavaScript, Rest API.
                  </li>
                  <li>Knowledge of database concepts of SQL such as MongoDB, PostgreSQL, MySql.</li>
                  <li>Worked on Agile Methodology.</li>
                  <li>
                    Attended Adobe UX Trainings and Usability Workshops to Bring UX into Consideraton when Developing
                    Web Applicatons.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "My Experience!",
      children: (
        <div className="flex flex-col p-4 relative justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
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
      ),
    },
    {
      key: "3",
      label: "Qualification",
      children: (
        <div className="flex flex-col p-1 relative justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
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
      ),
    },
  ];

  return <Collapse accordion items={items} />;
};

export default memo(CollapsibleComponent);
