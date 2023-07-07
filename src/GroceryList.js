import { Component } from "react";
import check from "./icon3.png"

export class GroceryList extends Component {

    state = {
        inputUser:"",
        groceryList: []
    }
        onChangeEvent(e) {
            this.setState({ inputUser: e })
           
            }

    addItem(input) {
        if (input ==="") {
            alert("Please enter an item")
        } else{
        let ListArray = this.state.groceryList;
        ListArray.push(input);
        this.setState({ groceryList: ListArray, inputUser:"" })
    }
    }
    deleteItem(){
        let ListArray = this.state.groceryList;
        ListArray = [];
        this.setState({groceryList : ListArray})
    }
    crossWord(e) {
        const list = e.target;
        list.classList.toggle('crossed');
        console.log(list)
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                <input type="text" placeholder="Enter a meal" 
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.inputUser} />
                </div>
                <div>
                    <button onClick = {() => this.addItem(this.state.inputUser)} className="add">ADD</button>
                </div>
                <div>
                <ul>
                {this.state.groceryList.map((item, index) =>(
                         <li onClick = {this.crossWord} key={index}><img src={check} alt="icon" width="25px"/>{item}</li>
                         
                        ))}
                </ul>
                <button onClick={() => this.deleteItem(this.state.delete)} className="delete">DELETE</button>
                </div>
                </form>
            </div>
        )
    }

}