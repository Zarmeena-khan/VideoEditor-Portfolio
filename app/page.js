import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-background text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
