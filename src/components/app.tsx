import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Toaster} from "react-hot-toast";
import Home from "./Home.tsx";


const App = () => {

    return (<>
        <BrowserRouter>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}
export default App;