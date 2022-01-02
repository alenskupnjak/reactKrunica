import { Fragment } from 'react';
import './App.css';

import Krunica from './components/Krunica';
import Menu from './components/Menu';

function App() {
  return (
    <Fragment>
      <Menu></Menu>
      <Krunica></Krunica>
    </Fragment>
  );
}

export default App;
