/**
 * 评论区页面
 */

import React from 'react';
import CommentInput from './CommentInput/CommentInput';
import CommentWraper from './CommentWraper/CommentWraper';

const Input = CommentInput;

export default class App extends React.Component {
    render() {
        return <div>
            <CommentWraper>
            </CommentWraper>
        </div>
    }
}