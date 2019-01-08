import React,{Component} from 'react';
import Item from '../Item/Item';
import './List.css';

class List extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {commentArr} = this.props;
        return (
            <div className='commentWrap'>
                <div className='listTitle'>评论列表</div>
                {commentArr.length > 0 ? 
                    commentArr.map((item,index) => {
                        return <Item  key={index} {...item} delComment={this.props.delComment.bind(this)}/>
                    })  :
                    <div className="commentDefault">
                        小伙伴们，快来评论呀！！！
                    </div>
                }
            </div>
        )
    }
}
export default List;