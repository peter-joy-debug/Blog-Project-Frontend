import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { TopNavbar } from '../components/TopNavbar/Navbar';
import { TopStory } from '../components/TopStory/TopStory';
import { Promotion } from '../components/MobileAppPromotion/Promotion';
import { Partners } from '../components/Partners/Partners';
import { Footer } from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
const NoSSRComponent = dynamic(() => import('../components/TopNavbar/Navbar'), { ssr: false });
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
