import React from 'react';
import {connect} from 'react-redux';
import { ACTION_CHANGE_COLOR} from '../redux/reducer';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps={
        distColor:'green'
    }

    handleClick=()=>{
        console.log('change color click');
        this.props.changeColor(this.props.distColor);
    }

    render() {
        console.log('change color btn render');
        return <div><button style={{border:'solid 1px #ccc'}} onClick={this.handleClick}  type="button">改变颜色 - {this.props.distColor} </button></div>
    }
}

export default connect(null,(dispatch,ownerState)=>{
    return {
        changeColor:function (distColor) {
            let data = {
                distColor
            };
            setTimeout(() => {
                console.log('在回调中出发distpatch');
                dispatch({ type: ACTION_CHANGE_COLOR, data });

            }, 1000);
        }
    }
})(Index);