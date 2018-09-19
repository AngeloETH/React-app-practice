import React from "react";
const editImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHKSURBVDiNjdI9TFNRFAfw/73v9qUlqR8BiSEisQamQspHonEweRODDuggIdFoa5mMu4OJsLGQkMCOfAzG0cRFE8Ogg0krQpQWxKHVx1LtB8X3Hq/v3eOCpEL7eDc5y0l+95z/zQURwW9NADwVEzMbg4F8ZkC9TURgRASfR5Rz319mEsM31d+5QItgDiM2yv1ZTRgfnqxRa/utwOwrbrd21QyHxL6Ucz420ATS0Q24u935/Zgd7k+qKlHp88hQ+Oen7fUTNtAE0tEMpNUNZxUXA6/V4PtHVcN1z+49nvqWLdMV4YlT0SzIuozaR0DpACpvESpROLfSnu7sSVwbJnKaRNAE0r1ZSPM/jAIBJpuHLpN4RhIAGkTwwBZ7Xo8BQBzDqb5NkBFpMHkBunxYj49coAmkerdAxqUGeBG6TBzFAA4+0spkEOHyFuReZxMcb4QP32C3a2DaFea5Y9hgS174XwSF1At3zDN3g8GabYriQuhg8jJ25AMvDACisrOqKY7Zxl0bzqmREPvDKor94h104/5JGAB4tVgY464F7pqwjUrxq376zfb5jjE/GADYePKeFb8xWKjW+I+WyNUv4KIplIz9uh6LPa3v/QVC3h4uyumJMgAAAABJRU5ErkJggg==';
const trashImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAI6SURBVDiNjZPPS1RRFMc/5717R8enbwZyFqmE4OwCt+GmRMKkaFOLgn78BfYXtBGiVQu3/gGuo1VBkNHsIjAXuQgJbOE4gjUaqfN+3HtaOE8nbdF3dTj3fD+cc+69oqqc1cuVlQWBp4DppnKF53dmZhbO1sqHtbXZwLmbvcn9g4NZhYG/CuGwEkVve3M+DF9LY3V1Cxg518b/qWm2d3eXfJ4/ybOshgiBBHhxdCQDIBClpI6KKiKCABoYOqbS9KpLoqq8aTQefNvYWD486lAeKFOyltbQK+z4Oi7t52prnGu1AIDEh7zfu4GL6o9uTU8vBwBxFH2/PDlJXIkxxmBLJSb0If2bV+j7cpuvv+6y/rNEx//g3d51XFSnOjS0SbFlVW0aY5io12m1WghgreVSeJ9sOMNay1Y8z8bvNjYaIq5UUOeaJ4Awy7bzMCQ0hpHRUfbb7eN5g4A4jjHWoAiVCxcxYUjhAQgApqamjoA2gIgwXKvRXy53x7FYW0JV6Xkz7a7nGNDVtoig3W1HUYQtlTDG0h2zF7BdBL2AZgEoOpHg9FhV8aeAZhEUT5UkTZuF2XlPnud47/Hek+U5uXMYEdIsQ1XPAzpZ1hRVjDF450jSFBHBeU+SpjjvCcOQTpKgIucBHxuNPqfKyNgYg3GMtZbywABpnuOcQwDvPc575F8dJHn+6ejwiJ2dHTpJQlytIt0rOysR+XwS937nZ4uL84Nx/KJSrfZHg4MYY856D/Ise3xvbu5lkfgDEMoD1NwvZ2sAAAAASUVORK5CYII=";
export default class Undo extends React.Component {
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
            <div class="Undo">Todo list
            <ul>
                {
                    this.state.Items.map((item) => (
                     <li>
                         <input type="checkbox" checked={item.checked} onChange={this.props.checkboxChange}/>
                         {item.item} 
                         <button type="button" onClick={this.props.handleEdit}><img src={editImg}/></button> 
                         <button type="button" onClick={this.props.handleTrash}><img src={trashImg}/></button> 
                    </li>
                    
                ))
                }
            </ul>
            </div>
        )
    }
}