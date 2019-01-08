import React, {Component} from 'react';

import './Add.css';
class Add extends  Component{
    constructor(props){
        super(props);
        this.state = {
            nickname:'',
            comment:''
        }
    }
    getnickname(e){
        this.setState({
            nickname:e.target.value
        });
    }
    getComment(e){
        this.setState({
            comment:e.target.value
        });
    }
    addComment(){
        let {nickname,comment} = this.state;
        this.setState({
            nickname:'',
            comment:''
        });
        if(nickname == '' || comment == ''){
            alert('请填写昵称或者评论');
            return;
        }
        this.props.addComment(nickname,comment);
    }
    render(){
        return(
            <div className="add">
                <div className="inputWrap">
                    <span className="nickname">用户名:</span>
                    <input type="text" placeholder="请输入昵称" value={this.state.nickname} onChange={this.getnickname.bind(this)}/>
                </div>
                <textarea className="content" cols="30" rows="10"placeholder="请输入评论" value={this.state.comment} onChange={this.getComment.bind(this)}></textarea>
                <div className="submitBtn" onClick={this.addComment.bind(this)}>提交</div>
            </div>
        )
    }
}

export default Add;