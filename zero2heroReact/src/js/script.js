import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";


document.addEventListener("DOMContentLoaded", () => {
    
    const app = document.getElementById("app");
    ReactDOM.render(<Layout/>,app);
});
