import ImagesLogo from './components/ImagesLogo';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '../Card/index';
import Icons from '../Icons';

import './index.css';


const useStyles = makeStyles ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '3rem 0 0 0'
  },
  text: {
    fontFamily: 'Another America',
    fontStyle: 'normal',
    fontSize: '50px',
    color: '#FAFAFA',
    marginBottom: '3rem',
  },
  paper: {
    width: '40%',
    height: '6vh',
    marginTop: '1.5rem',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease-out',
    }
  },
  icons: {
    marginTop: '3rem',
  }
}); 
 
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <ImagesLogo />
      <Typography className={ classes.text } variant="h1" component="h2">
        C.L.A.V.O
      </Typography>

      <Card />

      <button className="buttonTicket">
        <span className="text">Conseguí tus anticipadas</span>
      </button>

      <Icons />
    </div>
  );   
}


 