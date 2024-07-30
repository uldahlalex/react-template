
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Exercises from "./exericses.tsx";
import {Toaster} from "react-hot-toast";
import Solutions from "./solutions.tsx";



const App = () => {

    return (<>
        <Router>
            <Toaster/>
            <Routes>

            </Routes>
        </Router>
        <Exercises />
        <Solutions />
    </>)
}
export default App;