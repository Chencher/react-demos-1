import React, { Component } from 'react';
import './comment.css';

export default class CommentModule extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValu:'',
            textareaValue:'',
            userInfo:[]
        }
    }

    render(){
        return(
            <div>
                <div className="title">评论</div>
                <div className="user-name">
                    <span>用户名</span>
                    <input className="user-nick" value={this.state.inpValu} onChange={ this.inputOnBlur }/>
                </div>
                <textarea className="comment-text" value={this.state.textareaValue} onChange={this.handleTextareaChange}></textarea>
                <button className="submit" onClick={ this.handleSubmitClick }>提交</button>
            </div>
        )
    }
    
    inputOnBlur = (e)=>{
        this.setState({
            inpValu:e.target.value
        })
    }
    handleTextareaChange=(e)=>{
        this.setState({
            textareaValue:e.target.value
        })
    }
    handleSubmitClick=()=>{
        let data = this.state.userInfo;
        let userInfo = data.concat([{'nick':this.state.inpValu,'comment':this.state.textareaValue}]);
        this.setState({
            userInfo:userInfo,
            inpValu:'',
            textareaValue:''
        },()=>{
            localStorage.setItem('userInfo',JSON.stringify(this.state.userInfo))
            this.props.changeUserMessage();
        })
    }
}