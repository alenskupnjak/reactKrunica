import { Fragment } from 'react';
import './App.css';



import Kostur from './components/kostur';
import Menu from './components/menu';





function App() {

  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);
  console.log('process.env.PUBLIC_URL', process.env);
  

  return (
  <Fragment>
    <Menu></Menu>

    <Kostur></Kostur>
  </Fragment>
      
  );
}

export default App;
