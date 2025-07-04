// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
