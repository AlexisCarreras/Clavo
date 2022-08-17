import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../../../assets/Images/Logo/logo.png';

const useStyles = makeStyles ({
  img: {
    width: '110px',
    borderRadius:'100px',
  },
});

const ImagesLogo = () => {
  const classes = useStyles();

  return (
    <img className={ classes.img } src={ Logo } alt="Logo Clavo" />
  )
}

export default ImagesLogo;
