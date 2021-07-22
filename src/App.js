import './App.css';
import Header from './component/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorRoute from './component/ErrorRoute';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
          <Route path="/" exact  />
          <Route path="/Discover" exact />
          <Route path="/" component={ErrorRoute} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
