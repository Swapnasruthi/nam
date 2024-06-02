import React from "react";
import ReactDOM from "react-dom/client";

//importing components
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () =>{
    return (
        <div className="app">
            <Header></Header>
            <Body/>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);