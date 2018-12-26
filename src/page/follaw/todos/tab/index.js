import React from 'react';
import propTypes from 'prop-types';
import './index.css';

export default class Index extends React.Component{


    static propTypes={
        active: propTypes.number,
        tabs:propTypes.array,
        onTabClick:propTypes.func
    }

    constructor(props){
        super(props);
    }

    handleTabClick=(index,e)=>{
        console.log(index);
        this.props.onTabClick(index);
    }

    render(){
        return <div className="follawTodosTab">
            {
                this.props.tabs.map(item => <span onClick={() => { this.handleTabClick(item.tabIndex)}} key={item.tabIndex} className={this.props.active===item.tabIndex?'active':''}>{item.tabName}</span>)
            }
        </div>
    }
}