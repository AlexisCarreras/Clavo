import { EventInformation, Headboard, Header, Overview } from '../../components';
import './index.css';

const TicketOperation = () => {

  localStorage.setItem('pageIndex', 'true');

  return (
    <>
      <Header />
      <Headboard />
      <div className='containerCards'>
        <Overview />
        <EventInformation />
      </div>
    </>
  )
}

export default TicketOperation;
