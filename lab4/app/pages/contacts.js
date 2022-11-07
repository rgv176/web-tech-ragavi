import Link from "next/link";
import Footer from "../component/Footer.js";
import Header from "../component/Header.js";

function Contact() {
  return (
    <>
      <Header />
      <h2>Contacts</h2>

      <p>
        Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrum exercitationem ullam corporis suscpit laboriosam, nisi ut
        aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h3>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h3>
      <Footer />
    </>
  );
}

export default Contact;
