import './Contact.css';
import { useState } from 'react';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

import iconOne from '../../media/contact/iconSix.svg'
import iconTwo from '../../media/contact/iconSeven.svg'
import iconThree from '../../media/contact/iconEight.svg'

function Contact() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div id='contact-container'>
            <div className='header'>
                <h1>CONTACT</h1>
            </div>
            <div id='contact-wrapper'>
                <div id='contact-info' data-aos="fade-in">
                    <h2>Contact Info</h2>
                    <div id='contact-info-wrapper'>
                        <img src={iconOne}></img>
                        <p>211-3030 Lincoln Avenue Coquitlam BC V3B 6B4</p>
                    </div>
                    <div id='contact-info-wrapper'>
                        <img src={iconTwo}></img>
                        <p>778-846-2702</p>
                    </div>
                    <div id='contact-info-wrapper'>
                        <img src={iconThree}></img>
                        <p>info@tritonpublicawareness.com</p>
                    </div>
                    <div id='map-container'>
                        <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8852793764227!2d-122.7941275843106!3d49.27857097933079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f3437f475ab%3A0x41860b56507ca79b!2s3030%20Lincoln%20Ave%20%23%20211%2C%20Coquitlam%2C%20BC%20V3B%206B4!5e0!3m2!1sen!2sca!4v1634880952124!5m2!1sen!2sca" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div id='contact-forum' data-aos="fade-in">
                    <h2>Message Us</h2>
                    <input className='contact-input' placeholder='Name' />
                    <input className='contact-input' placeholder='Company' />
                    <input className='contact-input' placeholder='Phone' />
                    <input className='contact-input' placeholder='Email' />
                    <textarea placeholder='Message' />
                    <div id='contact-btn-wrapper'>
                        <button id='forum-btn' onMouseEnter={onHover} onMouseLeave={onHover}>Submit {hover ?  <MdArrowForward id='btn-icon' /> : <MdKeyboardArrowRight id='btn-icon'/>}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;