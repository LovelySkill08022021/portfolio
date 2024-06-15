import Image from "next/image"

export default function ToolIcon({icon_url, title} : {icon_url: string, title: string}){
    return (
        <>
            <Image className="inline me-2 h-7 w-auto" width={1000} height={1000} alt="icon" src={icon_url} title={title} />
        </>
    )
}