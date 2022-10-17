import Link from "next/link";

function Home() {
  return (
    <div>
      <h1> MENU </h1>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
    </div>
  );
}

export default Home;
