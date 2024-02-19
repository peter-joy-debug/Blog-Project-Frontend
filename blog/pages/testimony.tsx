import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { TopNavbar } from '../components/TopNavbar/Navbar';
import { TopStory } from '../components/TopStory/TopStory';
import { Promotion } from '../components/MobileAppPromotion/Promotion';
import { Partners } from '../components/Partners/Partners';
import { Footer } from '../components/Footer/Footer';
import { useRouter } from 'next/router';
import {TestimonialBanner} from '../components/Banners/TestimonyBanner';
import {TestmonyTopGrid} from '../components/Testimonial/TestimonyTopGrid';
export default function TestimonialPage() {
  return (
    <>
      <TopNavbar/>
      <TestimonialBanner/>
      <TestmonyTopGrid/>
      <TopStory/>
      <Footer/>
    </>
  );
}
