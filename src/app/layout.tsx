import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dolat Hamza - Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, TypeScript, and AI Integration. 3+ years of experience building scalable web applications.",
  keywords: "Frontend Developer, React, Next.js, TypeScript, AI Integration, Web Development, Dolat Hamza",
  authors: [{ name: "Dolat Hamza" }],
  creator: "Dolat Hamza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2563eb",
              colorSuccess: "#10b981",
              colorWarning: "#f59e0b",
              colorError: "#ef4444",
              colorInfo: "#3b82f6",
              borderRadius: 8,
              fontFamily: "var(--font-inter)",
            },
            components: {
              Button: {
                borderRadius: 8,
                controlHeight: 40,
              },
              Card: {
                borderRadius: 12,
              },
              Input: {
                borderRadius: 8,
                controlHeight: 40,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
