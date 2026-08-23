import type { Metadata } from "next";
import { Chakra_Petch, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const display = Chakra_Petch({ weight: ["400", "600", "700"], variable: "--font-display", subsets: ["latin"] });
const mono = Roboto_Mono({ weight: ["400", "500"], variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = { title: "Error Room — sample signal board", description: "Read client error samples in a local status board.", metadataBase: new URL("https://error-logs.bookchaowalit.com") };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${display.variable} ${mono.variable}`}>
  {/* THESIS: Error samples deserve a readable incident room, not decorative KPI cards. OWN-WORLD: navy signal-room surfaces, amber/red/green state lamps, hard tabular rows, and an angular technical display face. STORY: visitors select a time window, choose a signal, and follow its service/detail trail while seeing the sample boundary. FIRST VIEWPORT: the selected incident is visible beside the thesis; the signal board is the first task surface and range controls sit on its header. FORM: incident signal room / candidate 3 / seed ea918651. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
  <Analytics /><SpeedInsights />{children}
</body></html>; }
