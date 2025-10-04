import Image from "next/image";
import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";
import InfoSection from "./_components/stay-informed";
import MileStone from "./_components/milestone";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <section className="relative w-full h-[180px] md:h-[320px] lg:h-[420px] xl:h-[520px] 2xl:h-[700px]">
        <Image
          alt="Asido Foundation team members at a mental health awareness event"
          src="/hero-image.png"
          fill
          sizes="100vw"
          className="object-cover hidden md:block"
          priority
          quality={90}
        />

        <Image
          alt="Asido Foundation team members at a mental health awareness event"
          src="/hero-image-mobile.png"
          fill
          sizes="100vw"
          className="object-cover block md:hidden"
          priority
          quality={90}
        />
      </section>

      <MileStone />

      <InfoSection />

      <Footer />
    </div>
  );
}
