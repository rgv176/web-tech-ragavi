import Link from "next/link";
import Footer from "../component/Footer.js";
import Header from "../component/Header.js";

function Home() {
  return (
    <>
      <Header />
      <h1> MENU </h1>
      <h2>
        <Link href="/articles">
          <a>The articles</a>
        </Link>
      </h2>
      <h2>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </h2>
      <h2>
        <Link href="/contacts">
          <a>Contact us</a>
        </Link>
      </h2>
      <Footer />
    </>
  );
}

export default Home;
