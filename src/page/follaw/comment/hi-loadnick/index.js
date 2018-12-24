import React from 'react';


const Hello = (props)=> <div>我是一个div {props.name}</div>;
const HellowWorld = ()=> <Hello name="哈哈哥" />

const test = <h1 name='ddd'>121212</h1>

export default function hiLoadNick(WrappedComponent,keyName){
    return class extends React.Component{
   
        constructor(props){
            super(props);
        }

        render(){
            let data = localStorage.getItem(keyName) || '';
            console.log('savenick',data);
            return <div>
                     {test}
                    <HellowWorld></HellowWorld>
                    <WrappedComponent {...this.props } saveNick = { data } ></WrappedComponent>
                </div >
            
        }
    }
}
