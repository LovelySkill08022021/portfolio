import Image from 'next/image';
import './Project.css'
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    tools_used?: React.ReactNode;
    image_url: string;
    link?: string;
}
export default function Project({ title, description, tools_used, image_url, link="#" } : Props){
    return (
        <>
            <div className='project lg:w-11/12'>
                <div className='project-info w-full'>
                    <div className='project-title'>
                        {title}
                    </div>
                    <div className='project-description'>
                        {description}
                    </div>
                    {(link != "#" ) && (
                        <div className='mt-3'>
                            <Link className='text-blue-500' href={link} target='_blank' >Visit</Link>
                        </div>
                    )}
                    {tools_used && (
                        <div className='mt-5'>
                            {tools_used}
                        </div>
                    )}  
                </div>
                <div className='project-image' style={{
                    backgroundImage: `url(${image_url})`
                }}></div>
            </div>
        </>
    );
}