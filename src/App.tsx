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
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <PopularDesserts />
      <WhyChoose />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
