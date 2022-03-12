import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../media/Logo.png';
import { FaBars } from 'react-icons/fa';

function Navbar({ toggle }) {

    function scrollTop(){
        window.scrollTo(0, 0);
    }

    return (
        <nav id='nav-container'>
            <div id='nav-wrapper'>
                <Link to='/' id='nav-logo-link' onClick={scrollTop}><img id='nav-logo' src={Logo} /></Link>
                <div id='mobile-icon'>
                    <FaBars onClick={toggle} />
                </div>
                <div id='menu-wrapper'>
                    <ul id='nav-menu'>
                        <li className='nav-item'><Link to='/' className='nav-link' onClick={scrollTop}>HOME</Link></li>
                        <li className='nav-item'><Link to='/about' className='nav-link' onClick={scrollTop}>ABOUT US</Link></li>
                        <li className='nav-item'><Link to='/services' className='nav-link' onClick={scrollTop}>SERVICES</Link></li>
                    </ul>
                </div>
                <Link to='/contact' id='nav-btn-link' onClick={scrollTop}>Contact</Link>
            </div>
        </nav>
    );

}

export default Navbar;