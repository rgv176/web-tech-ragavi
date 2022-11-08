import { useRouter } from "next/router";
import Layout from "../../component/Layout.js";

function ArticleDetail({ article }) {
  const Router = useRouter();
  const articleID = Router.query.articleID;
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          {article.title}
        </h1>
        <br></br>
        <p>{article.message}</p>
      </Layout>
    </>
  );
}
export default ArticleDetail;
