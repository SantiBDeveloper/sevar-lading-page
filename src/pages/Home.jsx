import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services"
import ProjectsCarousel from "../components/ProjectsCarousel"
import WhyChooseUs from "../components/WhyChooseUs"
import CTASection from "../components/CTASection"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <ProjectsCarousel/>
      <WhyChooseUs/>
      <CTASection/>
      <Footer/>

    </>
  );
}