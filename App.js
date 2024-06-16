import React from "react"
import ReactDOM from "react-dom/client"

// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement  => ReactElement-JS Object => HTMLElement(render)

//React Element
const jsxheading = (<h1 className="head" tableIndex="5">
    Namaste React Using JSX
    </h1>);

/* ......................React Components..........................*/

// 1.Class Based Components - Old
//Systax1
const HeadingComponent1 = () => {
    return <h1>Namaste React Functional Component Systax1</h1>
}
//Syntax2 && Component Composistion
const HeadingComponent2 = () => (
    <div>
        <HeadingComponent1/>
        <h1>Namaste React Functional Component Syntax2 without return keyword</h1>
    </div>
    );


// 2.Functional Based Components - New
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent2/>);