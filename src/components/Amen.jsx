import { Fragment } from 'react';
import { Typography } from '@mui/material';

import { storeKrunica } from '../store/KrunicaStore';

function Amen() {
  const { aktivnaZemlja } = storeKrunica;
  return (
    <Fragment>
      <Typography variant="bod1">{aktivnaZemlja.amen}</Typography>
    </Fragment>
  );
}

export default Amen;
