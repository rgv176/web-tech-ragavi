import { useRouter } from "next/router";
import Layout from "../../component/Layout.js";

function ArticleDetail() {
  const Router = useRouter();
  const articleID = Router.query.articleID;
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          Details of Article {articleID}
        </h1>
        <br></br>
        <p>
          Lorem ips dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostr exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur.
        </p>
      </Layout>
    </>
  );
}
export default ArticleDetail;
