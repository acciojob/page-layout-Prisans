
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  let str = "This is the content of my website"
  return (
    <div>
        <PageLayout childProp={str}/>
    </div>
  )
}

export default App
