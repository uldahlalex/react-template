import ReactDOM from 'react-dom/client'
import App from "./components/app.tsx";
import './styles.css';
import {StrictMode} from "react";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>

    </StrictMode>
)