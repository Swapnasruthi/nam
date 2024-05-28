import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1",{id:"heading"},"namaste react");
// console.log(heading);

// const jsxheading = <h1 id="heading">namaste react using JSX</h1>
// console.log(jsxheading);

//react component -- a js function which returns a "react element"(a jsx component).


var num = 10000;
const FunctionComponent = ()=>(
    <div id="react">
       
       <h2>{num}</h2>
       <h1>hello world</h1>
    </div>
)

const Title =(
    <div>
    <h1 id="heading"> namaste react by AKSHAY SAINI</h1>
    <h3>This is swapna sruthi</h3>
    //these three are same inorder to call the react component
    {FunctionComponent()}
    <FunctionComponent></FunctionComponent>  
    <FunctionComponent/>
    </div>
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// root.render(jsxheading);

// root.render(<FunctionComponent/>);
root.render(<FunctionComponent></FunctionComponent>);