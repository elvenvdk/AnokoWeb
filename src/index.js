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
import DiscoverPartners from './containers/discover_partners';
import ListPartners from './containers/list_partners';
import Shows from './containers/shows';
import Tastings from './containers/tastings';
import Restaurants from './containers/restaurants';
import Venues from './containers/venues';
import Workshop from './containers/workshop';
import Brands from './containers/creative_brands';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="router-container">
        <Switch>
          <Route path="/partners/new" component={PartnersNew} />
          <Route path="/member/new" component={MemberNew} />
          <Route path="/discover" component={DiscoverPartners} />
          <Route path="/shows" component={Shows} />
          <Route path="/tastings" component={Tastings} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/venues" component={Venues} />
          <Route path="/workshops" component={Workshop} />
          <Route path="/creative-brands" component={Brands} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app-container'));
