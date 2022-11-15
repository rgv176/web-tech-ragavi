import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OutlineUserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";

export default function Header() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/profile");
      const profile = await response.json();
      setProfile(profile);
    }
    fetchData();
  }, []);
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
          {profile && (
            <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
              <Link href="/profile">
                <a className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
                  {profile.username}
                  <OutlineUserCircleIcon />
                </a>
              </Link>
            </li>
          )}
        </ul>
        <br></br>
      </header>
    </div>
  );
}
