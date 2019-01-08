/**
 * 基于react-routerd的路由
 */

import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import MainIndex from '../page/main/index';
import FollawIndex from '../page/follaw/index';
import FollawComment from '../page/follaw/comment';
import ChenChenComment from '../page/chenchen/comment';
import ChenChenIndex from '../page/chenchen/index';
import ChenChenTodos from '../page/chenchen/todos';
import NotFound from '../page/none/not-found';
import HelloTime from '../page/follaw/hello';

import FollawTodos from '../page/follaw/todos';
import FollawSearch from '../page/follaw/search';
import FollawClick from '../page/follaw/click';
import YmkIndex from '../page/ymk/index';
import QiaoIndex from '../page/qiao/index';
import QiaoComment from '../page/qiao/comment/comment';
import ToDoList from '../page/qiao/todolist/todolist';
import FollawChangeColor from '../page/follaw/change-color';

export default class ByRouter extends React.Component{

    render(){
        return <BrowserRouter>
                    <MainIndex>
                            <Switch>
                            <Route path="/follaw" exact={true} component={FollawIndex}></Route>
                            <Route path="/follaw/time" exact={true} component={HelloTime}></Route>
                            <Route path="/follaw/comment" exact={true} component={FollawComment}></Route>
                                <Route path="/follaw/changecolor" exact={true} component={FollawChangeColor}></Route>
                            <Route path="/chenchen" exact={true} component={ChenChenIndex}></Route>
                            <Route path="/chenchen/comment" exact={true} component={ChenChenComment}></Route>
                            <Route path="/chenchen/todos" exact={true} component={ChenChenTodos}></Route>
                            {/* <Route path="/ymk/time" exact={true} component={HelloTime}></Route>
                            <Route path="/ymk/comment" exact={true} component={FollawComment}></Route> */}
                            <Route path="/follaw/todos" exact={true} component={FollawTodos}></Route>
                            <Route path="/follaw/search" exact={true} component={FollawSearch}></Route>
                            <Route path="/follaw/click" exact={true} component={FollawClick}></Route>

                            <Route path="/ymk" exact={true} component={YmkIndex}></Route>

                            <Route path="/qiao" exact={true} component={QiaoIndex}></Route>
                            <Route path="/qiao/comment" exact={true} component={QiaoComment}></Route>
                            <Route path="/qiao/todolist" exact={true} component={ToDoList}></Route>
                            </Switch>
                    </MainIndex>
            </BrowserRouter>
    }
}