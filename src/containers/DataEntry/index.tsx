import { makeStyles } from '@material-ui/core';
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
      <Modal /> 
    </div> 
  )
}
 
export default DataEntry;
