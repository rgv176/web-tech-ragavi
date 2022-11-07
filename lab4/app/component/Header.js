import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-slate-200 px-10 py-2">
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <ul className="flex gap-5">
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/articles">Articles</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/about">About us</Link>
        </li>
        <li className="rounded py-1 px-2 hover:bg-slate-600 hover:text-slate-100">
          <Link href="/contacts">Contact us</Link>
        </li>
      </ul>
    </header>
  );
}