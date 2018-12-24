import React from 'react';
import './index.css';

export default class Index extends React.Component{

    static defaultProps={
        dataList:[]
    }
    constructor(props){
        super(props);
        this.sinput= React.createRef();
    }

    componentDidMount(){
        console.log(this.sinput);
        this.sinput.current.focus();
    }

    handleInputKey=(e)=>{
        let v = e.target.value;
        this.props.onInputKey(v);
    }

    handleResultItem=(id,e)=>{
        this.props.onSearchItemClick(id);
    }


    getSearchResult=(datalist)=>{
        return datalist.length>0? datalist.map(item=>{
            return <div onClick={()=>this.handleResultItem(item.id)} key={item.id}>{item.cnname} {item.enname}</div>
        }):<div></div>
    }

    render(){
        return <div className="follawSearchSPanel">
            <input type="text" ref={this.sinput}  onKeyUp={this.handleInputKey} placeholder="请输入搜索的车" /> <a href="javascript:;" onClick={()=>this.props.onSearchCancel()}>取消</a>
            <div className="resultPanel">
            {this.getSearchResult(this.props.dataList)}
            </div>
        </div>
    }

}