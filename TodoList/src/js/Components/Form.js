import React from "react";

export default class Form extends React.Component {
     
  constructor(props) {
    super(props);
    this.state = {
        text: this.props.text,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps){
      const text = nextProps.text;
      this.setState(() =>({text: text}));
    }
  }
  
  render() {
    return (
      <form class="Form" onSubmit={this.props.handleSubmit}>
        <label>
          List:
          <input type="text" value={this.state.text} placeholder="What do you want to do?" onChange={ this.props.handleChange } />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );


  }
}