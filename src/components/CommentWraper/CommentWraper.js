import React, { Component} from 'react';
import CommentInput from '../CommentInput/CommentInput';
import CommentList from '../CommentList/CommentList';

import './CommentWraper.css';

export default class CommentWraper extends Component{

    constructor(props){
        super(props);

        this.state = {
            commentListArr:this.getData(),//评论列表
            submitNick:'',
            submitContent:''
        }
    }
    

    saveData=(list)=>{

        localStorage.setItem('comment',JSON.stringify(list));
    }

    getData=()=>{
        return JSON.parse(localStorage.getItem('comment')) || [];
    }

    handleOnNickChange = (v)=>{
       
        console.log('hello',v);
        this.setState({
            submitNick:v
        })
    }

    handleOnContentChange = (v)=>{
        console.log('content',v);
        this.setState({
            submitContent: v
        })
    }

    handleSubmitComment= () => {
        let list = this.state.commentListArr;
        let { submitNick: nick, submitContent:content} = this.state;
        list.unshift({
            nick,content
        });

        this.saveData(list);

        this.setState({
            commentListArr:list
        },()=>{
            this.setState({
                submitNick: '',
                submitContent:''
            })
        });

        console.log('submit');
    }

 
    render(){
        console.log(this.props.children);
        let submitInfo = {nick:this.state.submitNick,content:this.state.submitContent};
        return <div className="CommentWraperBox">
        <h1> - 评论区 - </h1>
            <CommentInput onSubmit={this.handleSubmitComment} {...submitInfo} onNickChange={this.handleOnNickChange} onContentChange={this.handleOnContentChange}/>
            <CommentList commentListArr={this.state.commentListArr}/>
        </div>
    }

}