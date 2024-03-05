import Footer from "../components/landing/Footer"
import Hero from "../components/landing/Hero"
import Navbar from "../components/landing/Navbar"
import Programs from "../components/landing/Programs"

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Programs/>
      <Footer/>
    </div>
  )
}

export default Landing