import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Customer from './pages/customer/Customer.jsx';
import Owner from './pages/owner/Owner.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Customer} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/owner" component={Owner} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
