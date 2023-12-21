import classes from './button.module.css'

const Button = (props) =>{
return(
<button className={`${classes.letra} ${classes.fondo} ${classes.efecto}`}>{props.label}</button>

)
}

export default Button