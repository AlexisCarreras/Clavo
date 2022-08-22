import { EventInformation, Headboard, Header, Overview } from '../../components';
import './index.css';

const TicketOperation = () => {
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
