import React, { Component } from 'react';
import './index.css';


export default class ToDoTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputList:[]
        }
    }
    render(){
        return(
            <div className="title">
                <span className="logo">ToDoList</span>
                <input placeholder="添加ToDo" className="content-input" defavalue={this.state.inputList} onChange={this.handleChangeInputValue} onKeyDown={this.handleEnterKeyDown}/>
            </div>
        )
    }
    handleChangeInputValue = (e)=>{
        this.setState({inputList:e.target.value})
        
    }
    handleEnterKeyDown(e){
        if(e.nativeEvent.keyCode === 13){ 
            
       }
    }
}
