import { makeStyles } from '@material-ui/core';
import { EventInformation, Headboard, Header, Overview } from '../../components';
import Modal from '../../components/Confirm/Modal';

const useStyles = makeStyles ({
    root: {
      width: '100vw',
    },
});

const DataEntry = () => {
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

export default DataEntry;
