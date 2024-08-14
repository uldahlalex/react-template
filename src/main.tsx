import ReactDOM from 'react-dom/client'
import App from "./components/app.tsx";
import './styles.css';
import {StrictMode} from "react";
import 'jotai-devtools/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>
)