import { FunctionComponent } from "react";
import { MySkillAndTool } from "../type";
import Image from "next/image";

const ServiceCard: FunctionComponent<{ service: MySkillAndTool }> = ({
  service: { skill, color, Icon },
}) => {
  return (
    <div className="flex flex-col p-3 space-y-1">
      <Icon className="w-full h-full" style={{ color }} />
      <h4 className="font-bold text-center">{skill}</h4>
    </div>
  );
};

export default ServiceCard;
