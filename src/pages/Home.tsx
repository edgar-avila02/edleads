
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import LeadGallery from '../components/LeadGallery';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <LeadGallery />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default Home;
