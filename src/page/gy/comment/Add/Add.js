import React, {Component} from 'React';

import './Add.css';
class Add extends  Component{


    render(){
        return(
            <div className="add">
                <div className="inputWrap">
                    <span className="username">用户名</span>
                    <input type="text"/>
                </div>
                <textarea className="content" cols="30" rows="10"></textarea>
                <div className="submitBtn">提交</div>
            </div>
        )
    }
}

export default Add;