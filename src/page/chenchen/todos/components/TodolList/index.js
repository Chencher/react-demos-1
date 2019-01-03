/**
 * 评论区页面
 */

import React from 'react';
import TodoItem from '../TodoItem';
import TodoInput from '../TodoInput';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskList: JSON.parse(localStorage.getItem('taskList')) || []
        }
    }

    //key为时间戳id
    addToList = (val, key) => {
        let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.unshift({content: val, state: 'new', id: key});
        localStorage.setItem('taskList', JSON.stringify(taskList));
        console.log(val);
        this.setState({
            taskList
        });
    }

    finished = (id) => {
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        let index = taskList.findIndex((item) => {
            return item.id === id;
        });
        if(index < 0) return;
        taskList[index].state = 'finished';
        localStorage.setItem('taskList', JSON.stringify(taskList));
        this.setState({
            taskList
        });
    }

    delete = (id) => {
        let taskList = JSON.parse(localStorage.getItem('taskList'));
        let index = taskList.findIndex((item) => {
            return item.id === id;
        });
        taskList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        this.setState({
            taskList
        });
    }

    renderTaskList = () => {
        return this.state.taskList.map((item, index) => {
            return <TodoItem content={item} index={index + 1} key={item.id} finishedTask={this.finished} deleteTask={this.delete} />
        });
    }

    render() {
        return <div>
            <TodoInput addTask={this.addToList} />
            {this.renderTaskList()}
        </div>
    }
}