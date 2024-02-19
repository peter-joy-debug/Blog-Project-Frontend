import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { TopNavbar } from '../components/TopNavbar/Navbar';
import { TopStory } from '../components/TopStory/TopStory';
import { Promotion } from '../components/MobileAppPromotion/Promotion';
import { Partners } from '../components/Partners/Partners';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <TopNavbar/>
      <Welcome />
      <TopStory/>
      <Promotion/>
      <Partners/>
      <Footer/>
    </>
  );
}
