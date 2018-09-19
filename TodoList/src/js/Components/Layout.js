import React from "react";
import TodoController from "./TodoController";


export default class Layout extends React.Component {
    render() {
        return(
            <div class="container"> 
                <div class = "Todo">
                    <h1>Todo</h1>
                </div>
                <TodoController/>
            </div>
        );
    }
}