import React from "react";


class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"dummy",
                location:"india",
            }
        };
    }
    async componentDidMount(){
        //console.log("child1 mounting");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        //console.log(json.name);

        this.setState({
            userInfo:json,
        });
      

    }
    render(){
       const {name,location} = this.state.userInfo;
        
        return(
            <div className="user">
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
            <h3>contact:  swapnamajji2005@gmail.com</h3>
            </div>
        );
    }
}




export default User;

