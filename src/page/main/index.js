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
<<<<<<< HEAD
                            <Link to="/follaw">Follaw Index</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/qiao">Qiao Index</Link>
=======
                                <Link to="/follaw">Follaw Index</Link>
                        </li>

                        <li>
                                <Link to="/ymk">YMK Index</Link>
>>>>>>> 644d42a4e51153a9d3f06417869ffa58d357122d
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