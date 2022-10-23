import { useRouter } from "next/router";

function ArticleDetail() {
  const Router = useRouter();
  const articleID = Router.query.articleID;
  return (
    <>
      <h1>Details of Article {articleID}</h1>
      <footer>
        <p>Author: Ragavi and Claude</p>
      </footer>
    </>
  );
}
export default ArticleDetail;