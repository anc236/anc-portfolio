import './index.scss';
import LogoTitle from '../../assets/images/a_mv2.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray =[ 'l' , 'd' , 'e' , 'n'];
    const jobArray =[ 'w' , 'e' , 'b', ' ' , 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    // useEffect(() => {
    //     return setTimeout(() =>{
    //         setLetterClass('text-animate-hover');
    //     },4000)
    // }, [])
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='developer' /><AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={jobArray} idx={19}/>
                    </h1>
                    <h2>Front-end & Back-end Developer / PHP Expert / Wordpress Expert</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
              <Loader type="ball-clip-rotate-multiple" />
        </>
    );
   
}
export default Home;