import React, { Component }  from 'react';
import './CommentInput.css';

export default class CommentInput extends Component{

    handleNickChange=(e)=>{
        this.props.onNickChange(e.target.value);
    }

    handleContentChange=(e)=>{
        this.props.onContentChange(e.target.value);
    }

    handleSubmit=(e)=>{
        this.props.onSubmit();
    }

    render(){
        return <div className="CommentInputBox">
            <div className="CommentInputBoxRow">
                <input type="text" palceholder="请输入昵称" value={this.props.nick} onChange={this.handleNickChange} />
            </div>
            <div className="CommentInputBoxRow">
                <textarea palceholder="请输入昵称" value={this.props.content} onChange={this.handleContentChange}></textarea>
            </div>
            <div className="CommentInputBoxRow">
               <button type="button" onClick={this.handleSubmit}>提 交</button>
            </div>
        </div>
    }

}
