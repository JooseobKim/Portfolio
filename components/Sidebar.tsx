import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/images/profile_image.jpg"
        alt="user avatar"
        className="object-cover mx-auto rounded-full"
        width={128}
        height={128}
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Joseph </span>
        Kim
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Front-end Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/assets/resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        <span>Resume</span>
      </a>
      {/* social icon */}
      <div className="flex justify-center w-9/12 mx-auto md:w-full">
        <a href="https://github.com/JooseobKim">
          <div className="flex items-center p-2 space-x-2 border border-gray-500 rounded-md dark:border-white">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
            <span className="font-bold">Github</span>
          </div>
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center px-2 space-x-2">
          <GoLocation />
          <span>Gyeonggi-do, Republic of Korea</span>
        </div>
        <p className="my-2">josephkim9942@gmail.com</p>
        <p className="my-2 tracking-wide">010-5487-9904</p>
      </div>

      {/* email button */}
      <button
        className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:josephkim9942@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-2 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
