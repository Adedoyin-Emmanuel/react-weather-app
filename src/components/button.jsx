const Button = (props) =>{
  
    return (
        <button style={props.style} className = {props.className} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;