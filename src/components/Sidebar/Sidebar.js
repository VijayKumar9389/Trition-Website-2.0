import './Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggle }) {

    function scrollTop(){
        window.scrollTo(0, 0);
        toggle();
    }

    const open = {
        opacity: '100%',
        top: '0'
    };

    const closed = {
        opacity: '0',
        top: '-100%'
    };

    return (
        <div id='sidebar-container' style={isOpen ? open : closed}>
            <div id='sidebar-icon-wrapper'>
                <FaTimes id='sidebar-icon' onClick={toggle}/>
            </div>
                <ul id='sidebar-menu'>
                    <Link to='/' className='sidebar-link' onClick={scrollTop}>Home</Link>
                    <Link to='/about' className='sidebar-link' onClick={scrollTop}>About Us</Link>
                    <Link to='/services' className='sidebar-link' onClick={scrollTop}>Services</Link>
                    <Link to='/contact' className='sidebar-link' onClick={scrollTop}>Contact</Link>
                </ul>
        </div>
    );

}

export default Sidebar;