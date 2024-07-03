import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }
    render() {
        const {name,location,} = this.props
        return(<div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h3>Contact: 9876543210</h3>
        </div>)
    }
}

export default UserClass;