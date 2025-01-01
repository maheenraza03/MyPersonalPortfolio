import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm an ambitious software engineering student with a minor in mechatronics at the University of Calgary, driven by a passion for unraveling the wonders of intelligent machines and cutting-edge technology. 
          Currently, I'm honing my skills and expanding my expertise during an internship at Enbridge, where I work on innovative projects in the realm of data analysis and control systems for renewable energy. 
          This journey has deepened my fascination with how software and engineering principles come together to create sustainable, future-forward solutions.
          </p>
          <p align="LEFT">
            From a young age, I found myself captivated by the wonders of the natural 
            world and the innovative creations of technology. The thrill of solving scientific 
            mysteries and the satisfaction of designing logical solutions ignited a passion within me.
          </p>
          <p>
            Personally, I have an interest in almost anything. AI, motorsport, enjoying the outdoors, 
            literature, and film, I find myself drawn to all of it.
          </p>
          <p>
            Feel free to check out my linkedin and github to see what I've worked on!
          </p>
        </div>
      </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default About