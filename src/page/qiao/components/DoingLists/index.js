import React , {Component} from 'react';
import './index.css';
import List from '../ToDoList/index';



export default class DoingList extends Component{
    render(){
        return (
            <div>
                <div className="ding-things">
                    <span className="ding-title">正在进行</span>
                    <span className="todo-count">1</span>
                </div>
                <List/>
            </div>
        )
    }
}