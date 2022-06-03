import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState } from 'react';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngular,
    faHtml5,
    faCss3,
    faJs,
    faPhp,
    faBitbucket,
    faGit,
    faWordpress
} from  '@fortawesome/free-brands-svg-icons';
const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    // useEffect(() => {
    //    return setTimeout(() => {
    //         setLetterClass['text-animate-hover']
    //     }, 4000)
       
    // }, [])

    return (
        <>
         <div className='container about-page'>
             <div className='text-zone'>
                 <h1>
                     <AnimatedLetters
                     letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'm', 'e']} 
                        idx={15}
                     />
                 </h1>
                 <p>
                    I'm a highly motivated front-end and back-end developer looking for role in 
                    established IT firm with the possibility to collaborate with latest technologies 
                    on a wide range of tasks.
                 </p>
                 <p>
                    I'm quiet confident, generally curious, and I'm constantly honing my skills
                     one design and technological problem at a time.
                 </p>
                 <p>
                 If I had to describe myself in one word, it would be "family"
                 person, daddy of a lovely kid, sports passionate, and vocalist
                 enthusiast and tech fanatic !!!
                 </p>
             </div>
             <div className="stage-cube-cont">
                 <div className="cubespinner">
                     <div className='face1'>
                         <FontAwesomeIcon icon={faAngular} className="fa-2xl" color="#DD0031"  />
                     </div>
                     <div className='face2'>
                         <FontAwesomeIcon icon={faHtml5} className="fa-2xl" color="#F06529" />
                     </div>
                     <div className='face3'>
                         <FontAwesomeIcon icon={faCss3} className="fa-2xl" color="#28A4D9" />
                     </div>
                     <div className='face4'>
                         <FontAwesomeIcon icon={faJs} className="fa-2xl" color="#fafa0c" />
                     </div>
                     <div className='face5'>
                         <FontAwesomeIcon icon={faPhp} className="fa-2xl" color="#0c40fa" />
                     </div>
                     <div className='face6'>
                         <FontAwesomeIcon icon={faWordpress} className="fa-2xl" color="#2684FF" />
                     </div>
                     {/* <div className='face7'>
                         <FontAwesomeIcon icon={faGit} className="fa-2xl" color="#E94D2E" />
                     </div>
                     <div className='face8'>
                         <FontAwesomeIcon icon={faWordpress} className="fa-2xl" color="#21759b" />
                     </div> */}
                 </div>
             </div>
         </div>
         <Loader type="ball-clip-rotate-multiple" />
         </>
    )   
}

export default About;