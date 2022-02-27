import dayjs from 'dayjs';
import { isEmpty } from 'lodash';

export const getFilteredData = ( data, dataSetFilter ) => {
  switch( dataSetFilter ) {
    case 'ParkingInfo':
      return data.filter( item => !isEmpty(item.ParkingInfo) );
    case 'TicketInfo':
      return data.filter( item => !isEmpty(item.TicketInfo) );
    case 'ComingSoon':
      return data.filter( item => item.StartTime > dayjs().format() );
    case 'Happening':
      return data.filter( item => item.StartTime < dayjs().format() && item.EndTime > dayjs().format() );
    default:
      return;
  }
}