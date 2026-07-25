import Hero from '../components/Hero';
import About from '../components/About';
import Tools from '../components/Tools';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Creative Video Editor | Portfolio',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-pitch-black text-cream">
      <CustomCursor />
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <About />
        <Tools />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
