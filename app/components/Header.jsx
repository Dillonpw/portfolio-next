"use client";
import NavBar from "./nav.jsx";
import Image from "next/image";
import Dogs from "./dogs.jsx";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        animate={{ x: 10 }}
        className="mx-8 mt-40 flex flex-col items-center justify-center lg:mx-20 lg:flex-row"
      >
        <div className="flex w-full flex-col items-center justify-center gap-4 px-6 lg:w-1/2 lg:items-start lg:justify-start">
          <Image
            src="/Cartoon.jpeg"
            alt="cartoon"
            width={300}
            height={300}
            className="mx-5 rounded-full border-2 dark:border-blue-400"
          />
          <h1 id="home" className="px-5 text-5xl">
            Dillon Walsh
          </h1>
          <h2 className="fade-in-2 px-5 text-2xl opacity-60 md:text-3xl">
            Full Stack Web Developer
          </h2>
          <div
            id="links"
            className="fade-in-3 pr-5 text-slate-900 opacity-60 dark:text-cyan-200 md:ml-5"
          >
            <a
              id="githubLink"
              href="https://github.com/Dillonpw/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Github"
            >
              <FontAwesomeIcon
                className="mr-8 h-8 w-8 hover:scale-110"
                icon={faGithub}
              />
            </a>
            <a
              id="linkedinLnk"
              href="https://www.linkedin.com/in/dillon-walsh-50673b290/"
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Linkedin"
            >
              <FontAwesomeIcon
                className=" h-8 w-8 hover:scale-110"
                icon={faLinkedinIn}
              />
            </a>
          </div>
          <Dogs />
        </div>
        <div className="fade-in-4 flex w-full flex-col items-center px-6 lg:w-1/2 xl:w-1/3">
          <p className="mb-5 rounded-xl pt-5 text-xl text-slate-900 dark:text-cyan-200 lg:text-2xl">
            In 2019, after completing my college education, I took on a position
            as a 911 emergency dispatcher. While this role was challenging, it
            also afforded me the time to explore the many facets of web
            development. Now as a professional web developer I now provide web
            development and support services for some really great people.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
