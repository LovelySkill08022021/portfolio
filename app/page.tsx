import Image from "next/image";
import styles from './page.module.css'
import myimg from '@/public/me.png'
import py_logo from '@/public/py-logo.png'
import ts_logo from '@/public/ts-logo.png'
import js_logo from '@/public/js-logo.png'
import java_logo from '@/public/java-logo.png'
import nodejs_logo from '@/public/nodejs-logo.png'

export default function Home() {
    return (
        <>
            <div className={styles.homepage_main_wrapper_bg}></div>
            <div className={styles.homepage_main_wrapper}>
                <div className={styles.info_wrapper}>
                    <div className={styles.title}>
                        FULL-STACK SOFTWARE DEVELOPER
                    </div>
                    <div className={styles.name}>
                        {"👋 Hello there,"}
                        <br />
                        {"It's Mark Justine Cudapas"}
                    </div>
                    <div className={styles.description}>
                        {"As a Software Engineer, my focus is on transforming your ideas into efficient, scalable, and user-friendly software solutions. Explore my portfolio to discover the value I bring to your projects."}
                    </div>
                    <div className="mt-5">
                        <button className={styles.resume_button}>Resume</button>
                        Contact me @ <b>markjustinecudapas@gmail.com</b>
                    </div>
                </div>
                <div className={styles.myimg_wrapper}>
                    <Image className={styles.myimg} alt="my" src={myimg} />
                </div>
                <Image alt="my" className={styles.nodejs_logo} style={
                    {
                        "position": "absolute",
                        // "height": "100px",
                        "width": "150px",
                        "top": "30px",
                        "left": "1000px",
                        // 'transform': 'rotateZ(5deg)'
                    }
                } src={nodejs_logo} />
                <Image alt="my" className={styles.ts_logo} style={
                    {
                        "position": "absolute",
                        "height": "100px",
                        "width": "100px",
                        "top": "90px",
                        "left": "1200px",
                        'transform': 'rotateZ(5deg)'
                    }
                } src={ts_logo} />
                <Image alt="my" className={styles.js_logo} style={
                    {
                        "position": "absolute",
                        "height": "100px",
                        "width": "100px",
                        "top": "100px",
                        "left": "850px",
                        'transform': 'rotateZ(-20deg)'
                    }
                } src={js_logo} />
                <Image alt="my" className={styles.py_logo} style={
                    {
                        "position": "absolute",
                        "height": "150px",
                        "width": "150px",
                        "top": "250px",
                        "left": "800px",
                        'transform': 'rotateZ(-20deg)'
                    }
                } src={py_logo} />
                <Image alt="my" className={styles.java_logo} style={
                    {
                        "position": "absolute",
                        "height": "150px",
                        "width": "150px",
                        "top": "220px",
                        "left": "1240px",
                        'transform': 'rotateZ(20deg)'
                    }
                } src={java_logo} />
            </div>
        </>
    );
}
