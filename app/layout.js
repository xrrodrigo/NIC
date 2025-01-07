import "./globals.css";


export const metadata = {
  title: "Núcleo de incentivo a cidadania - NIC",
  description: "Conheça quem somos e oque fazemos - NIC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased box-border font-semibold`}
      >
        {children}
    </body>
    </html>
  );
}
