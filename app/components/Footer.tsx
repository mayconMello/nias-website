import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc/20 bg-background">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Links de Termos e Política */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/termos-de-uso"
              className="text-foreground/60 hover:text-nias-blue transition-colors duration-200"
            >
              Termos de Uso
            </Link>
            <span className="text-foreground/30">•</span>
            <Link
              href="/politica-de-privacidade"
              className="text-foreground/60 hover:text-nias-blue transition-colors duration-200"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/40 text-center">
            © {new Date().getFullYear()} Nias AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
