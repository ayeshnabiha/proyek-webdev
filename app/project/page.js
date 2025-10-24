export default function Home(){
    return (
        <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/project">Project</a>
            </nav>

            <div className="projects">
                <div className="project-list">
                    <div className="project-card">
                        <img src="/project-1.jpg" alt="Project 1" />
                        <p>Class charity project (2024) </p>
                    </div>

                </div>
            </div>
        </div>
    )
}