import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
// import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { CourierBenefits } from "./components/CourierBenefits";
import { Download } from "./components/Download";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Features />
        <Contact />
        <CourierBenefits />
        <Download />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
