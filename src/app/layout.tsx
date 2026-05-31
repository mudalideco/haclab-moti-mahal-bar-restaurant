import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Moti Mahal Bar & Restaurant | Authentic Indian Cuisine in Jinja",
  description:
    "Authentic Indian cuisine in Jinja since 1947. Thali meals, tandoori chicken, butter chicken & Kulfi milkshake. Dine-in & takeaway at 46 Iganga Rd.",
  openGraph: {
    title: "Moti Mahal Bar & Restaurant | Authentic Indian Cuisine in Jinja",
    description:
      "Authentic Indian cuisine in Jinja since 1947. Thali meals, tandoori chicken, butter chicken & Kulfi milkshake. Dine-in & takeaway.",
    type: "website",
    locale: "en_UG",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen font-body bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
