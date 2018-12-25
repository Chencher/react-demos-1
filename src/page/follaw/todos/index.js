/**
 * 任务列表
 * 添加
 * 删除
 * 修改
 * 更改状态
 */

import React from 'react';
import Root from './root';

export default class Index extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="todosIndex">
            <Root title="hello,e"></Root>
        </div>
    }
}