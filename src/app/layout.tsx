import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/providers/providers";
import localFont from "@next/font/local";
import styles from "../styles/MainLayout.module.scss";
import Modals from "@/components/modal/Modals";
import "../styles/GlobalStyles.scss";
import Footer from "@/components/Footer/Footer";
const gilmer = localFont({
  src: [
    {
      path: "../../public/fonts/gilmer/Gilmer Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/gilmer/Gilmer Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/gilmer/Gilmer Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/gilmer/Gilmer Heavy.otf",
      weight: "600",
    },
  ],
  variable: "--font-gilmer",
});

const crafter = localFont({
  src: [
    {
      path: "../../public/fonts/crafter/Crafter-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/crafter/Crafter-Rough.otf",
      weight: "500",
    },
  ],
  variable: "--font-crafter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="A book lover's paradise." />
        <title>Bookie</title>
      </head>
      <body className={`${gilmer.variable} ${crafter.variable} `}>
        <main className={`${styles.layout}`}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
            <Modals />
          </Providers>
        </main>
      </body>
    </html>
  );
}
