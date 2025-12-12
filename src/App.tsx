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
import { Cookies } from "./components/Cookies";
import { ThemeToggle } from "./components/ThemeToggle";
import { FooterRouter } from "./components/FooterRouter";

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
      <Cookies />
      <FooterRouter />
    </div>
  );
}

export default App;
