import './ServiceContainer.css';
import styled from 'styled-components';


function ServiceContainer({ Service }) {

    const ServicesRow = styled.div`
        display: grid;
        grid-auto-columns: minmax(auto, 1fr);
        align-items: center;
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

        @media screen and (max-width: 768px) {
            grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        }
    `

    return (
        <div id='service-container' style={{ backgroundColor: Service.background }}>
            <div id='services-wrapper'>
                <ServicesRow imgStart={Service.imageStart}>
                    <div id='column-one' data-aos="fade-right">
                        <div id='text-wrapper'>
                            <h1>{Service.headline}</h1>
                            <p>{Service.description}</p>
                        </div>
                    </div>
                    <div id='column-two' data-aos="fade-left">
                        <div id='image-wrapper'>
                            <img src={Service.img}></img>
                        </div>
                    </div>
                </ServicesRow>
            </div>
        </div>
    );

}

export default ServiceContainer;