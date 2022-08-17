import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import './index.css';

const useStyles = makeStyles ({
  icons: {
    marginTop: '3rem',
    width: '20%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'end',
    height: '30vh'
  }
});  

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={ classes.icons }>
      <button className="buttonIcon">
        <FacebookIcon className="icon" style={{ fontSize: 40 }} />
      </button>
      <button className="buttonIcon">
        <InstagramIcon className="icon" style={{ fontSize: 40 }} />
      </button>
      <button className="buttonIcon">
        <TwitterIcon className="icon" style={{ fontSize: 40 }} />
      </button>
      <button className="buttonIcon">
        <YouTubeIcon className="icon" style={{ fontSize: 40 }} />
      </button> 
    </div>
  )
}

export default Icons;
