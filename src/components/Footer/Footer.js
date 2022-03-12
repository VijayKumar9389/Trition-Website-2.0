import './Footer.css';

function Footer() {

    return (
        <div id='footer-container'>
            <div id='footer-wrapper'>
                <h1>TRITON PUBLIC AWARENESS ©</h1>
                <small>{new Date().getFullYear()} All rights reserved</small>
            </div>
        </div>
    );

}

export default Footer;