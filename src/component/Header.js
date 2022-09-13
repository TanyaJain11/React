import './Header.css';
import Button from "./Button.js";


const Header=(props)=>{
    const onClick1 = (e) =>{
        console.log("click",e);
    };

    return(
        <header>
            <h1 style={headingStyle}> Hello {props.title}</h1>
            <h1 className = "h2Heading"> Hi {props.title1}</h1>
            {/* <button className="btn"> Add</button> */}
              {/* {VideoColorSpace,text,onclick} */}
          <Button text='Hello1' color='green' onClick = {onClick1}></Button>
        </header>
    );
};

const headingStyle = {
    color:"darkcyan",
    backgroundColor:"lightblue",
    textAlign:"center",
};

Header.defaultProps = {
    title: "Task Tracker",
};

export default Header;
// export default Button;1