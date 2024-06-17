import Project from "./components/Project";
import ToolIcon from "./components/ToolIcon";
import './ProjectPage.css'

export default function ProjectPage(){
    type ToolsUsed = {
        icon_url: string;
        title: string;
    }
    type Project = {
        title: string;
        description: string;
        tools_used: ToolsUsed[];
        image_url: string;
        link?: string;
    }

    type ProjectInfoContainer = {
        left: Project[],
        right: Project[],
    }

    const projects: ProjectInfoContainer = {
        left: [
            {
                title: "Dtrail",
                description: "Designed to enhance productivity, improve information governance, and facilitate efficient knowledge management within organizations. By providing a robust framework for tagging, storing, and locating documents, DTrail ensures that valuable information is always at your fingertips.",
                tools_used: [
                    { icon_url: "/logos/nodejs.png", title: "nodejs" },
                    { icon_url: "/logos/laravel.png", title: "laravel" },
                    { icon_url: "/logos/vuejs.png", title: "vuejs" },
                    { icon_url: "/logos/inertia.png", title: "inertia" }
                ],
                image_url: "/project_images/dtrail.jpg",
                link: "https://dtrail.mmsu.edu.ph/"
            },
            {
                title: "Farm Machinery Management System",
                description: "A comprehensive, digital platform designed to optimize the management, maintenance, and operation of farm machinery. This system integrates various functionalities to streamline agricultural processes, improve efficiency, and reduce operational costs.",
                tools_used: [
                    { icon_url: "/logos/laravel.png", title: "laravel" }
                ],
                image_url: "/project_images/machinery2.jpg"
            },
            {
                title: "Integrated Farm Analytics",
                description: "An advanced digital platform designed to provide comprehensive, data-driven insights into all aspects of farm management. This system consolidates data from various farming operations, including crop production, livestock management, machinery usage, and environmental factors, to enhance decision-making, improve efficiency, and promote sustainability.",
                tools_used: [
                    { icon_url: "/logos/laravel.png", title: "laravel" }
                ],
                image_url: "/project_images/ida1.jpg"
            },
            
        ],
        right: [
            {
                title: "Scorr",
                description: "Scorr revolutionizes student score recording by integrating QR code technology with ready-to-print export formats, providing a fast and accurate system for educational institutions. Whether for daily assessments, exams, or comprehensive evaluations, Scorr offers a cutting-edge solution that enhances efficiency, accuracy, and insight, ensuring that score data is always easily accessible and presentable.",
                tools_used: [
                    { icon_url: "/logos/nodejs.png", title: "nodejs" },
                    { icon_url: "/logos/next.png", title: "nextjs" },
                    { icon_url: "/logos/react.png", title: "react" },
                    { icon_url: "/logos/ts.png", title: "typescript" },
                    { icon_url: "/logos/clerk.png", title: "clerk" }
                ],
                image_url: "/project_images/scorr.jpg"
            },
            {
                title: "Piggery Management System",
                description: "A specialized digital platform designed to optimize the management of pig farming operations. This system facilitates the efficient handling of various aspects of pig farming, including animal health, breeding, feeding, and environmental management, ensuring better productivity, profitability, and sustainability.",
                tools_used: [
                    { icon_url: "/logos/laravel.png", title: "laravel" }
                ],
                image_url: "/project_images/piggery3.jpg"
            },
            {
                title: "Poultry Management System",
                description: "A sophisticated digital platform designed to streamline and optimize the management of poultry farming operations. This system addresses various aspects of poultry farming, including flock management, health monitoring, feeding, egg production, and environmental control, to enhance productivity, profitability, and sustainability.",
                tools_used: [
                    { icon_url: "/logos/laravel.png", title: "laravel" }
                ],
                image_url: "/project_images/poultry3.jpg"
            },

        ]
    }

    return (
        <>
            <div className="block lg:flex w-full justify-between">
                <div className="w-full">
                    <div className="project-header level-1-h">
                        My Projects
                    </div>
                    {projects.left.map((project: Project, index: number) => (
                        <Project key={index} title={project.title} description={project.description} tools_used={
                            project.tools_used.map((tool_used: ToolsUsed, tool_index: number) => (
                                <ToolIcon key={tool_index} icon_url={tool_used.icon_url} title={tool_used.title} />
                            ))
                        } image_url={project.image_url} link={project.link} />
                    ))}
                </div>
                <div className="w-full">
                    {projects.right.map((project: Project, index: number) => (
                        <Project key={index} title={project.title} description={project.description} tools_used={
                            project.tools_used.map((tool_used: ToolsUsed, tool_index: number) => (
                                <ToolIcon key={tool_index} icon_url={tool_used.icon_url} title={tool_used.title} />
                            ))
                        } image_url={project.image_url} link={project.link} />
                    ))}
                </div>
            </div>
        </>
    );
}