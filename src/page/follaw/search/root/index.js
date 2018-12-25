import React from 'react';
import PageIndex from '../page-index';
import './index.css';
import SpanelIndex from '../s-panel';

const DataList = [{
    id:1,
    cnname:'宝马',
    enname:'baoma',
    price:'50万'
},
    {
        id:2,
        cnname: '奥迪',
        enname: 'aodi',
        price: '20万'
    }
]

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isSearchPanelActive:false,
            searchResult:[],
            searchBackItem:null//搜索结果中回传的对象
        }
    }

    

    getSearchResult=(key)=>{
        return DataList.filter(item => item.cnname.indexOf(key) > -1 || item.enname.indexOf(key) > -1);
    }

    handleSearchInputClick=()=>{
        this.setState({
            isSearchPanelActive: true
        });
    }

    handleSearchCancel=()=>{
        this.setState({
            isSearchPanelActive: false
        });
    }

    handleInputKey=(key)=>{
        console.log(key);
        let res = this.getSearchResult(key.trim());
        this.setState({
            searchResult:res
        });
        
    }

    handleClickSearchItem=(id)=>{
        let data = DataList.filter(item=>item.id===id);
        console.log(data);
        this.setState({
            searchBackItem:data,
            isSearchPanelActive: false
                });
    }

    renderSearchResult=(data)=>{
        console.log('data',data);
        data=data[0];
        return <div>{data.cnname}{data.enname}</div>
    }

    render(){
        return <div className="follawSearchRoot">
                <h1>首页</h1>
            {this.state.isSearchPanelActive ? <SpanelIndex dataList={this.state.searchResult} onSearchItemClick={this.handleClickSearchItem} onInputKey={this.handleInputKey} onSearchCancel={this.handleSearchCancel}></SpanelIndex>:null}
            {this.state.searchBackItem && this.renderSearchResult(this.state.searchBackItem)}
            <PageIndex onSearchInputClick={this.handleSearchInputClick}></PageIndex>
        </div>
    }

}