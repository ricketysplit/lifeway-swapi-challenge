import type { Metadata } from "next";
import SearchBar from "./components/search";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Source",
  description: "Explore the world of Star Wars",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-400">
        <div className="flex flex-1 h-24 w-50 py-4 m-8 bg-zinc-200 justify-center content-center rounded-md shadow-sm shadow-white">
          <SearchBar />
        </div>
        {children}
      </body>
    </html>
  );
}
