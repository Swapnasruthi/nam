//the below is code is about creating a new element of a html and printing it into the 
//browser.

// <div id="parent">
//    <div id="child">
//        <h1>i'm h1 tag</h1>
//        <h1>i'm h2 tag</h1>
//    </div>
//    <div id="child">
//        <h1>i'm h1 tag</h1>
//        <h1>i'm h2 tag</h1>
//    </div>
// </div>



const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "i'm h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "i'm h2 tag"
        )]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {},
            "i'm h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "i'm h2 tag"
        )]
    )]);


const heading = React.createElement("h1",{id:"heading"},"hello wrold from react");
console.log(heading); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);