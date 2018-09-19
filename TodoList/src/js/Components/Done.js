import React from "react";

export default class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: this.props.Items,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            const Items = nextProps.Items;
            this.setState( () =>({
                Items: Items,
            }))
        }
    }

    render() {        
        return(
            <div class="Done">Done
            {   
                this.state.Items.map( (item) =>(
                <ul> 
                    <li>{item.item}</li>
                </ul>
                ))
            }
            </div>
        )
    }
}