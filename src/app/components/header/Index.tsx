import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background w-full h-20 flex items-center justify-between px-6">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="text-4xl font-bold text-foreground">
          Tasks<span className="text-[#ea3140]">+</span>
        </Link>
      </div>
      <nav className="flex items-center justify-between gap-6">
        <Link
          href="/dashboard"
          className="bg-[#fafafa] py-1 px-4 rounded-sm text-background font-bold"
        >
          Meu painel
        </Link>
        <Link
          href="/login"
          className="border border-[#fafafa] py-1 px-4 rounded-sm text-[#fafafa] font-bold"
        >
          Acessar
        </Link>
      </nav>
    </header>
  );
}
