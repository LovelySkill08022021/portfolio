import Project from "./components/Project";
import ToolIcon from "./components/ToolIcon";
import './ProjectPage.css'

export default function ProjectPage(){
    return (
        <>
            <div className="block lg:flex w-full justify-between">
                <div className="w-full">
                    <div className="project-header level-1-h">
                        My Projects
                    </div>
                    <Project title="DTrail" description="Designed to enhance productivity, improve information governance, and facilitate efficient knowledge management within organizations. By providing a robust framework for tagging, storing, and locating documents, DTRIL ensures that valuable information is always at your fingertips." tools_used={
                        <>
                            <ToolIcon icon_url="/logos/nodejs.png" title="nodejs" />
                            <ToolIcon icon_url="/logos/laravel.png" title="laravel" />
                            <ToolIcon icon_url="/logos/vuejs.png" title="vuejs" />
                            <ToolIcon icon_url="/logos/inertia.png" title="inertia" />
                        </>
                    } image_url="/project_images/dtrail.jpg" link="https://dtrail.mmsu.edu.ph/" />
                    
                </div>
                <div className="w-full">
                    <Project title="Scorr" description="Scorr revolutionizes student score recording by integrating QR code technology with ready-to-print export formats, providing a fast and accurate system for educational institutions. Whether for daily assessments, exams, or comprehensive evaluations, Scorr offers a cutting-edge solution that enhances efficiency, accuracy, and insight, ensuring that score data is always easily accessible and presentable." tools_used={
                        <>
                            <ToolIcon icon_url="/logos/nodejs.png" title="nodejs" />
                            <ToolIcon icon_url="/logos/nextjs.png" title="nextjs" />
                            <ToolIcon icon_url="/logos/clerk.png" title="clerk" />
                            <ToolIcon icon_url="/logos/ts.png" title="typescript" />
                        </>
                    } image_url="/project_images/scorr.jpg" />
                    
                    
                </div>
            </div>
        </>
    );
}