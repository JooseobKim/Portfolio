import { FunctionComponent } from "react";
import { Category } from "../type";

export const NaveItem: FunctionComponent<{
  value: Category | "all";
  filterCategory: Function;
  active: string;
}> = ({ value, filterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
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
      <NaveItem value="all" {...props} />
      <NaveItem value="react" {...props} />
      <NaveItem value="mongo" {...props} />
      <NaveItem value="django" {...props} />
      <NaveItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
