import React from "react";
import style from "./style/Blog.css";
import ShowPost from "./ShowPost";
import Search from "./Search";
import Navigationbar from "./Navigationbar";

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            currentPostId: '',
            
        }
        this.clickBlog = this.clickBlog.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then( (result) => {
            this.setState({
                isLoaded: true,
                items: result,
            }
            )
        })
    }

    clickBlog(event){
        console.log(event.target.innerText);
        console.log(event.target.childNodes);
        let id = event.target.childNodes[1].value;
        console.log(id);
        this.setState( () => ({
            currentPostId: id,
        }));
        
    }

    handleClick(event,eventKey) {
        console.log(eventKey);
        console.log(event);
        console.log(event ==='1');
        if (event === 1){
            this.setState( () => ({
                currentPostId: '',
            }));
        }else if(event === 2){
            this.setState( () =>({
                currentPostId: '',
            }))
        }   
    }



    render() {
        const {currentPostId,items} = this.state;
        return(
        <div>
            <Navigationbar handleClick={this.handleClick}/>

            <div class="container"> 
                    <h1>Blog posts</h1>
                    <div>
                { currentPostId ? (
                    <ShowPost post={items[currentPostId]}/>
                ) : (
                    <ul className={style.unList}>{
                        this.state.items.map( (item) =>(
                            <li className={style.list} onClick={this.clickBlog}>{item.title}<input type="hidden" value={item.id}/></li>
                        ))
                    }</ul>
                )}   
                </div>
            </div>
        </div>
        )
    }
}