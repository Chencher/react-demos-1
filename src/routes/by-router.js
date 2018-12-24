/**
 * 基于react-routerd的路由
 */

import React from 'react';
import { Router, Route, BrowserRouter,Switch } from 'react-router-dom';
import MainIndex from '../page/main/index';
import FollawIndex from '../page/follaw/index';
import FollawComment from '../page/follaw/comment';
import NotFound from '../page/none/not-found';
import HelloTime from '../page/follaw/hello';
import FollawTodos from '../page/follaw/todos';
import FollawSearch from '../page/follaw/search';
import FollawClick from '../page/follaw/click';

export default class ByRouter extends React.Component{

    render(){
        return <BrowserRouter>
                    <MainIndex>
                            <Switch>
                            <Route path="/follaw" exact={true} component={FollawIndex}></Route>
                            <Route path="/follaw/time" exact={true} component={HelloTime}></Route>
                            <Route path="/follaw/comment" exact={true} component={FollawComment}></Route>
                           <Route path="/follaw/todos" exact={true} component={FollawTodos}></Route>
                                <Route path="/follaw/search" exact={true} component={FollawSearch}></Route>
                    <Route path="/follaw/click" exact={true} component={FollawClick}></Route>

                            </Switch>
                    </MainIndex>
            </BrowserRouter>
    }

}