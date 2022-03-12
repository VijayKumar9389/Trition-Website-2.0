import './Services.css';

import { ServiceList } from '../../components/Service/ServiceData';
import ServiceContainer from '../../components/Service/ServiceContainer';

function Services() {
    return (
        <div id='services-container'>
            <div className="header">
                <h1>SERVICES</h1>
            </div>
            <div id='servicess-wrapper'>
                {ServiceList.map((service, index) => {
                    return (<ServiceContainer Service={service} />);
                })}
            </div>
        </div>
    );
}

export default Services;