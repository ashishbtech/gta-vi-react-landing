
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import SecondVideo from './sections/SecondVideo';
import Jason from './sections/Jason';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';
import Outro from './sections/Outro';
import Final from './sections/Final';
import './App.css'


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return(
    <main>
      <Navbar/>
      <Hero/>


      <FirstVideo/>
      <Jason/>
      <SecondVideo/>
      <Lucia/>

      <PostCard/>
      <Final/>
        <Outro/>

      
    </main>
  )
}

export default App
