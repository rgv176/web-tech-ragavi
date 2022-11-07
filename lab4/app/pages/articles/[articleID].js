import { useRouter } from "next/router";
import Footer from "../../component/Footer.js";
import Header from "../../component/Header.js";

function ArticleDetail() {
  const Router = useRouter();
  const articleID = Router.query.articleID;
  return (
    <>
      <Header />
      <h1>Details of Article {articleID}</h1>
      <p>
        Lorem ips dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
        incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostr exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur.
      </p>
      <Footer />
    </>
  );
}
export default ArticleDetail;
