import User from "./User";
import UserClass from "./UserClass";

const About = () => {

    return(<div>
    <h2>About Us</h2>    
    <h3>This is My React Learning Course</h3>
    <User name={"This is Rudresh (function)"} location={"Bangalore"}/>
    <UserClass name= {"This is Rudresh (class)"}/>
    </div>)
}

export default About;
