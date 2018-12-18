import React from 'react';
import Item from '../item';
import propType from 'prop-types';

import './index.css';

export default class Index extends React.Component{

    static propTeyps={
        onItemDelete:propType.func,
        todoList:propType.array,
        activeTabIndex: propType.number
    }

    static defaultProps={
        todoList:[
            {title:'今天的任务就是笑',id:'121212',state:0}
        ]
    }

    constructor(props){
        super(props);
    }


    handleItemDelete=(id)=>{
        console.log('delete',id);
        this.props.onItemDelete(id);
    }
 

    handleItemOk = (id) => {
        this.props.onItemOk(id);
    }

    render(){
        console.log('item list render');
        console.log(this.props.activeTabIndex);
        return <div className="follawTodosItemList" >
        {
                this.props.todoList.filter(item => item.state === this.props.activeTabIndex).map((item,index)=>{
                    return <Item key={item.id} onItemOk={this.handleItemOk} {...item} onItemDelete={this.handleItemDelete}></Item>;
            })
        }
        </div>
    }

}