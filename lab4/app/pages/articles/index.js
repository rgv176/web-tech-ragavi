import Link from "next/link";
import Footer from "../../component/Footer.js";
import Header from "../../component/Header.js";

function ArticleList() {
  return (
    <>
      <Header />
      <h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>
      <h2>
        <Link href="/articles/1">
          <a>Article 1</a>
        </Link>
      </h2>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo.
      </p>
      <h2>
        <Link href="/articles/2">
          <a>Article 2</a>
        </Link>
      </h2>
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet, ut et voluptates repudiandae sint et
        molestiae non recusandae.
      </p>

      <h2>
        <Link href="/articles/3">
          <a>Article3</a>
        </Link>
      </h2>
      <p>
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
      <h2>
        <Link href="/articles/4">
          <a>Article 4</a>
        </Link>
      </h2>
      <p>
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
      <Footer />
    </>
  );
}
export default ArticleList;
