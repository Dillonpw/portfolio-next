import NavBar from "../../components/nav";
import Projects from "../../components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Projects | Dillonwalsh.com",
  description: "Explore recent projects and see more work on GitHub.",
  openGraph: {
    title: "Projects | Dillonwalsh.com",
    description: "Explore recent projects and see more work on GitHub.",
    type: "website",
    url: "https://www.dillonwalsh.com/projects",
  },
  twitter: {
    card: "/twiiter-img.png",
    title: "Projects | Dillonwalsh.com",
    description: "Explore recent projects and see more work on GitHub.",
  },
};

const ProjectsPage = () => {
  return (
    <>
      <NavBar>
        <p className="text-center font-mono text-xl lg:text-2xl">Recent Work</p>
      </NavBar>
      <Projects />
      <div className="flex items-center justify-center mt-8 hover:scale-110">
        <Button variant="ghost" className="flex items-center space-x-2">
          <Link target="_blank" href="https://github.com/Dillonpw/">
            More Projects
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  id="githubLink"
                  href="https://github.com/Dillonpw/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="redirect to Github"
                >
                  <FontAwesomeIcon
                    className="h-6 w-6 hover:scale-110"
                    icon={faGithub}
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
    </>
  );
};

export default ProjectsPage;
