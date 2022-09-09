import { makeStyles } from '@material-ui/core';
import { EventInformation, Headboard, Header, Overview } from '../../components';
import Modal from '../../components/Confirm/Modal';

const useStyles = makeStyles ((theme) => ({
  root: {
    backgroundColor: '#F6F6F6',
    width: '100vw',
  },
}) 
); 
 
const Confirm = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Headboard />
      <div className='containerCards'>
        <Overview /> 
        <EventInformation />
      </div>
      <Modal /> 
    </div> 
  )
}   

export default Confirm; 