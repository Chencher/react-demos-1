import React from 'react';
import BtnDo from '../btn-do';
import Panel from '../panel';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>root
            <BtnDo distColor="red"></BtnDo>  <BtnDo distColor="#000"></BtnDo> <BtnDo distColor="blue"></BtnDo>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
        </div>
    }
}