import './App.css';
import Header from './component/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />

        <Route path="/" exact  />
        <Route path="/Discover" exact />

      </Router>
    </div>
  );
}

export default App;
