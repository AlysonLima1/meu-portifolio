import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfólio | Alyson Lima",
  description: "Portfólio pessoal de Alyson Rafael Reis Arruda de Lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <header className="bg-red-700 text-white p-4 shadow-md">
          <nav className="flex justify-center gap-6 font-semibold text-lg">
            <Link href="/" className="hover:underline">Início</Link>
            <Link href="/sobre" className="hover:underline">Sobre</Link>
            <Link href="/experiencia-academica" className="hover:underline">Acadêmica</Link>
            <Link href="/experiencia-profissional" className="hover:underline">Profissional</Link>
            <Link href="/projetos" className="hover:underline">Projetos</Link>
            <Link href="/jogo" className="hover:underline">Jogo</Link>
          </nav>
        </header>

        <main className="flex-1 p-6">{children}</main>

        <footer className="bg-red-900 text-white p-4 text-center mt-8">
          © {new Date().getFullYear()} Alyson Lima - Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
