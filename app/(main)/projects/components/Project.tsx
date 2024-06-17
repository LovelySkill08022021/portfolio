'use client';

import Image from 'next/image';
import './Project.css'
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';

type Props = {
    title: string;
    description: string;
    tools_used?: React.ReactNode;
    image_url: string;
    link?: string;
}
export default function Project({ title, description, tools_used, image_url, link="#" } : Props){

    const [description_clamp, setDescriptionClamp] = useState<any>("unset");
    const [see_more_button_visibility, setSeeMoreButtonVisibility] = useState<boolean>(false);
    const clamper_id = useId();

    function toggleDescriptionClamp(){
        if(description_clamp == 2){
            setDescriptionClamp('unset');
        } else {
            setDescriptionClamp(2);
        }
    }

    function SeeMoreButton(){
        return (
            <div className='text-slate-600 cursor-pointer mt-1' onClick={toggleDescriptionClamp}>
                {description_clamp == 2 ? "See more" : "See less"}
            </div>
        )
    }

    useEffect(() => {
        let clamper = document.getElementById(clamper_id);
        if(clamper){
            if(clamper.clientHeight > 40){
                setSeeMoreButtonVisibility(true);
                setDescriptionClamp(2)
            }
        }

    },[]);

    return (
        <>
            <div className='project lg:w-11/12'>
                <div className='project-info w-full'>
                    <div className='project-title'>
                        {title}
                    </div>
                    <div id={clamper_id} className={'project-description'} style={{
                        WebkitLineClamp: description_clamp
                    }}>
                        {description}
                    </div>
                    {see_more_button_visibility && <SeeMoreButton />}
                    {(link != "#" ) && (
                        <div className='mt-3'>
                            <Link className='text-blue-500' href={link} target='_blank' >Visit</Link>
                        </div>
                    )}
                    {tools_used && (
                        <div className='mt-5 text-slate-500'>
                            <span>Built with:</span> <br /> {tools_used}
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