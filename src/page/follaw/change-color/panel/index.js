import React from 'react';
import {connect} from 'react-redux';

class Index extends React.Component{
    constructor(props){
        super(props);
        console.log('this.props',this.props);
    }
    render(){
        let bgColor = { background:this.props.distColor};
        console.log('bgcolor', this.props);

        return <div style={{height:'100px',width:'100px',border:'solid 1px #ccc',marginTop:'10px',marginLeft:'10px',marginBottom:'10px',...bgColor}}>
        this is panel</div>
    }
}


export default connect((state)=>
{
    return {distColor:state.changeColor.distColor}
})(Index);

