import React, {Component} from 'React';
import Add from '../Add/Add';
import List from '../List/List';
import './Wrap.css';

class Wrap extends Component{

    render(){
        return (
            <div className="wrap">
                <div className="title">-评论区-</div>
                <div className="componentWrap">
                    {/* 组件容器 */}
                    <Add/>
                    <List/>
                </div>
            </div>
        )
    }
}
export default Wrap;