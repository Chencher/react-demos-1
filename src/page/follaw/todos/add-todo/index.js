import React from 'react';
import './index.css';

export default class Index extends React.Component{

    handleKeyDown=(e)=>{
        if(e.keyCode!==13)return;

        let v = e.target.value;
        if(!v)return;

        this.props.onAddTodo(e.target.value);
    }

    handleTextChange=(e)=>{
        let v = e.target.value;
        this.props.onTextChange && this.props.onTextChange(v);
    }

    componentDidMount(){
        
    }

    render(){
        return <div className="follawTodosAddTodo">
            <input type="text" onKeyDown={this.handleKeyDown} onChange={this.handleTextChange} value={this.props.addTitle}  placeholder="回车添加任务"/>
        </div>
    }

}