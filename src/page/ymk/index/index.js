import React from 'react'
import Title from '../components/title'
import Comment from '../components/comment'
import Content from '../components/content'
 
export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[], // 评论列表
            title:'评论', 
            inputContent:'' ,// 输入内容
        }
    }
    handleSubmit(){
        let list = this.state.list
        let inputContent = this.state.inputContent
        if(inputContent){
            list.push(inputContent)
        
            console.log(list, inputContent)
            this.setState({
                list:list
            },()=>{
                this.setState({
                    inputContent:''
                })
            })
        }
        
    }
    handleInput(v){
        console.log(v)
        this.setState({
            inputContent:v
        })
    }
    render(){
        return (
            <div>
                <Title title={this.state.title}/>
                <Comment inputValue={this.state.inputContent} submit={this.handleSubmit.bind(this)} input={this.handleInput.bind(this)}/>
                <Content content={this.state.list}/>
            </div>
        )
    }
}