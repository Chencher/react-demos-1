import React, { Component } from 'react';
import ToDoTitle from '../components/ToDoTitle/index';
import DoingList from '../components/DoingLists/index';
import DoneList from '../components/DoneLists/index';


export default class ToDoList extends Component{
    render(){
        return (
            <div>
                <ToDoTitle/>
                <DoingList/>
                <DoneList/>
            </div>
        )
    }
}
