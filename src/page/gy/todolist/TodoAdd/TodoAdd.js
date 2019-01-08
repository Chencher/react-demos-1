import React, {Component} from 'react';
import './TodoAdd.css';
class TodoAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    handleValue(e){
        this.setState({
            value:e.target.value
        });
    }
    handleTodo(){
        this.props.handleTodo(this.state.value);
        this.setState({
            value:''
        });
    }
    noValue(){
        alert('请先填写任务');
    }
    render(){
        return(
            <div className="todoAdd">
                <input type="text"  placeholder="请输入您的任务" value={this.state.value} onChange={this.handleValue.bind(this)}/> 
                <button className="submitBtn" onClick={this.state.value !== '' ? this.handleTodo.bind(this) : this.noValue.bind(this) }>提交</button>
            </div>
        )
    }
}
export default TodoAdd;