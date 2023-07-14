import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import { observer } from 'mobx-react';

import './App.css';
import './Okretanje.css';
import './Pulsiranje.css';
import { makeStyles } from '@mui/styles';
import Krunica from './components/Krunica';
import Menu from './components/Menu';
import Navigacija from './components/Navigacija';
import Povratak from './components/Povratak';
import { storeKrunica } from './store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '100vh',
    margin: '0',
    overflowX: 'hidden',
    overflowy: 'hidden',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      border: '1px solid #ece7e7',
      height: '70vh',
    },
  },
  zaglavlje: {
    fontSize: '1rem',
    marginTop: '2rem',
  },
}));

function App() {
  const classes = useStyles();
  const { zrno, prijevodOtajstvatext } = storeKrunica;
  return (
    <Fragment>
      <Grid item xs={12} sm alignItems="center" className={classes.container}>
        <Menu />
        <Krunica />
        <Povratak />
        <Navigacija />
        {zrno !== -1 && zrno !== 0 && (
          <div className={classes.zaglavlje}>
            <span>{prijevodOtajstvatext} †</span>
          </div>
        )}
      </Grid>
    </Fragment>
  );
}

export default observer(App);
