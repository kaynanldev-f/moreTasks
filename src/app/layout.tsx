import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/header/Index";

const roboto = Roboto({
  variable: "--font-roboto",

  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  title: "More Tasks",
  description: "Tasks+ é uma aplicação web de gerenciamento de tarefas com Next.js, React, TypeScript e Firebase. Organize tarefas e interaja através de comentários.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <>
          <Providers>
            <Header />
            {children}
          </Providers>
        </>
      </body>
    </html>
  );
}
