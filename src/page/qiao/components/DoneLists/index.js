import React , {Component} from 'react';
import './index.css';
import List from '../ToDoList/index';



export default class DoneList extends Component{
    render(){
        return (
            <div>
               <div className="ding-things">
                    <span className="ding-title">已经完成</span>
                    <span className="todo-count">1</span>
                </div>
                <List/>
            </div>
        )
    }
}