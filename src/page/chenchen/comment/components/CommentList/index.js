import React from 'react';
import CommentItem from '../CommentItem';
import './index.css';

export default class CommentList extends React.Component {
    constructor(props){
        super(props);
    }

    drawList = () => {
        return this.props.commentList.map((item) => {
            return <CommentItem item={item} key={item.time}></CommentItem>
        })
    }

    render() {
        return <div className="comment-list">
            {this.drawList()}
        </div>
    }
}