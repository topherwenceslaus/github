import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {store} from './redux/store'
import {Provider} from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import IssueDetails from './containers/IssueDetails'

const routes = (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/issues/:issueid' component={IssueDetails}/>
    </Switch>
       
    </BrowserRouter>
)


ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document.getElementById('root'));


window.store = store