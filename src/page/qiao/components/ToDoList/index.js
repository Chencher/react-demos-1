import React , {Component} from 'react';
import './index.css';


export default class List extends Component{
    render(){
        return (
            <div className="todolist">
                <input type="checkbox"/>
                <span>吃饭</span>
                <span>删除</span>
            </div>
        )
    }
}