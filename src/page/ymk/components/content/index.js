import React from 'react'

export default class Content extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    {this.props.content.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}