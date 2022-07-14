import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/a_mv2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faLink, faGift, faEye} from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return <>
    <div className='nav-bar'>
        <Link className='logo' to='/anc-portfolio'>
            <img src={LogoS} alt="logo" />
            <h2 className="sub-logo" > Alden </h2>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/anc-portfolio/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/anc-portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/anc-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="mywork-link" to="/anc-portfolio/mywork">
                <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
            </NavLink>
        </nav>
        {/* <ul>
        <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alden-pearce/'>
                     <FontAwesomeIcon icon={fag} color="#4d4d4e" />
                </a>

            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alden-pearce/'>
                     <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
                </a>

            </li>
        </ul> */}
    </div>
    </> 
}
export default Sidebar;