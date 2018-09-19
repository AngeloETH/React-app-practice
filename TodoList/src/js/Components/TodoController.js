import React from "react";
import Form from "./Form";
import Undo from "./Undo";
import Done from "./Done";


export default class TodoController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '',
                      TodoItems: [],
                      DoneItems: [],
                    };
        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
        this.handleTrash = this.handleTrash.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        const changed = event.target.value;
        this.setState(() => ({text: changed}));
      }

      handleSubmit(event) {
        if (this.state.text !==''){
            console.log('before: '+this.state.text);
            console.log(this.state.TodoItems); 
            let TodoItems = this.state.TodoItems.slice();
            TodoItems.push({item: this.state.text, checked: false });
            console.log(TodoItems);
            const nextText = '';
            this.setState(() => ({ text: nextText,TodoItems:  TodoItems}));
            this.state.TodoItems.map((item) => {
                console.log('after: '+this.state.text);
                console.log(item.item);
            })
            event.preventDefault();
            console.log('after that: '+this.state.text);
        } else {
            event.preventDefault();
        }
            
      }

      checkboxChange(event) {
        const ischecked = event.target.checked;
        let TodoItems = this.state.TodoItems.slice();
        
        TodoItems.forEach((item) =>{
            if (item.item === event.target.parentNode.innerText){
                item.checked = ischecked;
            }
        })
        this.setState(() => (
            {TodoItems: TodoItems}
        ))
      }

    handleTrash(event) {
        const item = this.state.TodoItems.find( (TodoItems) => TodoItems.item === event.target.parentNode.parentNode.innerText);
        if (item.checked === true) {
            this.removeItem(item);
        }
    }

    handleEdit(event) {
        const item = this.state.TodoItems.find( (TodoItems) => TodoItems.item === event.target.parentNode.parentNode.innerText);
        if (item.checked === true){
            let DoneItems = this.state.DoneItems.slice();
            DoneItems.push({item: item.item});
            this.setState({DoneItems: DoneItems}, () => {
                this.removeItem(item)
            });
        }
    }


      removeItem(removedItem) {
        const TodoItems = this.state.TodoItems.filter((item) => (item !== removedItem));
            this.setState(() =>(
                {TodoItems: TodoItems}
            ));
        }


      render() {
          return(
              <div>
                  {<Form text={this.state.text}  handleSubmit={this.handleSubmit.bind(this)}  handleChange={this.handleChange.bind(this)}/>}
                  <Undo Items={this.state.TodoItems} checkboxChange={this.checkboxChange.bind(this)}  handleTrash={this.handleTrash.bind(this)} handleEdit={this.handleEdit.bind(this)}/>
                  <Done Items={this.state.DoneItems}/>
              </div>   
               
          )
      }
}

