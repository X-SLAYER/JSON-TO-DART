import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JSON2DART",
  description: "Convert JSON to Dart model class",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.png",
    },
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
  keywords:
    "json2dart, json to dart, generate dart models, dart models, json to dart class, json to dart pojo, dart, JSON to Dart null safety, convert json to Dart ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
