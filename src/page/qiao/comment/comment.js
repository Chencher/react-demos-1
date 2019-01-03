import React, { Component } from 'react';
import CommentModule from '../components/QiaoComment/comment';
import CommentList from '../components/QiaoCommentList/commentlist';
import './comment.css';
export default class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentMessage:[]
        }
    }

    render(){
        return(
            <div className="comment-content">
                <CommentModule changeUserMessage={this.handleChangeUserMessage}/>
                <CommentList commentMessage={ this.state.commentMessage }/>
            </div>
        )
    }
    handleChangeUserMessage = ()=>{
        let commentMessage = JSON.parse(localStorage.getItem('userInfo'))
        this.setState({commentMessage})
    }
    componentDidMount(){
        this.handleChangeUserMessage();
    }
}