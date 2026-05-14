import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Stakes } from '@/components/Stakes';
import { Framework } from '@/components/Framework';
import { Platform } from '@/components/Platform';
import { ForWhom } from '@/components/ForWhom';
import { Engagement } from '@/components/Engagement';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Stakes />
        <Framework />
        <Platform />
        <ForWhom />
        <Engagement />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
