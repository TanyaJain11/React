
import PropTypes from "prop-types";

export const Button = ({color,text,onClick1}) => {

    return(

        <button onClick = { onClick1 }
        style = {{backgroundColor : color}} className="btn">
            {text}
        </button>

    );

};

 Button.PropTypes = {
    text:PropTypes.string,
    color: PropTypes.string,
    onClick1 : PropTypes.func,

 };

 Button.defaultProps = {
    color: 'steelblue',
    text: 'Button',
 };

export default Button;

