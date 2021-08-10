// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-widest">TECH SKILLS</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

/*
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log(services);

  return {
    props: {
      services: data.services,
    },
  };
};
*/

/*
export const getStaticProps = async (context: GetStaticPropsContext) => {
  // calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log(services);

  return {
    props: {
      services: data.services,
    },
  };
};
*/
