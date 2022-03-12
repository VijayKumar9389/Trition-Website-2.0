import './About.css';

import Logo from '../../media/Logo.Large.png';
import { CardData } from '../../components/Card/CardData';
import InfoCard from '../../components/Card/InfoCard';


function About() {

    return (
        <div id='about-container'>
            <div className="header">
                <h1>ABOUT US</h1>
            </div>
            <div id='about-header'>
                <h1 data-aos="fade-in">TRITON PUBLIC AWARENESS</h1>
            </div>
            <div id='about-info'>
                <img id='about-img' src={Logo}></img>
                <div id='about-info-wrapper'>
                    <p data-aos="fade-in" data-aos-delay="200">
                        Triton was created to address a gap in industry; a service provider that can identify affected stakeholder groups that pose a risk to pipelines. We provide damage prevention education to these stakeholders, measure outreach effectiveness and provide continual improvement opportunities to utility operators in the midstream space.
                        <br></br>
                        <br></br>
                        Our solutions create public awareness plans and we execute on these in order to effect positive behavioural changes of affected stakeholders to reduce pipeline damages.
                        <br></br>
                        <br></br>
                        Our program is inclusive; it is robust, uniform, and a cost-effective mechanism satisfying all of the requirements for Program Evaluation all regulators across North America, with an emphasis on the National Energy Board’s requirements.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;