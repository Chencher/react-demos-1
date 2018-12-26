/**
 * 评论项
 */
import propTpye from 'prop-types';
import React from 'react';
import './CommentItem.css';
export default class CommentItem extends React.Component{

    static defaultProps = {
        item:{}
    }

    static propTypes={
        item: propTpye.object
    }

    constructor(props){
        super(props);
    }

    render(){
        let {nick,content} = this.props.item;

        return <div className="CommentItem">
        nick:{nick}<br/>
        {content}
        </div>
    }
}