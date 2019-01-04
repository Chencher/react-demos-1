import React, {Component} from 'react';
import TodoList from './TodoList/TodoList';
import './index.css';

class App extends Component{
    render(){
        return(
            <div className="todoWrap">
                <TodoList/>
            </div>
        )
    }
}
export default App;