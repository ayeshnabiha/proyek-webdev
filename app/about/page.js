import Link from "next/link";
import Image from "next/image";

export default function Home(){
    return(
        <div>
            <nav className="navbar">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Project</Link>
            </nav>

            <div className="container">
                <div className="about">
                    <h1>Hi! I‘m Ayesha (again) :D</h1>
                    <p>
                    I recently learned a lot about web development and have grown a strong interest in this field. 
                    I believe in developing a website there also needs the understanding of creative design.
                    Here are some creative-related works that I have done before.
                    If there is anything u‘d like to discuss with me please hit me up on my contacts.
                    </p>
                    <p>— It would be much pleasure for me to discuss more about design, code, or anything creative with u! 💌</p>

                </div>

                <div className="foto">
                        <Image src="/main.png" alt="about page" width="150" height="200" style={{borderRadius: 35}}/>
                        <a href="https://instagram.com/ayeshnabiha" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <Link href="https://line.me/ti/p/ayeshnabiha">Line</Link>
                        <Link href="https://mailto:ayeshnabiha@gmail.com">Email</Link>

                </div>
            </div>
        </div>
    );
}