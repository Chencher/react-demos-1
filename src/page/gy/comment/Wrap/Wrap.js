import React, {Component} from 'react';
import Add from '../Add/Add';
import List from '../List/List';
import './Wrap.css';

class Wrap extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentArr:[]
        }
    }
    componentWillMount(){
        let commentArr = this.getLocalData() || [];
        this.setState({
            commentArr
        });
    }
    addComment(nickname,comment){
        let time = +new Date();
        let {commentArr} = this.state;
        let commentItem = {
            time,
            nickname,
            comment
        }
        commentArr.unshift(commentItem);
        this.setState({
            commentArr 
        });
        this.setLocalData(commentArr);
    }
    delComment(time){
        let {commentArr} = this.state;
        let index = commentArr.findIndex((item,index) => {
            return item.time == time;
        });
        if(index < 0) {
            return false;
        }
        commentArr.splice(index,1);
        this.setState({
            commentArr
        });
        this.setLocalData(commentArr);
    }
    setLocalData(arr){
        localStorage.setItem('gyComment',JSON.stringify(arr));
    }
    getLocalData(){
        let arr = localStorage.getItem('gyComment');
        return JSON.parse(arr);
    }
    render(){
        let {commentArr} =  this.state;
        return (
            <div className="wrap">
                <div className="title">-评论区-</div>
                <div className="componentWrap">
                    {/* 组件容器 */}
                    <Add addComment={this.addComment.bind(this)}/>
                    <List delComment={this.delComment.bind(this)} commentArr={commentArr}/>
                </div>
            </div>
        )
    }
}
export default Wrap;