import Nav from '@/sections/nav';
import Hero from '@/sections/hero';
import About from '@/sections/about';
import Services from '@/sections/services';
import Why from '@/sections/why';


export default function Home() {
  return (
  <div className="poppins text-white">
    <Nav />
    <Hero />
    <About />
    <Services />
    <Why />
  </div>
  );
}
