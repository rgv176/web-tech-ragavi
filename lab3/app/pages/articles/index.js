import Link from "next/link";

function ArticleList() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/articles/1">
          <a>Article 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/articles/2">
          <a>Article 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/articles/3">
          <a>Article 3</a>
        </Link>
      </h2>
      <h2>
        <Link href="/articles/4">
          <a>Article 4</a>
        </Link>
      </h2>
    </>
  );
}
export default ArticleList;
