import Link from "next/link";

export default function Home(){
  return (
    <div>
      
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
      </nav>
    
      
      <div className="a">
          Hi! I‘m Ayesha <br/>
          and. . . I do Design :D
          <h6>(a little bit) </h6>
      </div>

    </div>
  );
}