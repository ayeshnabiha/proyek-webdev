import Link from "next/link";
import Image from "next/image";

export default function Home(){
    return (
        <div>
            <nav className="navbar">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Project</Link>
            </nav>

            <div className="projects">
                <div className="project-list">
                    <div className="project-card">
                        <Image src="/project-1.jpg" alt="Project 1" width="180" height= "150" />
                        <p>Class charity project (2024) </p>
                    </div>

                </div>
            </div>
        </div>
    )
}