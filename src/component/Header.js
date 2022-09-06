import './Header.css';

const Header=(props)=>{
    return(
        <header>
            <h1 style={headingStyle}> Hello {props.title}</h1>
            <h1 className = "h2Heading"> Hi {props.title1}</h1>
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