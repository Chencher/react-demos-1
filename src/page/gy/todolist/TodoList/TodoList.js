import React, {Component} from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoArr:'',
            value:'',
            visible:false
        }
    }
    componentWillMount(){
        let todoArr = this.getLocalData() || [];
        this.setState({
            todoArr,
            visible:this.state.todoArr.length>1?true:false
        });
        console.log('componentDidMount');
    }
    handleTodo(val){
        let date = +new Date();
        let todoArr = this.state.todoArr;
        todoArr.unshift({
            todoName:val,
            date,
            status:'will'
        });
        this.setState({
            todoArr
        });
        this.setLocalData(this.state.todoArr);
    }
    delTodo(date){
        let todoArr = this.state.todoArr;
        todoArr.forEach((item,index) => {
            let delItem = item.date == date ? todoArr.splice(index,1) : todoArr;
        });
        this.setState({
            todoArr
        });
        this.setLocalData(todoArr);
    }
    finishTodo(date){
        let todoArr = this.state.todoArr;
        todoArr.forEach((item,index) => {
            if(item.date == date){
                todoArr[index].status = 'done';
            }
        });
        this.setState({
            todoArr
        });
        this.setLocalData(todoArr);
    }
    setLocalData(arr){
        localStorage.setItem('gytodo',JSON.stringify(arr));
    }
    getLocalData(){
        let todoArr = localStorage.getItem('gytodo');
        return JSON.parse(todoArr);
    }
    render(){
        let {todoArr} = this.state;
        return(
            <div className="gyTodoList">
                <div className="todoTitle">备忘录</div>
                <TodoAdd handleTodo={this.handleTodo.bind(this)} setLocalData={this.setLocalData.bind(this)}/>
                {todoArr && todoArr.map((item,index) => {
                    return <TodoItem   {...item} index={index} key={index} delTodo={this.delTodo.bind(this)} finishTodo={this.finishTodo.bind(this)}/>
                })}
            </div>
        )
    }
}
export default TodoList;