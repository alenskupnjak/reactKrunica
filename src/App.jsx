import Grid from '@mui/material/Grid';
import { Fragment } from 'react';
import './App.css';
import { makeStyles } from '@mui/styles';

import Krunica from './components/Krunica';
import Menu from './components/Menu';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
    // margin: 'auto',
    // color: 'white',
    // paddingTop: theme.spacing(10),
    // backgroundColor: theme.palette.primary.main,
    // position: 'sticky',
    // top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Menu></Menu>
      <Grid item xs={12} md={6} className={classes.container}>
        <Krunica></Krunica>
      </Grid>
    </Fragment>
  );
}

export default App;
