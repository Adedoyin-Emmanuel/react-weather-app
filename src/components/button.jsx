const Button = (props) =>{
    return (
        <button style={props.style} className = {props.className}>
            {props.text}
        </button>
    )
}

export default Button;