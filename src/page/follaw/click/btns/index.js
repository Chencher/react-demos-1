import React from 'react';
import { increment} from '../reducer';
import {connect} from 'react-redux';


class Index extends React.Component {

    constructor(props) {
        super(props);
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
        count:state.numAdd.count
    }
}

function mapDispatch(dispatch){
    return {
        add:(cc)=>{
            dispatch(increment({
                name:1010
            }));
        }
    }
}

export default connect(mapState,mapDispatch)(Index)