import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Services from "./components/sections/Services";
import Innovation from "./components/sections/Innovation";
import Portfolio from "./components/sections/Portfolio";
import QuoteCalculator from "./components/sections/QuoteCalculator";
import EmergencySection from "./components/sections/EmergencySection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="bg-bg-primary min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Innovation />
      <Portfolio />
      <QuoteCalculator />
      <EmergencySection />
      <Footer />
    </main>
  );
}

export default App;
