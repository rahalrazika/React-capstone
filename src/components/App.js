import '../style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import ProductsList from './ProductsList';
import DetailPage from './DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <NavBar />
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/id" exact component={DetailPage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
