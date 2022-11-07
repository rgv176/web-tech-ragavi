import Link from "next/link";
import Layout from "../../component/Layout.js";

function ArticleList() {
  return (
    <>
      <Layout>
        <h1 class="w-full px-20 py-4 text-2xl underline underline-offset-8 ">
          Articles
        </h1>
        <br></br>
        <h2>
          <Link href="/articles/1">
            <a>Article 1</a>
          </Link>
        </h2>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo.
        </p>
        <br></br>
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
        <br></br>
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
        <br></br>
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
      </Layout>
    </>
  );
}
export default ArticleList;
