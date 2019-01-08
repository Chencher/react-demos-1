import React, {Component} from 'react';
import './TodoItem.css';
class TodoItem extends Component{
    render(){
        return(
            <div className="todoItem">
                <div className="todoContent">TodoItem....</div>
                <div className="btnWrap">
                    <button className="finish">完成</button>
                    <button className="del">删除</button>
                </div>
            </div>
        )
    }
}
export default TodoItem;