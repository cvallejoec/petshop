import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Customer from './pages/customer/Customer.jsx';
import Owner from './pages/owner/Owner.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route exact path="/" component={Customer} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/owner" component={Owner} />
      </HashRouter>
    </div>
  );
}

export default App;
