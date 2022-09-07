import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';

import './index.css';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    flexGrow: 1, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
  },
  linkBack: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: 'white'  
    }
  }, 
  link: {
    textDecoration: 'none',
  }, 
  iconArrow: {
    color: '#FFFF'
  }, 
  backButton: {
    marginLeft: theme.spacing(8),
  },
  textBack: {
    flexGrow: 1,
    fontSize: '15px',
    lineHeight: '21px',
    color: '#FAFAFA',
    marginLeft: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(8),
    background: '#3D00E6',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    padding: '13px 20px 13px 20px',
    '&:hover': {
      background: '#2E01AC',
    }
  },  
  textButton: {
    fontSize: '12px',
    lineHeight: '14px',
    color: '#FFFFFF',
  },
}));  

const Header = () => {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          
          <Link to="/" className={classes.linkBack}>
            <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="menu">
              <KeyboardBackspaceIcon className={classes.iconArrow} />
              <Typography variant="h6" className={classes.textBack}>
                Volver
              </Typography>
            </IconButton>
          </Link>

          <Link to="/comocomprar" className={classes.link}>
          <Button className={classes.button} variant="contained" color="primary">
            <Typography variant="h6" className={classes.textButton}>
                Cómo Comprar
            </Typography>
          </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
