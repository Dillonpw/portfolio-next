"use client";
import images from "../components/Images";
import { Suspense, useEffect } from "react";
import ThemeToggle from "../components/theme";
import Link from "next/link";
import Skeleton from "../components/Skeleton";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import logo from "/public/logo.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectPage = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const renderContent = () => {
    const project = images.find((image) => image.id === projectId);

    if (!project) {
      return <div>Oops! there&apos;s nothing here...</div>;
    }

    return (
      <motion.main
        className=""
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="pb-15 mx-8 flex flex-row items-center justify-between p-4 pt-6">
          <Link
            href="/"
            id="logo"
            className="justify-start px-2 hover:scale-105"
          >
            <Image className="" src={logo} alt="Logo" />
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center px-4 xl:flex-row">
          <h2 className="m-6 text-center text-4xl font-bold">
            {project.title}
          </h2>

          <Suspense fallback={<Skeleton />}>
            <Image
              className="w-100 m-2 h-auto items-center justify-center rounded-2xl border-2 border-black bg-slate-700 dark:border-white"
              src={project.src}
              alt={project.title}
              width={500}
              height={300}
            />
          </Suspense>

          {project.mobileImg && (
            <Suspense fallback={<Skeleton />}>
              <Image
                className="h-100 w-auto items-center justify-center rounded-2xl border-2 border-black bg-slate-700 dark:border-white"
                src={project.mobileImg}
                alt={project.title}
                width={300}
                height={500}
              />
            </Suspense>
          )}
        </div>

        <div className="mt-4 flex justify-center pb-6">
          <div className="group relative">
            <a
              id={`github link ${projectId}`}
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="redirect to Github"
            >
              <FontAwesomeIcon
                className="mx-4 h-8 w-8 hover:scale-110"
                icon={faGithub}
              />
            </a>
            <div className="absolute top-full mb-2 hidden w-max rounded-lg bg-black px-2 py-1 text-sm text-white group-hover:block dark:bg-gray-200 dark:text-neutral-950">
              Source Code
            </div>
          </div>
          {project.livePreviewLink && (
            <div className="group relative">
              <a
                className="mx-4 h-8 w-8 hover:scale-110"
                id={`live preview link ${projectId}`}
                href={project.livePreviewLink}
                target="_blank"
                rel="noreferrer"
                aria-label="redirect to live preview"
              >
                <FontAwesomeIcon
                  className="h-8 w-8 hover:scale-110"
                  icon={faUpRightFromSquare}
                />
              </a>
              <div className="absolute top-full mb-2 hidden w-max rounded-lg bg-black px-2 py-1 text-sm text-white group-hover:block dark:bg-gray-200 dark:text-neutral-950">
                Live Preview
              </div>
            </div>
          )}
        </div>
        <section className="ml-4 flex flex-col items-center justify-center">
          <h3 className="mt-8 text-xl font-bold">About This Project</h3>
          <p className="max-w-100 px-8 text-left opacity-60">{project.about}</p>
          <h3 className="mt-8 text-xl font-bold">Challenges</h3>
          <p className="max-w-100 mb-10 px-8 text-left opacity-60">
            {project.challenge}
          </p>
        </section>
      </motion.main>
    );
  };

  return <div>{renderContent()}</div>;
};

export default ProjectPage;
