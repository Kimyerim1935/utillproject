import { BrowserRouter, Switch } from 'react-router-dom';
import Container from './Utill/Index';

import './App.css';
import './assets/styles/Accordion.css';
import './assets/styles/DataGrid.css';
import './assets/styles/Modal.css';
import './assets/styles/Search.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Container/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
