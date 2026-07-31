import { Download, Faq, Features, Hero, Newsletter } from "@/views/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
    </main>
  );
}
