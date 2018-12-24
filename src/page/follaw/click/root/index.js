import React from 'react';
import Btns from '../btns';
import Texts from '../texts';
export default class Index extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div>
        <Btns></Btns>
         <Texts></Texts>
            <Texts></Texts>
            <Texts></Texts>
        </div>
    }

}