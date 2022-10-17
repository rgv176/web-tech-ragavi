import Link from "next/link";
function About() {
  return (
    <>
      <h2>About</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <footer>
        <p>Author: Ragavi and Claude</p>
      </footer>
    </>
  );
}

export default About;
