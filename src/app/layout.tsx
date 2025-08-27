import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suit = localFont({
  src: [
    {
      path: "../../public/fonts/SUIT-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/SUIT-Heavy.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
});

export const metadata: Metadata = {
  title: "이보영의 포트폴리오",
  description: "탐험가 프론트엔드 개발자 이보영의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={suit.variable}>
      <body>{children}</body>
    </html>
  );
}
