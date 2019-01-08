import React from 'react';
import Btns from '../btns';
import Texts from '../texts';
import {connect} from 'react-redux';

class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log('click root render');
        return <div>
        <Btns tips="点击按钮有惊喜"></Btns>
            <Texts showText={this.props.count}></Texts>
            <Texts showText={this.props.count}></Texts>
            <Texts showText={this.props.count}></Texts>
        </div>
    }
}

function mapState(state) {
    return {
        count:state.numAdd.count
    }
}

function mapDispatch(dispatch){
    return {
        onTest:()=>{
            console.log('aa');
        }
    }
}

export default connect(mapState,mapDispatch)(Index);