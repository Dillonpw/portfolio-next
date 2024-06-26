import { motion } from "framer-motion";

const Tech = () => {
  const devTools = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Astro",
    "Next",
    "PostgresSQL",
    "Prisma",
    "VS Code",
    "GitHub",
    "Vercel",



  ];
  const otherTools = [
    "Git",
    "Vite",
    "Figma",
    "Expo",
    "Tauri",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      id="tech"
      className="flex mt-40 items-center justify-center p-10 text-center md:mb-20"
    >
      <div className="flex flex-col gap-20">
        <div>
          <p className="pb-2 text-3xl font-bold lg:text-5xl">
            Daily Use
          </p>
          <ul className="flex list-none flex-col items-center justify-center gap-5 pt-5 text-xl lg:flex-row">
            {devTools.map((dt) => (
              <li className="opacity-60" key={dt}>
                {dt}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="pb-2 text-3xl font-bold lg:text-5xl">
            Other Tools
          </p>
          <ul className="flex list-none flex-col items-center justify-center gap-5 pt-5 text-xl lg:flex-row ">
            {otherTools.map((ot) => (
              <li className="opacity-60" key={ot}>
                {ot}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;
