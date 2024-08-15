import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";
import Home from "./Home.tsx";
import {DevTools} from "jotai-devtools";
import Navigation from "./Navigation.tsx";
import {useAtom} from "jotai";
import {ThemeAtom} from "../atoms/ThemeAtom.tsx";
import ProductDetail from "./ProductDetail.tsx";


const App = () => {

    const [theme, setTheme] = useAtom(ThemeAtom);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (<>

            <Navigation />
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
            </Routes>
            <DevTools />

    </>)
}
export default App;