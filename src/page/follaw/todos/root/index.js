/**
 * 任务列表
 * 添加
 * 删除
 * 修改
 * 更改状态
 */

import React from 'react';
import Title from '../title';
import './index.css';
import Tab from '../tab';
import ItemList from '../item-list';
import AddTodo from '../add-todo';

const TABS =  [
    { tabName:'进行中', tabIndex:0},
    { tabName: '已完成', tabIndex:1 },
    { tabName: '回收站', tabIndex: 2 }
];

const STATE={
    RUN:0,
    OK:1,
    RE:2
}

let todoDb={
    key:'todolist_save',
    save:function(data){
        console.log(data);
        localStorage.setItem(this.key,JSON.stringify(data||[]));
    },
    get:function(){
        return JSON.parse(localStorage.getItem(this.key)||[]);
    }
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            activeTabIndex:0,
            todoList:[],
            addTitle:''
        }
    }

    handleTabClick=(index)=>{
        this.setState({
            activeTabIndex:index
        });
    }
 

    handleOnAddTodo=(v)=>{
        let list = this.state.todoList;
        list.unshift({
            title:v,
            id:+new Date()+'',
            state:STATE.RUN
        });

        this.setState({
            todoList:list,
            addTitle:'',
            activeTabIndex:STATE.RUN
        });
        todoDb.save(this.state.todoList);

    }

    handleTextChange=(v)=>{
        this.setState({
            addTitle: v
        });
    }

    handleItemDelete=(id)=>{
        let list = this.state.todoList,idIndex=null;
        console.log('root',id);
       
        list.forEach((item,i)=>{
           if(item.id===id){
              if(item.state === STATE.RE){
                //如果实在回收站，则需要彻底删除
                idIndex = i; //这里无法退出,不好
              }else{
                  item.state = STATE.RE;

              }
           }
        });
        if(idIndex!==null)
        list.splice(idIndex,1);


        this.setState({
            todoList:list
        });
        todoDb.save(this.state.todoList);

    }

    handleItemOk = (id) => {
        let list = this.state.todoList;
        console.log('root', id);
        list.forEach((item, i) => {
            if (item.id === id) {
                item.state = STATE.OK;
            }
        });

        this.setState({
            todoList: list
        });
        todoDb.save(this.state.todoList);

    }


    componentDidMount(){
        console.log(todoDb.get());
        this.setState({
                todoList: todoDb.get()
        })
    }

    render() {
        console.log('root render');
        return <div className="follawTodosRoot">
            <Title title="hello"></Title>
            <AddTodo onTextChange={this.handleTextChange} onAddTodo={this.handleOnAddTodo} addTitle={this.state.addTitle}></AddTodo>
            <Tab tabs={TABS} onTabClick={this.handleTabClick} active={this.state.activeTabIndex}></Tab>
            <ItemList onItemOk={this.handleItemOk} todoList={this.state.todoList} activeTabIndex={this.state.activeTabIndex} onItemDelete={this.handleItemDelete} ></ItemList> 
        </div>
    }
}