import { makeStyles, Typography } from '@material-ui/core';
import Logo from '../../../assets/Images/Logo/logo.png';

import './index.css';

const useStyles = makeStyles ({
  text: {
    fontFamily: 'Another America',
    fontStyle: 'normal',
    fontSize: '70px',
    color: '#FAFAFA',
  },
}); 

const Headboard = () => {
  const classes = useStyles();

  return (
    <div className='background'>
      <div className='container'> 
        <img src={ Logo } className='logo' alt="Logo de Clavo" />
        <Typography className={classes.text} variant="h1" component="h2">
          C.L.A.V.O
        </Typography>
      </div>
    </div>
  )
}

export default Headboard;
 