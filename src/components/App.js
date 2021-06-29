import '../style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import ProductsList from './ProductsList';
import DetailPage from './DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:productId" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
