import FeaturedImg from "./FeaturedImg";
import TwoColumns from "./TwoColumns"

const featuredArray = [
    { img: "/img/featured-1.png", city: "Raja Ampat", country: "Indonesia" },
    { img: "/img/featured-2.png", city: "Fanjingshan", country: "China" },
    { img: "/img/featured-3.png", city: "Vevey", country: "Switzerland" },
    { img: "/img/featured-4.png", city: "Skadar", country: "Montenegro" }
]

const Home = (props) => {
    return (
        <div className="home">
            <h1>HOME</h1>
            <TwoColumns
                img="/img/Thousand-02.svg"
                headline="A new way to explore the world "
                text="For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect 
                trip, but now, they can also let Lonely Planet Experiences lead the way"
                btn="Learn more"
                btnTarget=""
                direction={false} />

            <div className="featured">
                {featuredArray.map((ele, i) => <FeaturedImg
                    key={i}
                    data={ele}
                // city={ele.city}
                // ...
                />)}
            </div>
        </div>
    );
}

export default Home;