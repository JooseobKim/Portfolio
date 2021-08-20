import { useEffect, FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => setActiveItem(name)}
          className="tracking-wide hover:text-green"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : (
    <span className="font-bold tracking-wider border-b-4 text-green border-green">
      {name}
    </span>
  );
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/pdf") setActiveItem("Download PDF");
  }, [pathname]);

  return (
    <div className="flex justify-center px-5 py-5 border-b dark:border-black">
      <div className="flex space-x-5 text-xl">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Download PDF"
          route="/pdf"
        />
      </div>
    </div>
  );
};

export default Navbar;
