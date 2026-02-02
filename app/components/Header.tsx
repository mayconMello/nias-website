import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-zinc/20">
      <nav className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Nias AI Logo Branco.png"
            alt="Nias AI"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* <div className="hidden md:flex items-center gap-6"> */}
        <div className="hidden md:flex items-center gap-12">
          {/* <Link
            href="/blog"
            className="text-xl text-foreground/80 hover:text-foreground transition-colors"
          >
            Blog
          </Link> */}
          <Link href="#demo">
            {/* <button className="px-6 py-2 rounded-full bg-nias-blue text-foreground font-medium hover:bg-nias-blue/90 transition-colors"> */}
            <button className="px-8 py-3 text-lg rounded-full bg-nias-blue text-foreground font-medium hover:bg-nias-blue/90 transition-colors">
              Solicitar demonstração
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
