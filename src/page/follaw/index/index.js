/**
 * 首页 作为容器显示
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="follawIndex">
        <h1>in follaw page.</h1>
        <div className="links">
                <Link to="follaw/comment">评论</Link>
                <Link to="follaw/time">时间</Link>
                <Link to="follaw/todos">任务清单</Link>
                <Link to="follaw/search">搜索</Link>
                <Link to="follaw/click">点击</Link>
        </div>
        </div>
    }
}