const TwoColumns = (props) => {
    console.log(props)
    return (
        <div className="two-columns" style={
            { flexDirection: props.direction ? "row-reverse" : "" }
        }>
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="text">
                <h2>{props.headline}</h2>
                <p>{props.text}</p>
                <a href={props.btnTarget}>{props.btn}</a>
            </div>
        </div>
    );
}

export default TwoColumns;