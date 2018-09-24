import React from "react";
import style from "./style/Frames.css";

export default class Frames extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            frames: this.props.frames,
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps != this.props){
            const frames = nextProps.frames;
            this.setState(() => ({
                frames: frames,
            }));
        }
    }
    
    render(){
        //console.log("child render");
        //console.log(this.state.frames);
        return(
            <div>
                {
                    this.state.frames.map( (frame) =>(
                        <a className={style.link} href={frame.url}>

                            <div className={style.preview}>
                                <img src={frame.preview} />    
                            </div> 

                            <div className={style.status}>
                                <div className={style.logo}>
                                    <img src={frame.avatar} />
                                    <div class="placeholder"></div>
                                </div>

                                <li class={style.content}>
                                    <ul>{frame.status}</ul>
                                    <ul>{frame.playerName}</ul>
                                </li>
                            </div>
                        </a>
                    ))
                }
                
            </div>
        )
    }
}