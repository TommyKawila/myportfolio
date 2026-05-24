import type { Metadata } from "next";
import LandingHero from "@/components/landing/LandingHero";
import TechStackSection from "@/components/landing/TechStackSection";
import PortfolioShowcase from "@/components/landing/PortfolioShowcase";

export const metadata: Metadata = {
  title: "AI-Accelerated Full-Stack Developer",
  description:
    "Senior Full-Stack Developer shipping production MVPs in 24–48 hours with Next.js, Supabase, and AI automation.",
};

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <TechStackSection />
      <PortfolioShowcase />
    </>
  );
}
