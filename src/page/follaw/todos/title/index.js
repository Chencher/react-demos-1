import React from 'react';
import './index.css';

export default function Index(props){
    console.log('title render');
    return <div className="todosTitle">
    我的任务清单{props.title}
    </div>
}