import React from 'react';
import CommentInput from '../CommentInput';
import CommentList from '../CommentList';

export default class CommentWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            commentList: JSON.parse(localStorage.getItem('ChenComment')) || []
        }
    }

    setComment = (val) => {
        let commentArr =  JSON.parse(localStorage.getItem('ChenComment')) || [];
        commentArr.unshift(val);
        localStorage.setItem('ChenComment', JSON.stringify(commentArr));
        console.log(val);
        this.setState({
            commentList: commentArr
        });
    }

    render() {
        return <div>
            <CommentInput setComment={this.setComment} />
            <CommentList commentList={this.state.commentList} />
        </div>
    }
}