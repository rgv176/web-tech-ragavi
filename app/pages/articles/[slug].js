import Layout from "../../component/Layout.js";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Article({ article }) {
  return (
    <Layout>
      <h1 className='class="w-full px-20 py-4 text-2xl underline underline-offset-8'>
        {article.title}
      </h1>
      <p className="italic my-5">
        This page fetches data at build time, excellent for SEO.
      </p>
      <p>{article.message}</p>
    </Layout>
  );
}
export async function getStaticProps(ctx) {
  const response = await fetch(
    `http://localhost:3000/api/articles/${ctx.params.slug}`
  );
  const article = await response.json();
  return {
    props: {
      article: article,
    },
  };
}

export async function getStaticPaths(ctx) {
  const response = await fetch(`http://localhost:3000/api/articles`);
  const articles = await response.json();
  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
    fallback: false,
  };
}
