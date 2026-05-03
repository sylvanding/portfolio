import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Cursor from "./components/UI/Cursor";
import UpButton from "./components/UI/UpButton";

function App() {
  return (
    <div className="grid min-h-screen cursor-default grid-rows-[auto_1fr_auto] bg-white text-black transition-colors duration-300 lg:cursor-none dark:bg-neutral-950 dark:text-white">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Skills />
        <AboutMe />
        <Experience />
        <Contact />
        <UpButton />
      </main>
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
