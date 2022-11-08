import Link from "next/link";
import Layout from "../../component/Layout.js";

function ArticleList({ articles }) {
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          Articles
        </h1>
        <br></br>
        <ul>
          {articles.map((article) => (
            <li key={article.slug} className="my-5">
              <h2 className="font-bold mb-1">
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.message}</p>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
export default ArticleList;
