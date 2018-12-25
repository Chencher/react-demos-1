import React, { Component }  from 'react';
import hiLoadNick from '../hi-loadnick';

import './CommentInput.css';

 class CommentInput extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

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
                <input type="text" palceholder="请输入昵称" value={this.props.saveNick || this.props.nick} onChange={this.handleNickChange} />
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


export default hiLoadNick(CommentInput,'nickname');