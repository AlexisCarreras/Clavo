import { makeStyles } from '@material-ui/core';
import { EventInformation, Overview } from '../../components';
import Modal from '../../components/Confirm/Modal';

const useStyles = makeStyles ((theme) => ({
  root: {
    backgroundColor: '#F6F6F6',
    minHeight: '90.2vh',
  },
  containerAcordion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5vh',
    paddingBottom: '5vh'
  }, 
  acordion: {
    backgroundColor: '#333',
    width: '70%', 
  },
  title: {
    color: '#333',
    paddingBottom: '5vh',
    fontSize: '23px',
  },
  heading: {
    color: '#FAFAFA',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular, 
  },
  icon: {
    color: 'white',
  },
  text: {
    color: '#FAFAFA'
  },
}) 
); 
 
const Confirm = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='containerCards'>
        <Overview /> 
        <EventInformation />
      </div>
      <Modal /> 
    </div> 
  )
}   

export default Confirm; 