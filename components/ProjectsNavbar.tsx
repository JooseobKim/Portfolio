import { FunctionComponent } from "react";
import { Category } from "../type";

export const NaveItem: FunctionComponent<{
  value: Category | "All";
  filterCategory: Function;
  active: string;
}> = ({ value, filterCategory, active }) => {
  let className = "cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => filterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  filterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NaveItem value="All" {...props} />
      <NaveItem value="React" {...props} />
      <NaveItem value="Node" {...props} />
      <NaveItem value="MongoDB" {...props} />
      <NaveItem value="Next.js" {...props} />
      <NaveItem value="Typescript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
