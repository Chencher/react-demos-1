import React from 'react';
import { increment} from '../../common/redux/action';
import {connect} from 'react-redux';


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(pre,now){
        return false;
    }

    render() {
        console.log('coms btn srender');
        return <div>
            <button type="button" onClick={() => {this.props.add('cc')}}>增加</button>
        </div>
    }

}

function mapState(state,ownProps){
    console.log('mapstate',ownProps);
    return {
        count:state.count
    }
}

function mapDispatch(dispatch,ownProps){
    console.log('mapdispatch',ownProps);
    return {
        add:(cc)=>{
            console.log('cc',cc);
            dispatch(increment(ownProps));
        }
    }
}

export default connect(mapState,mapDispatch)(Index)