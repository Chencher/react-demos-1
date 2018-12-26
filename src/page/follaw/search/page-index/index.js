import React from 'react';
import './index.css';

const getIndexEles=()=>{
    let arr=[];
    for(let i=0;i<20;i++){
        arr.push(<div key={i} className="carInfo">车辆信息 {i}</div>);
    }
    return arr;
}

export default class Index extends React.Component{

    static defaultProps={
        isSearchPanelActive:false
    }
    
    constructor(props){
        super(props);
        console.log('constructor');
    }

    render(){

        return <div className="pageIndexBox">
            <div className="dinput"><input onClick={() =>{ this.props.onSearchInputClick();console.log('ddd');}} readOnly type="text" placeholder="搜索您想要的车"/></div>
            {getIndexEles()}
        </div>

    }

}