/**
 * 评论区页面
 */

import React from 'react';
import Todolist from './components/TodolList';
import './index.css';

export default class App extends React.Component {
    render() {
        return <div>
            <h1>任务列表</h1>
            <Todolist />
        </div>
    }
}