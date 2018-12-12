import React from 'react';



export default class Index extends React.Component{


    constructor(props){
        super(props);
        this.timer=null;
        this.state = {
            dateTime: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                dateTime:new Date().toLocaleTimeString()
            })

        },1000);
    }

    render(){
        return <div>
            当前时间:{this.state.dateTime}
        </div>
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

}