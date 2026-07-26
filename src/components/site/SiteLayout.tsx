import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteForm } from "./QuoteForm";
import { MobileCtaBar } from "./MobileCtaBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <QuoteForm />
      <Footer />
      <MobileCtaBar />
    </div>
  );
}