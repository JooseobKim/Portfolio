// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { mySkillAndTool } from "../data";

import Head from "next/head";

const About = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>포트폴리오 | About</title>
      </Head>
      <h4 className="my-3 font-medium">
        안녕하십니까. 프론트엔드 개발을 공부하고 있는 김주섭입니다.
      </h4>
      <p>
        프론트엔드 분야는 트렌드가 수시로 바뀌며 지속적인 공부가 필요한
        분야입니다. 제가 처음 공부를 결심했을 때 사설교육, 국비교육, 독학 세
        가지 선택지를 고려하였습니다.
      </p>
      <p className="my-2">
        그러나 사설교육은 많은 돈이 들기 때문에 제외하여 남은 선택지는
        국비교육과 독학이였습니다. 처음에는 국비교육을 신청하려고 하였으나 개발
        직군은 취업 이후에도 꾸준한 공부가 필요한 분야라고 알고 있었기 때문에
        스스로 공부하는 습관과 노하우를 다져서 취업 이후에도 지속적으로 발전할
        수 있도록 독학이라는 공부 방식을 선택을 하게 되었습니다.
      </p>
      <p>
        멈추지 않고 발전하며, 회사에 도움이 될 수 있도록 노력하는 개발자가
        되겠습니다. 감사합니다.
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="mb-3 text-xl font-bold tracking-widest">
          SKILLS &amp; TOOLS
        </h4>
        <motion.div
          className="grid grid-cols-3 gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {mySkillAndTool.map((service, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="bg-gray-200 rounded-lg dark:bg-dark-200"
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
