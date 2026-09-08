"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-background w-full h-20 flex items-center justify-between px-6">
      <Link href="/" className="text-4xl font-bold text-foreground">
        Tasks<span className="text-[#ea3140]">+</span>
      </Link>

      <nav className="flex items-center gap-6">
        {session && (
          <Link
            href="/dashboard"
            className="bg-[#fafafa] py-1 px-4 rounded-sm text-background font-bold"
          >
            Meu painel
          </Link>
        )}

        {session ? (
          <button
            onClick={() => signOut()}
            className="border border-[#fafafa] py-1 px-4 rounded-sm text-[#fafafa] font-bold"
          >
            Sair
          </button>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="border border-[#fafafa] py-1 px-4 rounded-sm text-[#fafafa] font-bold"
          >
            Acessar
          </button>
        )}
      </nav>
    </header>
  );
}
