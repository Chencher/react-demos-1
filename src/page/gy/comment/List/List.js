import React,{Component} from 'react';
import Item from '../Item/Item';
import './List.css';

class List extends Component{
    render(){
        let comments = ['a','b'];
        return (
            <div className='commentWrap'>
                <div className='listTitle'>评论列表</div>
                {/* {
                    comments.map((item,index) => {
                        return <Item  key={index} item={item}/>
                    })
                } */}
                <div className="commentDefault">
                    小伙伴们，快来评论呀！！！
                </div>
            </div>
        )
    }
}
export default List;