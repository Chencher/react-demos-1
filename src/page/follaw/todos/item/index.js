import React from 'react';
import propTpyes from 'prop-types';
import './index.css';


export default class Index extends React.Component{

    static propTypes={
        id:propTpyes.string,
        title:propTpyes.string,
        state:propTpyes.number,
        onItemDelete:propTpyes.func
    }

    constructor(props){
        super(props);
    }

    handleItemOk(id){
        this.props.onItemOk(id);
    }

    render(){
        const getCheckButton = () => <input type="checkbox" onClick={() => { this.handleItemOk(this.props.id) }} />

        return <div className="follawTodosItem"
         onMouseLeave={(e)=>{
             e.target.style.backgroundColor="#fff";
         }}
         onMouseOver={(e)=>{
            e.target.style.backgroundColor='#ececec';
        }}>
            {this.props.state === 1 ? null :getCheckButton()}   {this.props.title} <a href="javascript:;" onClick={() => { this.props.onItemDelete(this.props.id)}}>删除</a>
        </div>
    }

}