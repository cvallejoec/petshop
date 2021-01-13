import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Customer from './pages/customer/Customer.jsx';
import Owner from './pages/owner/Owner.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Customer} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/owner" component={Owner} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
