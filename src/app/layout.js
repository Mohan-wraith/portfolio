import "./globals.css";

export const metadata = {
  title: "Mohan Devendra — Aspiring Data Scientist",
  description:
    "Portfolio of M. Mohan Devendra — M.Sc. Data Science graduate building deep learning systems and end-to-end ML pipelines.",
  openGraph: {
    title: "Mohan Devendra",
    description: "Aspiring Data Scientist — M.Sc. Data Science, GITAM University",
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
