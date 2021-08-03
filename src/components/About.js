import TwoColumns from "./TwoColumns"


const About = (props) => {
    return (
        <div className="about">
            <h1>ABOUT</h1>
            <TwoColumns
                img="/img/Thousand-03.svg"
                headline="Guides by Thousand 
Sunny"
                text="Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip."
                btn="Download"
                btnTarget=""
                direction={true}
            />
        </div>
    );
}

export default About;