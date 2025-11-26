// app/layout.js (Server Component)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "./navbar/page";
import FooterPage from "./footer/page";
import Cardpage from "./Card/page";
import BannerSlider from "./(landingpage)/banne/banner/page";
import Page from "./(public)/home/page";
import AddPage from "./products/addcourse/page";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Course Manager App",
  description: "Manage your courses efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <BannerSlider></BannerSlider>
        <Page></Page>

        <main>{children}</main>
        
      </body>
    </html>
  );
}
