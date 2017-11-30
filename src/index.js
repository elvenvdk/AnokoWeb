import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Landing from './containers/landing';
import PartnersNew from './containers/partners_new';
import MemberNew from './containers/member_new';
import Discover from './containers/discover';
import ListPartners from './containers/list_partners';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/partners/new" component={PartnersNew} />
          <Route path="/member/new" component={MemberNew} />
          <Route path="/discover" component={Discover} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
