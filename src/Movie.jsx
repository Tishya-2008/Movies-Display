import "./App.css"

function Movie(props){
    return(
        <div>
            {props.Movies.length > 0? null: <button className = "button" onClick = {props.getUrl}>Click me!</button>}
            {props.Clicked && props.Movies.length ===0? <div className = "loader"></div>: null}
        </div>
    )
}

export default Movie