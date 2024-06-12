import Link from 'next/link';
import './NavBar.css';

export default function NavBar(){
    return (
        <>
            <div className="nav-bar">
                <div className='nav-bar-logo'>
                    <span className='text-blue-500'>M</span>
                    <span className='text-rose-500'>J</span>
                    <span className='text-yellow-500'>C</span>

                </div>
                <div className='nav-bar-button-container'>
                    <Link href='/'>
                        <button className="nav-bar-button">Home</button>
                    </Link>
                    <Link href='/projects'>
                        <button className="nav-bar-button">Projects</button>
                    </Link>
                    <Link href='/tools'>
                        <button className="nav-bar-button">Tools</button>
                    </Link>
                </div>
            </div>
        </>
    );
} 