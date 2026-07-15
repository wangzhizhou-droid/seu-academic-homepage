import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name｜Southeast University",
  description: "东南大学本科生个人学术主页：研究兴趣、项目经历、课程与学术活动。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Your Name｜Academic Homepage",
    description: "Research interests, selected projects, coursework, and academic activities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
