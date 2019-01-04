import React, {Component} from 'React';
import Add from '../Add/Add';

import './App.css'


class App extends Component{

    render(){
        return (
            <div className="Wrap">
                <div className="title">-评论区-</div>
                <div className="componentWrap">
                    {/* 组件容器 */}
                    <Add/>
                </div>
            </div>
        )
    }
}
export default App;