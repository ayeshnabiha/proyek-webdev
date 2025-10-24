export default function Home(){
    return(
        <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/project">Project</a>
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
                        <img src="/main.png" alt="about page" width="180px" height="240px"/>
                        <a href="http:/instagram.com/ayeshnabiha/">Instagram</a>
                        <a href="https://line.me/ti/p/ayeshnabiha">Line</a>
                        <a href="mailto/ayeshnabiha@gmailcom">Email</a>

                </div>
            </div>
        </div>
    );
}