import React, {Component} from 'react';
import './Item.css';
class Item extends Component{
    constructor(props){
        super(props);
    }
    getLocalTime(time) { 
        return new Date(parseInt(time)).toLocaleString().replace(/:\d{1,2}$/,' '); 
    }
    delComment(){
        this.props.delComment(this.props.time);   
    }
    render(){
        let {nickname,comment,time} = this.props;
        return(
            <div className="commentList">
                <div className="commentWrap">
                    <span className="nickName">{nickname} : </span>
                    <p className="comment">{comment}</p>
                </div>
                <div className="bottomWrap">
                    <div className="delBtn" onClick={this.delComment.bind(this)}>删除</div>
                    <div className="time">{this.getLocalTime(time)}</div>
                </div>
            </div>
        )
    }
}
export default Item;