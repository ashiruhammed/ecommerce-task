import Image from "next/image";
import "./globals.css";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main className="max-w-[1450px] mx-auto space-y-20">
      <section>
        <Hero />
      </section>
      <section className="lg:mt-20">
        <div className="text-center space-y-3">
          <p className="text-[20px] text-[#737373]">Featured Products</p>
          <h2 className="text-[24px] font-bold">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </section>
    </main>
  );
}
