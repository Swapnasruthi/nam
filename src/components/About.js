import User from "./User_class";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("parent constructor!");
    }
    componentDidMount(){
        //console.log("parent mounting");
    }
    render(){
        //console.log("parent component");
        return(
            <div >
            <h1>About Page</h1>
            <User name={"Swapna Sruthi"} location={"india"}/>
            
            </div>
        )
    }
}
export default About;