import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () =>{
    const [letterClass,setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_j6w95vd',
            'template_c7ucwko',
            refForm.current,
            'RmVJNbBrapUTejEF-'
            ).then(
                () => {
                    alert('Message Success');
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, Please try Again')
                }
            )
    }
    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n' ,'t', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>
                    <p>
                    I'm looking for part time and project base work. If you have any additional requests or questions, please contact me.
                    Please do not hesitate to get in touch using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail } >
                            <ul>
                                <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}
export default Contact;