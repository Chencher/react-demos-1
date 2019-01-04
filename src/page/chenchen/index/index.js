import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <h1>In ChenChen page</h1>
            <div className="links">
                <Link to="chenchen/comment">评论   </Link>
                <Link to="chenchen/todos">任务清单</Link>
            </div>
        </div>
    }
}