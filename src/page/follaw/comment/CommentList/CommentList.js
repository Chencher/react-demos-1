import React from 'react';
import CommentItem from '../CommentItem/CommentItem';

import './CommentList.css';

export default class Commentlist extends React.Component{

    constructor(props) {
        super(props);

    }

    //好处就是声明式 代替 命令式
    static defaultProps = {
        commentListArr:[]
    }
 
    render(){
        let commentListArr = this.props.commentListArr;
        return <div className="Commentlist">
            <h1>评论内容</h1>
            {commentListArr.map((item,i) => <CommentItem key={i} item={item} />)}
        </div>
    }

}