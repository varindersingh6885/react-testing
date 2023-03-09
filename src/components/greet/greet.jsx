const Greet = ({name}) => {
    return (
        <h2>Welcome <span>{name != undefined ? name : null}</span>, to the Jalsa 2023</h2>
    )
}

export default Greet;