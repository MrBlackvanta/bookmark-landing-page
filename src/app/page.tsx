import { Download, Features, Hero } from "@/views/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Download />
    </main>
  );
}
