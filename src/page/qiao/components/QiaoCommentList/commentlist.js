import React, { Component } from 'react';
import './commentlist.css';

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render(){
        console.log(typeof this.props.commentMessage)
        const commentMessageList = this.props.commentMessage.length > 0 && this.props.commentMessage.map((item, index) => {
            return  <div key={index}>
                        <div>昵称:{item.nick}</div>
                        <div>内容:{item.comment}</div>
                    </div>
        });

        return(
            <div className="content">
                <div>评论内容</div>
                <div>
                    <div>
                        <span></span>
                    </div>
                    {commentMessageList}
                </div>
            </div>
        )
    }
}