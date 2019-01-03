import React from 'react';
import './index.css';

export default class CommentInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nickName: '',
            comment: '',
            time: '',
            error: ''
        }
    }

    inputChange = (e) => {
        this.setState({
            nickName: e.target.value
        });
    }

    areaChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    submit = () => {
        let time = this.formatDate(new Date());
        this.setState({
            time
        }, () => {
            if(this.state.nickName === '' || this.state.comment === ''){
                this.setState({
                    error: '昵称和评论不可为空'                  
                });
                return;
            }
            this.props.setComment(this.state);
            this.setState({
                nickName: '',
                comment: '',
                time: ''
            });
        })     
    }

    formatDate = (val) => {
        return val.getFullYear() + '/' + (val.getMonth() + 1) + '/' + val.getDate() + ' ' + val.getHours() + ':' + val.getMinutes() + ':' + val.getSeconds()
    }

    render() {
        return <div className="form">
            <input className="input" type='text' placeholder="请输入昵称" onChange={this.inputChange} value={this.state.nickName} />
            <textarea className="textarea" placeholder="请输入评论" rows="10" cols="10" onChange={this.areaChange} value={this.state.comment} />
            {this.state.error}            
            <button className="button" onClick={this.submit}>提交</button>
        </div>
    }
}