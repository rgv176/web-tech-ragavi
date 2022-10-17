import Link from "next/link";

function Home() {
  return (
    <div>
      <h1> MENU </h1>
      <h2>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </h2>
      <h2>
        <Link href="/about">
          <a>About</a>
        </Link>
      </h2>
      <h2>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link>
      </h2>
      <footer>
        <p>Author: Ragavi and Claude</p>
      </footer>
    </div>
  );
}

export default Home;
