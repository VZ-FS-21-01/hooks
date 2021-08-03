const FeaturedImg = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.data.img} alt="" />
            <figcaption>
                <h4>{props.data.city}</h4>
                <p>{props.data.country}</p>
            </figcaption>
        </figure>
    );
}

export default FeaturedImg;