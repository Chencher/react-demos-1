/**
 * 页面入口组件处理 
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="mainIndex">
            <h1 className="h1">rd 作业从这里开始!</h1>
            <div className="rdContent">
                <div className="mainLeft">
                    <ul>
                    <li>
                        <Link to="/follaw">Follaw Index</Link>
                    </li>
                    <li>
                        <Link to="/chenchen">ChenChen Index</Link>
                    </li>
                    <li>
                        <Link to="/ymk">YMK Index</Link>
                    </li>
                    </ul>
                </div>
                <div className="mainRight">
                {this.props.children}
                </div>
            </div>
        </div>
    }
}