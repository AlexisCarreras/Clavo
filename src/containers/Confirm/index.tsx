import { makeStyles } from '@material-ui/core';
import Modal from '../../components/Confirm/Modal';
import TicketOperation from '../TicketOperation';

const useStyles = makeStyles ({
  root: {
    backgroundColor: '#F6F6F6',
    width: '100vw',
  },
});
 
const Confirm = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TicketOperation />
      <Modal /> 
    </div> 
  )
}   

export default Confirm; 