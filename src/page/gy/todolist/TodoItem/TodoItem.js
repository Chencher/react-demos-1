import React, {Component} from 'react';
import './TodoItem.css';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            index:''
        }
    }
    delTodo(){
        this.props.delTodo(this.props.date);
    }
    finishTodo(e){
        this.props.finishTodo(this.props.date);
    }
    render(){
        return(
            <div className="todoItem">
                <div className="todoContent">{this.props.todoName}</div>
                <div className="btnWrap">
                    {this.props.status==='will' ? <button className="finish" onClick={this.finishTodo.bind(this)}>完成</button> : <button className="done"></button>}
                    <button className="del"    onClick={this.delTodo.bind(this)}>删除</button>
                </div>
            </div>
        )
    }
}
export default TodoItem;