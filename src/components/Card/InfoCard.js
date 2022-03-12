import './InfoCard.css';

function InfoCard({ CardData }) {

    return (
        <div className='about-card' data-aos="zoom-in">
            <img className='about-icon' src={CardData.icon} ></img>
            <h2>{CardData.title}</h2>
            <p>{CardData.paragraph}</p>
        </div>
    );
}

export default InfoCard;