import Nav from '@/sections/nav';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Services from '@/sections/services';
import Why from '@/sections/why';
import Faqs from '@/sections/faqs'
import GetInTouch from '@/sections/getInTouch'
import Footer from '@/sections/footer'
import CopyRight from '@/sections/copyright'



export default function Home() {
  return (
  <div className="poppins text-white">
    <Nav />
    <Hero />
    <About />
    <Services />
    <Why />
    <Faqs />
    <GetInTouch />
    <Footer />
    <CopyRight />
  </div>
  );
}
