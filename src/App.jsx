import React from 'react'
import Navbar from './components/navbar'
import Marquee from './components/marquee'
import Landingpage from './components/landingpage'
import About from './components/about'
import Animateeye from './components/animateeye'
import Feature from './components/feature'
import Card from './components/card'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';



export default function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Animateeye />
      <Feature />
      <Card />
      <Footer />
    </div>
  )
}
