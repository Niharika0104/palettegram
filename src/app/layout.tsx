import "@/styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";

// const interFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   variable: "--font-inter",
// });

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palettegram.vercel.app"),
  title: "Palettegram - social media for professionals",
  description:
    "Palettegram is a social media application dedicated to professionals like graphic designers, UI/UX designers, Developers, etc. to leverage UI designs, design ideas, UX approaches and color palettes.",

  keywords:
    "Palettegram, Appwrite, Color Designer, Palettegram social media, behance, dribbble, made for designers, Palatogram, Palette gram, Palettegram social, palettegram app",

  alternates: {
    canonical: "https://palettegram.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palettegram.vercel.app",
    siteName: "Palettegram - social media for professionals",
    title: "Palettegram - social media for professionals",
    description:
      "Palettegram is a social media application dedicated to professionals like graphic designers, UI/UX designers, Developers, etc. to leverage UI designs, design ideas, UX approaches and color palettes.",
    images: [
      {
        url: "/assets/meta-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Palettegram - from professionals by professionals",
      },
    ],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsFont.className} scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary-light scrollbar-track-rounded-full bg-white dark:bg-secondary`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Providers>
          <ReduxProvider>{children}</ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
