
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Exercises from "./exericses.tsx";
import {Toaster} from "react-hot-toast";



const App = () => {

    return (<>
        <Router>
            <Toaster/>
            <Routes>
            </Routes>
        </Router>
        <Exercises />
    </>)
}
export default App;