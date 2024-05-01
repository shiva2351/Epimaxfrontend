
import { Component } from "react";
import { MdDelete } from "react-icons/md";

import "./index.css"

class MainCard extends Component{
    state={todoUserInput:"",}
  
  textChange=(event)=>{
    this.setState({todoUserInput:event.target.value})
  }

  onAddTodo=(event)=> {
  
    if (event.value === "") {
      alert("Enter Valid Text");
      return;
    }
  
  
    
    
  }

  render(){
    const {todoUserInput}=this.state
    return (
     <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" onChange={this.textChange} value={todoUserInput} class="todo-user-input" placeholder="What needs to be done?"/>
            <button type='button' class="button" onClick={this.onAddTodo}>Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer">
                <li className="main-items">
                    <input id="c1" type="checkbox"/> 
                    <div  className=" label-container"><label htmlFor="c1">
                            walking
                    </label>
                    <MdDelete />

                    </div>
                    
                </li>
            </ul>
            <button class="button" id="saveTodoButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  );}
}

export default MainCard