// import the react and react dom libraries
import React from "react";
// import ReactDOM  from "react-dom";
import ReactDOM  from "react-dom/client";

// create a react Component
function getButtonName(){
    return "Click Here!"
}

const App = ()=>{
    const name= {text: 'Hello Me'};
    return (
        <div>
            <label htmlFor="name">Enter name</label>      
            <input id="name" type="text" />   
            <button style={{backgroundColor:'green',color:' '}}>
                {getButtonName()}
            </button>
            <button>
                {name.text}
            </button>
        </div>
    );
}


// take the react component and show it on the screen

// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />  
);
