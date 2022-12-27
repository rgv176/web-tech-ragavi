import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Layout from "../../components/Layout.js";
import { supabase } from "../api/supabase";

export default function Article({ article }) {
  const initialState = {
    content: "",
  };
  const supabase = useSupabaseClient();
  const [articleData, setArticleData] = useState(initialState);
  const [message, setMessage] = useState(null);
  const user = useUser();
  const router = useRouter();

  const handleChange = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const createArticle = async () => {
    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          id_articles: article?.id,
          content: articleData.content,
          user_email: user?.email.toLowerCase(),
          user_id: user?.id,
        },
      ])
      .single();
    if (error) {
      setMessage("Sorry, an unexpected error occured. Be sure to be login !");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Thank you for adding an article.</p>
        </div>
      );
      setArticleData(initialState);
      router.push("/articles");
    }
  };
  return (
    <Layout>
      <Head>
        <title>WebTech - {article.title}</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="wt-title">{article.title}</h1>
      <p class>{article.message}</p>
      <div className="my-10 ">
        <h2 className="wt-title">Comments</h2>
        <ul>
          {article.comments.map((comment) => (
            <li key={comment.content} className="my-5">
              <h2 className="font-bold mb-1">
                <p>{comment.content}</p>
              </h2>
              <p>{comment.user_email}</p>
            </li>
          ))}
        </ul>
      </div>
      <form className="[&_span]:block grid gap-3">
        <div>
          <label>
            <span>Comment</span>
            <input
              type="text"
              name="content"
              onChange={handleChange}
              className="dark:text-black"
            />
          </label>
        </div>
        <div>
          <label>
            <span>{user?.email}</span>
          </label>
        </div>
        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
            onClick={createArticle}
          >
            Create comment
          </button>
        </div>
      </form>
      {message && (
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  let article = {};
  let { data, error, status } = await supabase
    .from("articles")
    .select(`id, slug, message, title,comments(user_email,content)`)
    .eq("slug", ctx.params.slug)
    .single();
  if (!error) article = data; // handle errors
  return {
    props: {
      article: article,
    },
  };
}

export async function getStaticPaths(ctx) {
  let articles = [];
  let { data, error, status } = await supabase.from("articles").select(`slug`);
  if (!error) articles = data; // handle errors
  return {
    paths: articles.map(({ slug }) => ({ params: { slug: slug || "404" } })),
    fallback: false,
  };
}
