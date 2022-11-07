import Link from "next/link";

export default function Header() {
  return (
    <div class="underline underline-offset-4 content-evenly ">
      <header class="px-10 py-10">
        <ul className="flex gap-15 text-cyan-700 flex item:start">
          <li class="text-sm  ">
            <Link href="/">
              <a class="text-sm ">Home</a>
            </Link>
          </li>
          <li class="text-sm">
            <Link href="/articles">Articles</Link>
          </li>
          <li class="text-sm">
            <Link href="/about">About us</Link>
          </li>
          <li class="text-sm">
            <Link href="/contacts">Contact us</Link>
          </li>
        </ul>
        <br></br>
      </header>
    </div>
  );
}
