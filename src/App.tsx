import Hero from './components/Hero';
import About from './components/About';
import PopularDesserts from './components/PopularDesserts';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Properly typed function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <div id="hero"><Hero scrollToSection={scrollToSection} /></div>
      <div id="about"><About /></div>
      <div id="popular-desserts"><PopularDesserts /></div>
      <div id="why-choose"><WhyChoose /></div>
      <div id="gallery"><Gallery /></div>
      <div id="reviews"><Reviews /></div>
      <div id="location"><Location /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer scrollToSection={scrollToSection}  /></div>
    </div>
  );
}

export default App;