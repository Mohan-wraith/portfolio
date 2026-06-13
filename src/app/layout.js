import "./globals.css";

export const metadata = {
  title: "Mohan Devendra — Full-Stack Developer & Data Scientist",
  description:
    "Portfolio of M. Mohan Devendra — building full-stack applications and data science systems that ship to production.",
  openGraph: {
    title: "Mohan Devendra",
    description: "Full-Stack Developer & Data Scientist",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
