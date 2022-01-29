import Grid from '@mui/material/Grid';
import { observer } from 'mobx-react';
import { Fragment } from 'react';
import './App.css';
import './Okretanje.css';
import './Pulsiranje.css';
import { makeStyles } from '@mui/styles';
import Krunica from './components/Krunica';
import Menu from './components/Menu';
import Navigacija from './components/Navigacija';
import Povratak from './components/Povratak';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100vh',
    margin: 'auto',
    overflowX: 'hidden',
    overflowy: 'hidden',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      border: '1px solid #ece7e7',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12} sm alignItems="center" className={classes.container}>
        <Menu />
        <Krunica />
        <Povratak />
        <Navigacija />
      </Grid>
    </Fragment>
  );
}

export default observer(App);
