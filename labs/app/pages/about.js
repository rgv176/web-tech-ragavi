import Link from "next/link";

import Layout from "../components/Layout.js";

function About() {
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          About Us
        </h1>
        <br></br>
        <p class="px-10">
          Lorem ips dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostr exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cill dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est labor.
        </p>
      </Layout>
    </>
  );
}

export default About;
