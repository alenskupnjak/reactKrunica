import Grid from '@mui/material/Grid';
import { observer } from 'mobx-react';
import { Fragment } from 'react';
import './App.css';
import './Okretanje.css';
import './Pulsiranje.css';
import { makeStyles } from '@mui/styles';

import { storeKrunica } from './store/KrunicaStore';

import Krunica from './components/Krunica';
import Menu from './components/Menu';
import DireknoNaZrno from './components/DireknoNaZrno';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
    margin: 'auto',
    // color: 'white',
    paddingTop: theme.spacing(0),
    // backgroundColor: theme.palette.primary.main,
    // position: 'sticky',
    // top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'orange',
      color: '#555',
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
        {process.env.NODE_ENV === 'development' && <DireknoNaZrno />}
      </Grid>
    </Fragment>
  );
}

export default observer(App);
