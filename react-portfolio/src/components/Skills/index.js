import { useEffect, useState } from 'react'
import { faJava, faCss3, faPython, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from 'react-loaders'

const Skills = () => {
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
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            As a dedicated university student with a passion for coding, I possess a versatile skill set 
            that spans across various programming languages and technologies. My proficiency in Python, C, 
            C++, HTML, CSS, JavaScript, React, and Java reflects my commitment to becoming a well-rounded developer. 
          </p>
          <p align="LEFT">
            With a strong foundation in these languages, I am adept at tackling complex challenges and creating innovative 
            solutions. Whether it's crafting dynamic web experiences, building robust applications, or delving into the 
            intricacies of front-end and back-end development, I am eager to apply my skills to real-world projects. 
          </p>
          <p>
            My continuous drive to learn and adapt ensures that I remain at the forefront of technological advancements, 
            making me a valuable asset to any team or project.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    <Loader type='ball-scale-ripple-multiple' />
    </>
  )
}

export default Skills