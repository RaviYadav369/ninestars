import About from "./components/About"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero-Section"
import Navbar from "./components/Navbar"
import Portflio from "./components/Portflio"
import Services from "./components/Services"
import Team from "./components/Team"


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portflio />

      <Faq />
      <Team />
      <Client />
      <Contact />
      <Footer />
    
    </>
  )
}

export default App
