import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Toaster} from "react-hot-toast";
import Home from "./Home.tsx";
import {DevTools} from "jotai-devtools";


const App = () => {

    return (<>
        <BrowserRouter>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <DevTools />
        </BrowserRouter>
    </>)
}
export default App;