import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ThemeTransitionProvider } from "@/components/providers/theme-transition";
import { ThemeTransitionOverlay } from "@/components/providers/theme-transition-overlay";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MouseSpotlight } from "@/components/common/mouse-spotlight";
import { CinematicOverlay } from "@/components/common/cinematic-overlay";

export const metadata: Metadata = {
  title: "MKN Portfolio",
  description:
    "Portfolio of MK Nimesh Ranasinghe - Software Engineer delivering practical, robust solutions from idea to execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeTransitionProvider>
            <SmoothScrollProvider>
              <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
                <MouseSpotlight />
                <CinematicOverlay />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,220,255,0.12),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(0,255,170,0.08),_transparent_25%)]" />
                <SiteHeader />
                {children}
                <SiteFooter />
                <ThemeTransitionOverlay />
              </div>
            </SmoothScrollProvider>
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}