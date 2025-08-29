import type { SkillID } from "@/data/skills/skills.type";
import type { ReactNode } from "react";
import cSharpIcon from "@assets/icons/C_sharp.svg";
import typescriptIcon from "@assets/icons/Typescript.svg";
import javascriptIcon from "@assets/icons/Javascript.svg";
import htmlIcon from "@assets/icons/HTML5.svg";
import cssIcon from "@assets/icons/CSS3svg.svg";
import tailwindIcon from "@assets/icons/Tailwind.svg";
import dotNetIcon from "@assets/icons/NET.svg";
import microsoftSQLIcon from "@assets/icons/Microsoft_SQL_Server_2025.svg";
import sqlIcon from "@assets/icons/SQL.svg";
import mongoDBIcon from "@assets/icons/MongoDB.svg";
import powershellIcon from "@assets/icons/Powershell.svg";
import bashIcon from "@assets/icons/Bash.svg";
import gitIcon from "@assets/icons/Git.svg";
import githubIcon from "@assets/icons/Github.svg";
import viteIcon from "@assets/icons/Vite.svg";
import npmIcon from "@assets/icons/npm.svg";
import dockerIcon from "@assets/icons/Docker.svg";
import efIcon from "@assets/icons/EntityFramework.svg";
import dapperIcon from "@assets/icons/Dapper.png";

export const iconMap: Map<SkillID, ReactNode> = new Map();

iconMap.set("C#", <img src={cSharpIcon} />);

iconMap.set("Typescript", <img src={typescriptIcon} />);

iconMap.set("Javascript", <img src={javascriptIcon} />);

iconMap.set("HTML", <img src={htmlIcon} />);

iconMap.set("CSS", <img src={cssIcon} />);

iconMap.set("Tailwind", <img src={tailwindIcon} />);

iconMap.set("ASP.NET", <img src={dotNetIcon} />);

iconMap.set("SQL", <img src={sqlIcon} />);

iconMap.set("Microsoft SQL Server", <img src={microsoftSQLIcon} />);

iconMap.set("MongoDB", <img src={mongoDBIcon} />);

iconMap.set("PowerShell", <img src={powershellIcon} />);

iconMap.set("BASH", <img src={bashIcon} />);

iconMap.set("Git", <img src={gitIcon} />);

iconMap.set("Github", <img src={githubIcon} />);

iconMap.set("Vite", <img src={viteIcon} />);

iconMap.set("Docker", <img src={dockerIcon} />);

iconMap.set("NPM", <img src={npmIcon} />);

iconMap.set("EF", <img src={efIcon} />);

iconMap.set("Dapper", <img src={dapperIcon} />);
