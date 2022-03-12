import './Home.css';
import { CardData } from "../../components/Card/CardData";

import InfoCard from "../../components/Card/InfoCard";
import Slider from "../../components/Slider/Slider";

function Home() {
    return (
        <div id='home-container'>
            <Slider />
            <div id='card-container'>
                    {CardData.map((Card, index) => {
                        return(<InfoCard CardData={Card} />);
                    })}
                </div>
        </div>
    );
}

export default Home;