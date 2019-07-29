import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';

function App() {
  return (
    <div className="App"> 
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id" exact  component={StreamShow} />
            <Route path="/streams/delete/:id"  exact component={StreamDelete} />
            <Route path="/streams/edit/:id"  exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
