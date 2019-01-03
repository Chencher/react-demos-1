/**
 * 具体任务
 */

import React from 'react';
import './index.css';

export default class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.id = this.props.content.id;
    }

    finished = () => {
        this.props.finishedTask(this.id);
    }

    delete = () => {
        this.props.deleteTask(this.id);
    }

    render() {
        return <div className='item'>
            <div className="item-index">{this.props.index}</div>
            <div className={this.props.content.state === 'finished' ? 'item-content item-finished' : 'item-content'}>
                <div className="item-text">{this.props.content.content}</div>
            </div>
            {this.props.content.state === 'new' ? <button className="finished" onClick={this.finished}>完成</button> : null}
            <button className="delete" onClick={this.delete}>删除</button>
        </div>
    }
}