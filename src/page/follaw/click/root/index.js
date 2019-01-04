import React from 'react';
import Btns from '../btns';
import Texts from '../texts';
import {connect} from 'react-redux';

class Index extends React.Component{

    constructor(props){
        super(props);
        console.log('click/root/index',this.props);
    }

    render(){
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
        count:state.count
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