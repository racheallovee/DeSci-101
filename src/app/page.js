// app/page.js
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
