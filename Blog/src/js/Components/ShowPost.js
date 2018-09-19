import React from "react";
import style from "./style/ShowPost.css";

export default class Blog extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post,
        }
    }

    render() {
        return(
            <div>
                <p className={style.p}><span className={style.Title}>Title: </span>{this.state.post.title}</p>
                <p><span className={style.Title}>Body: </span>{this.state.post.body}</p>
            </div>
        )
    }

}