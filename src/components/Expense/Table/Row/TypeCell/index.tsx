import TableCell from '@/components/Table/Cell';
import { capitalize } from '@/core/helpers';
import {
  ExpenseAccommodation, ExpenseTransportation, ExpenseType
} from '@/domain/expense/types';

interface TypeCellProps {
  type: ExpenseType;
  accommodation: ExpenseAccommodation | null;
  transportation: ExpenseTransportation | null;
}

// The component to render expenses type's specific cell for the expenses table.
// It manages expense type specific data, like accommodation and transportation. 
const TypeCell = ({
  type, accommodation, transportation
}: TypeCellProps) => {
  const isAccommodation = accommodation !== null;
  const isTransportation = transportation !== null;
  const accommodationType = isAccommodation ? 'Accommodation' : '';
  const travelType = isTransportation ? 'Transportation' : accommodationType;

  return (
    <TableCell label="Type">
      {`${capitalize(type)} ${travelType ? `- ${travelType}` : ''}`}
      {isAccommodation && (
        <div>{`${accommodation.hotelName}
          (${new Date(accommodation.checkInDate).toDateString()} -
          ${new Date(accommodation.checkOutDate).toDateString()})`}</div>
      )}
      {isTransportation && (
        <div>{`${transportation.mode} (${transportation.route})`}</div>
      )}
    </TableCell>
  );
}

export default TypeCell;