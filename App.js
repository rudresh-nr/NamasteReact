// How to create nested tags?
const heading = React.createElement("h1",{id:"head"},
                ["This is h1",React.createElement("h2",{id:"smal-head"},"This is h2")]);




// React Need Root for DOM manipulation
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);