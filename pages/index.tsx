import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Home: NextPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Update counter value on page load
  // Retrieve updated counter value from API
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const response = await axios.get(
          "https://76ycsxgr5k.execute-api.us-east-1.amazonaws.com/PROD"
        );
        console.log(
          "Response to retrieving counter value:",
          response.data.body
        );
        setVisitorCount(response.data.body.count);
      } catch (error: any) {
        console.log(
          "Error in retrieving visitor counter value:",
          error.message
        );
      }
    };

    const postData = async () => {
      try {
        const response = await axios.post(
          "https://76ycsxgr5k.execute-api.us-east-1.amazonaws.com/PROD"
        );
        console.log("Response to updating counter value:", response.data);
      } catch (error: any) {
        console.log("Error in updating counter value:", error.message);
      }
    };

    postData();
    retrieveData();
  }, []);

  return (
    <div
      id="container"
      className="m-0 flex h-full w-full flex-col items-center justify-center bg-neutral-300"
    >
      <Head>
        <title>Antonio Riccelli - Resume</title>
        <meta name="description" content="Cloud Resume Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* WRAPPER FOR SIDEBAR AND MAIN */}
      <div
        className="flex h-full flex-col-reverse shadow-2xl shadow-black md:m-5 md:flex-row lg:w-6/12"
        id="content-wrapper"
      >
        {/* SIDEBAR */}
        <section
          id="sidebar"
          className="hidden bg-slate-900 text-white sm:flex md:w-2/4 md:flex-col"
        >
          <section id="picture-section" className="relative">
            <Image
              src={"/profile.jpg"}
              alt="profile picture"
              objectFit={"cover"}
              width={400}
              height={400}
              className="sm:w-400 sm:h-400 hidden sm:block sm:object-cover"
            />
          </section>

          <div className={"md:p-2 lg:p-5"}>
            <section
              id="personal-details-section"
              className="flex flex-col break-words"
            >
              <section id="email-section" className="flex flex-col md:p-2">
                <div className="contact" id="email">
                  <p className={"bg-yellow-300"}>
                    <span
                      className={
                        "inline-block bg-slate-700 md:w-4/5 md:p-1 md:text-lg"
                      }
                    >
                      Email
                    </span>
                  </p>
                  <p className={"text-base md:p-1"}>anton.riccelli@gmail.com</p>
                </div>
              </section>

              <section id="phone-section" className="flex flex-col md:p-2">
                <div className="phone" id="phone">
                  <p className={"bg-yellow-300"}>
                    <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                      Phone
                    </span>{" "}
                  </p>
                  <p className={"p-1 text-base"}>0000000000</p>
                </div>
              </section>

              <section id="address-section" className="flex flex-col p-2">
                <p className={"bg-yellow-300"}>
                  <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                    Address
                  </span>
                </p>
                <p className={"p-1 text-base"} id="address">
                  Guildford
                </p>
              </section>

              <section id="website-section" className="flex flex-col p-2">
                <p className={"bg-yellow-300"}>
                  <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                    Website
                  </span>
                </p>
                <a
                  className={"p-1 text-base"}
                  href="https://www.antonioriccelli.com"
                >
                  antonioriccelli.com
                </a>
              </section>
            </section>

            {/* EDUCATION */}
            <section
              id="education-section"
              className="flex flex-col space-y-5 p-2"
            >
              <h2
                className={
                  "border-b-2 border-solid border-b-yellow-400 text-3xl"
                }
              >
                Education
              </h2>
              <section className={""} id="education-entry">
                <p className="text-lg font-bold">
                  Full Stack Development Bootcamp
                </p>
                <p className={"text-base"}>School of Code</p>
                <p className={"text-base"}>2021 - 2022</p>
              </section>
              <section id="education-entry" className="">
                <p className={"text-lg font-bold"}>
                  Bachelor&apos;s Degree in Foreign Languages and Literatures
                </p>
                <p className={"text-base"}>Naples Eastern University</p>
                <p className={"text-base"}>2011 - 2015</p>
              </section>
            </section>
          </div>
        </section>

        {/* MAIN SECTION */}
        <main
          id="main"
          className="flex w-full flex-col bg-white pb-10 space-y-10"
        >
          {/* HEADER */}
          <header
            id="header"
            className={
              "flex flex-col justify-center bg-yellow-400 p-10 pb-5 text-center align-middle sm:pb-10"
            }
          >
            <h1 className="text-center text-5xl font-bold sm:text-left">
              Antonio Riccelli
            </h1>
            <h2 className="text-center text-3xl sm:text-left">
              Full Stack Developer
            </h2>
          </header>

          {/* PERSONAL DETAILS SECTION FOR MOBILE ONLY */}
          <section
            id="personal-details-section"
            className="m-0 mx-auto mb-5 flex w-screen flex-col justify-center break-words bg-slate-900 p-0 align-middle text-white sm:hidden md:hidden lg:hidden xl:hidden"
          >
            <section id="email-section" className="flex flex-col">
              <div className="" id="email">
                <p className={"bg-yellow-300"}>
                  <span
                    className={"inline-block w-4/5 bg-slate-700 p-1 text-lg"}
                  >
                    Email
                  </span>
                </p>
                <p className={"p-1 text-base"}>anton.riccelli@gmail.com</p>
              </div>
            </section>

            <section id="phone-section" className="flex flex-col">
              <div className="phone" id="phone">
                <p className={"bg-yellow-300"}>
                  <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                    Phone
                  </span>
                </p>
                <p className={"p-1 text-base"}>0000000000</p>
              </div>
            </section>

            <section id="address-section" className="flex flex-col py-2">
              <p className={"bg-yellow-300"}>
                <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                  Address
                </span>
              </p>
              <p className={"p-1 text-base"} id="address">
                Guildford
              </p>
            </section>

            <section id="website-section" className="flex flex-col py-2">
              <p className={"bg-yellow-300"}>
                <span className={"block w-4/5 bg-slate-700 p-1 text-lg"}>
                  Website
                </span>
              </p>
              <a
                className={"p-1 text-base"}
                href="https://www.antonioriccelli.com"
              >
                antonioriccelli.com
              </a>
            </section>
          </section>

          <section className="space-y-2 px-20" id="cv-section-summary">
            <h2 className={"border-b-2 border-black pb-2 text-3xl"}>
              About Me
            </h2>
            <div className="text-base">
              <p>
                Full Stack MERN developer with experience in the pharma field.
                Cloud and serverless enthusiast.
              </p>
              <br />
              <p>
                Past experiences in hospitality, banking and supply chain, where
                I have collaborated with teams at an international level and
                been a key stakeholder in digitalisation and process improvement
                projects.
              </p>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="space-y-2 px-20" id="cv-section-techstack">
            <h2 className={"border-b-2 border-black pb-2 text-3xl"}>
              Technologies
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 text-base break-words">
              <li>SASS</li>
              <li>TailwindCSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>SQL</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Jest</li>
              <li>AWS</li>
              <li>Python</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </section>

          <section className="space-y-2 px-20" id="cv-section-projects">
            <h2 className={"border-b-2 border-black pb-2 text-3xl"}>
              Projects
            </h2>
            <div
              className="border-l-4 border-solid pl-1 text-base"
              aria-roledescription="project"
            >
              <h3 className="text-lg font-bold">Cloud Resume Challenge</h3>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-base"
                id="projectLink"
              >
                Link
              </a>
              <p className="text-base" id="projectDescription">
                Full stack app built in a team of six as final four-week
                project, using React, CSS, MongoDB, Mongoose, following Agile
                methodology.
              </p>
            </div>

            <div
              className="border-l-4 border-solid pl-1 text-base"
              aria-roledescription="project"
            >
              <h3 className="text-lg font-bold">Fight For Apollo</h3>
              <a
                href="https://fight-for-apollo.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="text-base"
              >
                Link
              </a>
              <p className="text-base">
                A Tic Tac Toe game with a personal touch, based on the movie
                Rocky IV.
              </p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Markdown Previewer</h3>
              <a
                href="https://markdown-previewer-reactjs-fcc.netlify.app/"
                rel="noreferrer"
                target="_blank"
                className="text-base"
              >
                Link
              </a>
              <p className="text-base">Built using React and CSS.</p>
            </div>
          </section>

          <section className="space-y-2 px-20" id="cv-section-certifications">
            <h2 className={"border-b-2 border-black pb-2 text-3xl"}>
              Certifications
            </h2>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Responsive Web Design</h3>
              <h4>freeCodeCamp</h4>
              <a
                href="https://www.freecodecamp.org/certification/antonioriccelli/responsive-web-design"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">
                JavaScript Algorithms and Data Structures
              </h3>
              <h4>freeCodeCamp</h4>
              <a
                href="https://www.freecodecamp.org/certification/antonioriccelli/javascript-algorithms-and-data-structures"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">
                Front End Development Libraries
              </h3>
              <h4>freeCodeCamp</h4>
              <a
                href="https://www.freecodecamp.org/certification/antonioriccelli/front-end-development-libraries"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">
                Back End Development and APIs
              </h3>
              <h4>freeCodeCamp</h4>
              <a
                href="https://www.freecodecamp.org/certification/antonioriccelli/back-end-development-and-apis"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">
                Certified Cloud Practitioner
              </h3>
              <h4>Amazon Web Services</h4>
              <a
                href="https://www.credly.com/badges/17da2ac2-f2b8-4489-9916-8a8cfc212ca3?source=linked_in_profile"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </div>

            <section className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">
                Solutions Architect Associate
              </h3>
              <h4>Amazon Web Services</h4>
              <a
                href="https://www.credly.com/badges/d375cea0-088d-466a-aca1-9abe992f7e17/linked_in_profile"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </section>

            <section className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Cloud Essentials</h3>
              <h4>CompTIA</h4>
              <a
                href="https://www.credly.com/badges/0fc38f7b-8736-42f6-9dc5-8044bda3e8c3/linked_in_profile"
                rel="noreferrer"
                className="projectLink"
                target="_blank"
              >
                Link
              </a>
            </section>
          </section>

          <section className="space-y-2 px-20" id="cv-section-workexperience">
            <h2 className={"border-b-2 border-black pb-2 text-3xl"}>
              Work Experience
            </h2>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Junior Full-Stack Developer</h3>
              <h4>Queen Square Analytics</h4>
              <p>2022 - 2023</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Supply Chain Planner</h3>
              <h4>Britannia Pharmaceuticals</h4>
              <p>2021</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Supply Chain Analyst</h3>
              <h4>Ashfield Healthcare UDG</h4>
              <p>2019 - 2021</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Customer Service Executive</h3>
              <h4>Ashfield Healthcare UDG</h4>
              <p>2018 - 2019</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Moment Banker</h3>
              <h4>Barclays Bank</h4>
              <p>2017 - 2018</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Essential Banker</h3>
              <h4>Barclays Bank</h4>
              <p>2016 - 2017</p>
            </div>

            <div className="border-l-4 border-solid pl-1 text-base">
              <h3 className="text-lg font-bold">Barista</h3>
              <h4>Costa Coffee</h4>
              <p>2015 - 2016</p>
            </div>
          </section>

          {/* EDUCATION SECTION FOR MOBILE ONLY */}
          <section
            id="education-section"
            className="mb-5 flex flex-col space-y-2 p-2 px-20 text-base sm:hidden"
          >
            <h2
              className={"border-b-2 border-solid border-b-yellow-400 text-3xl"}
            >
              Education
            </h2>
            <section
              className={"border-l-4 border-solid pl-1"}
              id="education-entry"
            >
              <p className="text-lg font-bold">
                Full Stack Development Bootcamp
              </p>
              <p className={"text-base"}>School of Code</p>
              <p className={"text-base"}>2021 - 2022</p>
            </section>
            <section
              id="education-entry"
              className="border-l-4 border-solid pl-1"
            >
              <p className={"text-lg font-bold"}>
                Bachelor&apos;s Degree in Foreign Languages and Literatures
              </p>
              <p className={"text-base"}>Naples Eastern University</p>
              <p className={"text-base"}>2011 - 2015</p>
            </section>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="inline-block">
        {/* COUNTER */}
        <section
          id="counter"
          className="m-4 flex flex-col border border-solid border-slate-100 bg-white text-center shadow-md shadow-black"
        >
          <h2 className={"w-full bg-yellow-400 p-2 font-black"}>
            Visitor Counter
          </h2>
          <p className={"w-full p-2 text-center"}>{visitorCount}</p>
        </section>
      </footer>
    </div>
  );
};

export default Home;
