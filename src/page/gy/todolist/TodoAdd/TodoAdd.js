import React, {Component} from 'react';
import './TodoAdd.css';
class TodoAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    addTodoClick(){
        let todoArr = this.getData() || [];
        todoArr.unshift({
            todoName:this.state.value
        });
        this.setData(todoArr);
        this.setState({
            value:''
        });
    }
    setData(arr){
        localStorage.setItem('gytodo',JSON.stringify(arr));
    }
    getData(){
        let todoArr = localStorage.getItem('gytodo');
        return JSON.parse(todoArr);
    }
    handleValue(e){
        this.setState({
            value:e.target.value
        });
    }
    render(){
        return(
            <div className="todoAdd">
                <input type="text"  placeholder="请输入您的任务" value={this.state.value} onChange={this.handleValue.bind(this)}/> 
                <button className="submitBtn" onClick={this.addTodoClick.bind(this)}>提交</button>
            </div>
        )
    }
}
export default TodoAdd;