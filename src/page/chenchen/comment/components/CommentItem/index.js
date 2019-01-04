import React from 'react';
import './index.css';

export default class CommentItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <div className="item-dl">
                <div className="item-dt">昵称：{this.props.item.nickName}</div>    
                <div className="item-dt">评论内容：{this.props.item.comment}</div>
                <div className="item-dt">评论时间：{this.props.item.time}</div>
            </div>
        </div> 
    }
}