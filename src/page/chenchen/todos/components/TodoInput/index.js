/**
 * 任务input
 */

import React from 'react';
import './index.css';

export default class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: '', //新任务
            taskName: '', //任务名称
            state: 'none' //当前展示输入框状态
        }
    }

    addItem = (e) => {
        let { value } = e.target;
        this.setState({
            newTask: value
        });
    }

    searchItem = (e) => {
        let { value } = e.target;
        this.setState({
            taskName: value
        });
    }

    add = () => {
        this.setState({
            state: 'add'
        });
    }

    search = () => {
        this.setState({
            state: 'search'
        })
    }

    addTask = () => {
        this.props.addTask(this.state.newTask, new Date().getTime());
        this.setState({
            state: 'none'
        })
    }

    render() {
        return <div className="top">
            <div className="btn-group">
                <button className="add" onClick={this.add} disabled={!this.state.state === 'add'}>新增</button>
                {/* <button className="search" onClick={this.search} disabled={!this.state.state === 'search'}>查询</button> */}
            </div>
            {this.state.state === 'add' ? <div className="add-input">
                <input onChange={this.addItem} placeholder="输入新增任务" val={this.state.newTask}></input>
                <button onClick={this.addTask}>确定</button>
            </div> : null}
            {/* {this.state.state === 'search' ? <div className="search-input">
                <input onChange={this.searchItem} placeholder="输入查询任务" val={this.state.taskName}></input>
            </div> : null} */}
        </div>
    }
}