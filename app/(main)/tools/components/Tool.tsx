import Image from "next/image";

type Props = {
    tool_image: string;
    tool_label: string;
}

export default function ToolPage({tool_image,tool_label} : Props){
    return (
        <>
            <div className="flex items-center mb-3">
                <Image className="inline-block" height={50} width={50} src={tool_image} alt="image" />
                <div className="ps-3 text-2xl">{tool_label}</div>
            </div>
        </>
    );
}