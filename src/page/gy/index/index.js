import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Index extends Component{

    render(){
        return(
            <div>
                <h2>gy's page</h2>
                <Link to="gy/comment">评论</Link><br/>
                <Link to="gy/todolist">任务清单</Link>
            </div>
        )
    }

}

export default Index;