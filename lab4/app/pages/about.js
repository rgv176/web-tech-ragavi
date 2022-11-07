import Link from "next/link";
function About() {
  return (
    <>
      <h2>About</h2>

      <p>
        Lorem ips dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostr exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate
        velit esse cill dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
        cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
        id est labor.
      </p>
      <h3>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h3>
      <footer>
        <p>Author: Ragavi and Claude</p>
      </footer>
    </>
  );
}

export default About;
