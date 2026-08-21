
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import LeadGallery from '../components/LeadGallery';
import AdCostHighlight from '../components/AdCostHighlight';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <LeadGallery />
      <AdCostHighlight />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default Home;
