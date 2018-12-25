/**
 * 自定义路由设置  已废弃
 * 监听浏览器的hash更改事件，可以达到要求。但是不够灵活，不方便。不通用
 */

import React from 'react';
import CommentIndex from '../page/follaw/comment';
import NotFound from '../page/none/not-found';
import Hello from '../page/follaw/hello';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            route:'/'
        }
    }

    componentDidMount(){

        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })

        this.setState({
            route: window.location.hash.substr(1)
        })
       
    }
    

    render(){
        let ActiveCom=null;
        switch (this.state.route) {
            case '/follaw':
                ActiveCom = CommentIndex;
                break;

            case '/follaw/time':

                ActiveCom = Hello;

                break;
            default:
                ActiveCom=NotFound;
                break;
        }

        return <div>
            <h1>Follaw's  App</h1>
            <ul>
                <li><a href="#/follaw">首页</a></li>
                <li><a href="#/follaw/time">当前时间</a></li>
            </ul>
            <ActiveCom/>
        </div>
    }
}