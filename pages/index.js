import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import Image from "next/image";
import amazonclone from "../public/amazonclone2.jpg";
import weatherapp from "../public/weather.svg";
import piano from "../public/piano.png";
import Quizz from "../public/Quizz.jpg";
import carousel from "../public/carousel.png";
import hangman from "../public/hangman.png";
import Link from "next/link";
import ContactMe from "./ContactMe";
import avatar from "../public/3d-avatar-done.png";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 w-fitgit  ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">DevelopedByMarwane</h1>

            <ul className="flex items-center">
              <span className="bg-cyan-500 text- to-teal-500font-semibold mr-2 px-2.5 py-0.5 rounded dark:from-teal-500 ">
                This website is being updated weekly 😀!
              </span>

              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="transition-all hover:scale-125 duration-[0.5s] cursor-pointer text-2xl"
                />
              </li>
              <button className="download-button transition-all hover:scale-110 duration-[0.5s] bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 font-burtons">
                <a href="CV Portofolio.docx">Download Cv</a>
              </button>
            </ul>
          </nav>

          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden  md:h-96 md:w-96">
            <Image
              src={avatar}
              layout="fill"
              objectfit="cover"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl font-burtons">
              Lhoussni Marwane
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl font-burtons">
              <h1>Developer and Designer</h1>
            </h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
              <a
                href="https://twitter.com/home"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <div className="transition-all hover:scale-110 duration-[0.5s]">
                  <AiFillTwitterCircle />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/marwane-lhoussni-22430b255/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <div className="transition-all hover:scale-110 duration-[0.5s]">
                  <AiFillLinkedin />
                </div>
              </a>
            </div>
          </div>

          <hr></hr>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am at the beginning of my journey,
              <span className="text-teal-500">
                {" "}
                but i am ready to take on a challenge.
              </span>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="imagecontainer">
                {" "}
                <Image src={design} width={100} height={100} alt="" />{" "}
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating elegant designs suited for you.</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="imagecontainer2">
                {" "}
                <Image src={code} width={100} height={100} alt="" />{" "}
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality!
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <hr></hr>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am at the beginning of my journey, but I have made several
              projects
              <span className="text-teal-500"> which you can view below.</span>
            </p>
          </div>
          <div className="imgWrapper mt-5 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ml-16">
              <Link
                href="https://amazon-clone-react-marwane.netlify.app/"
                target={"_blank"}
                className="cursor-pointer"
              >
                <Image
                  className="col-start-1 col-end-2 rounded-lg object-cover transition-all hover:scale-110 duration-[0.5s]"
                  width={300}
                  height={300}
                  layout="responsive"
                  src={amazonclone}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 basis-1/3 flex-1 transition-all hover:scale-110 duration-[0.5s] flex items-center justify-center">
              <Link
                href="https://thebestweatherapp123.netlify.app/"
                target={"_blank"}
                className="cursor-pointer"
              >
                <Image
                  className="rounded-lg object-cover w-[60%] block ml-auto mr-auto pt-16 mb-8"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={weatherapp}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 flex items-center">
              <div className="p-14 transition-all hover:scale-110 duration-[0.5s]">
                <Link
                  href="https://fantastic-piano-app.netlify.app/"
                  target={"_blank"}
                  className="cursor-pointer flex justify-center"
                >
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={piano}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="row-start-2 row-end-3 col-start-1 col-end-2 mt-5  w-[100%] lg:flex-row lg:flex-wrap ">
              <Link
                href="https://quizz-react-appli.netlify.app/"
                target={"_blank"}
                className="cursor-pointer flex justify-center h-[100%] w-[100%]"
              >
                <Image
                  className="rounded-lg transition-all hover:scale-110 duration-[0.5s] h-72"
                  width={300}
                  height={300}
                  layout="responsive"
                  src={Quizz}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-start-1 col-end-2 flex items-center">
              <div className="p-14 transition-all hover:scale-110 duration-[0.5s]">
                <Link
                  href="https://caroussel-marwane.netlify.app"
                  target={"_blank"}
                  className="cursor-pointer flex justify-center"
                >
                  <Image
                    className="rounded-lg object-cover w-[80%]"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={carousel}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-start-2 col-end-3 flex items-center">
              <div className="p-14 transition-all hover:scale-110 duration-[0.5s]">
                <Link
                  href="https://hangman-marwane.netlify.app"
                  target={"_blank"}
                  className="cursor-pointer flex justify-center"
                >
                  <Image
                    className="rounded-lg object-cover w-[80%]"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={hangman}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <hr></hr>
          <ContactMe id="contactMe" />
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            id="myBtn"
            title="Go to top"
          >
            Top
          </button>
        </section>
      </main>
    </div>
  );
}
