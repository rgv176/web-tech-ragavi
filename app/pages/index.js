import Link from "next/link";
import Layout from "../components/Layout.js";

function Home() {
  return (
    <>
      <Layout>
        <h1 class="text-2xl px-10 py-2"> MENU </h1>
        <h2>
          <Link href="/articles">
            <a class="px-3 text-teal-900 text-2xl underline underline-offset-2  ">
              The articles
            </a>
          </Link>
        </h2>
        <h2>
          <Link href="/about">
            <a class=" px-3 text-teal-900 text-2xl underline underline-offset-2 ">
              About us
            </a>
          </Link>
        </h2>
        <h2>
          <Link href="/contacts">
            <a class="px-3 text-teal-900 text-2xl underline underline-offset-2 ">
              Contact us
            </a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}

export default Home;
