import { FunctionComponent } from "react";
import { projects } from "../data";
import { IProject } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const DownloadPdf: FunctionComponent<{ project: IProject }> = ({
  project: { pdf },
}) => {
  return (
    <a href={`/assets/${pdf}`} download={`${pdf}`}>
      {pdf}
    </a>
  );
};

const pdf = () => {
  return (
    <motion.div
      className="py-20 m-auto lg:py-0"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="flex flex-wrap justify-center min-h-0"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="px-4 py-2 m-2 border border-gray-400 rounded-sm cursor-pointer hover:border-black dark:hover:border-gray-200"
            key={project.id}
            variants={fadeInUp}
          >
            <DownloadPdf project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default pdf;
