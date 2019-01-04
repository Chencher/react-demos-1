import React, {Component} from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component{
    render(){
        return(
            <div>
                <TodoAdd/>
                <TodoItem/>
            </div>
        )
    }
}
export default TodoList;