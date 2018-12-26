/**
 * 评论区页面
 */

import React from 'react';
import ComponentWrap from '../components/CommentIWrap';

export default class App extends React.Component {
    render() {
        return <div>
            <h1>评论区</h1>
            <ComponentWrap />
        </div>
    }
}