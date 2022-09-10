import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EventInformation, Headboard, Header, Overview } from '../../components';

const useStyles = makeStyles ({
  root: {
    width: '100%',
    backgroundColor: '#F6F6F6',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    margin: '6vh 0 6vh 0',
  },
});   
   
const TicketOperation = () => {
  const classes = useStyles();

  localStorage.setItem('pageIndex', 'true');
 
  return (
    <>
      <Header />
      <Headboard />
      <Grid container className={classes.root}>
          <Grid className={classes.item} item xs={12} md={6}>   
            <Overview /> 
          </Grid>
          <Grid className={classes.item} item xs={12} md={6}>
            <EventInformation />
          </Grid>
      </Grid>
    </>
  )
} 

export default TicketOperation;
