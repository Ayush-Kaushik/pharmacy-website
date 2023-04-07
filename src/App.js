import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import AnimatedSwitch from "./pages/AnimatedSwitch";

function App() {
    return (
        <div>
            <Router>
                <AnimatedSwitch/>
            </Router>
        </div>
    );
}

export default App;
