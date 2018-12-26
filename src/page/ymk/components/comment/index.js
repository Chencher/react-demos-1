import React from 'react'

export default class Comment extends React.Component{
    render(){
        return (
            <div>
                <input value={this.props.inputValue} onChange={(v) => this.props.input(v.target.value)}></input>
                <br/>
                <br/>
                <button onClick={this.props.submit}>提 交</button>
            </div>
        )
    }
}