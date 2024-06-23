import Tool from './components/Tool';

export default function ProjectPage(){

    const tools = [
        {tool_image: '/logos/py.png', tool_label: "Python"},
        {tool_image: '/logos/nodejs.png', tool_label: "Node.js"},
        {tool_image: '/logos/next.png', tool_label: "NEXT.js"},
        {tool_image: '/logos/react.png', tool_label: "React"},
        {tool_image: '/logos/vuejs.png', tool_label: "Vue.js"},
        {tool_image: '/logos/js.png', tool_label: "JavaScript"},
        {tool_image: '/logos/ts.png', tool_label: "TypeScript"},
        {tool_image: '/logos/laravel.png', tool_label: "Laravel"},
        {tool_image: '/logos/inertia.png', tool_label: "Inertia"},
        {tool_image: '/logos/java.png', tool_label: "Java"},
    ]

    return (
        <> 
            {
                tools.map((tool: any, index: number) => (
                    <Tool key={index} tool_image={tool.tool_image} tool_label={tool.tool_label} />
                ))
            }
        </>
    );
}