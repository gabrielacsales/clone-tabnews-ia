import "./globals.css";

export const metadata = {
  title: "Contagem Regressiva - 20 de Novembro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
