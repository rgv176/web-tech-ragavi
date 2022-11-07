import Header from "../component/Header.js";
import Footer from "../component/Footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="py-10 min-h-screen max-w-full md:max-w-2xl md:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}