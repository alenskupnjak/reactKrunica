import React from 'react';
import { observer } from 'mobx-react';
import { makeStyles } from '@mui/styles';
import { storeKrunica } from '../store/KrunicaStore';

const useStyles = makeStyles((theme) => ({
  opisMolitve: {
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#093145',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#e9e9e9',
      border: '1px solid #ece7e7',
      width: '50%',
      margin: 'auto',
      fontSize: '2rem',
    },
  },
}));

function ZrnoText() {
  const classes = useStyles();
  const { aktivnaZemlja, zrno } = storeKrunica;

  return (
    <React.Fragment>
      <div className={classes.opisMolitve}>
        {zrno !== -1 && (
          <div>
            {process.env.NODE_ENV === 'development'
              ? aktivnaZemlja[`naslov${zrno}`] + ' - ' + zrno
              : aktivnaZemlja[`naslov${zrno}`]}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default observer(ZrnoText);
