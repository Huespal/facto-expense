import FieldSelect from '@/components/shared/FieldSelect';
import FieldText from '@/components/shared/FieldText';
import { capitalize } from '@/core/helpers';
import {
  ExpenseFormValues, ExpenseTravelType
} from '@/domain/expense/types';
import { useFormikContext } from 'formik';
import { useState } from 'react';

// The component to render the expense form's travel related inputs.
// - Expense Travel type (or expense sub-type)
// - Hotel name (for 'accommodation' expense type)
// - Check in date (for 'accommodation' expense type)
// - Check out date (for 'accommodation' expense type)
// - Mode (for 'transportation' expense type)
// - Route (for 'transportation' expense type)
const ExpenseFormTravel = () => {
  const {
    values, handleChange, setFieldValue
  } = useFormikContext<ExpenseFormValues>();

  const [travelType, setTravelType] = useState(ExpenseTravelType.other);
  const isAccomodation = travelType === ExpenseTravelType.accommodation;
  const isTransportation = travelType === ExpenseTravelType.transportation;

  return (
    <>
      <FieldSelect
        id="expense-travel-type"
        name="travelType"
        value={travelType}
        legend="Travel type"
        options={Object.values(ExpenseTravelType)}
        mb="l"
        onChange={({ target }) => {
          setFieldValue('accommodation', null);
          setFieldValue('transportation', null);
          setTravelType(target.value as ExpenseTravelType);
        }}
      >
        {travelType => (
          <option key={travelType} value={travelType}>
            {capitalize(travelType)}
          </option>
        )}
      </FieldSelect>
      {isAccomodation && (
        <>
          <FieldText
            id="expense-hotel-name"
            name="accommodation.hotelName"
            value={values.accommodation?.hotelName ?? ''}
            legend="Hotel name"
            onChange={handleChange}
          />
          <FieldText
            id="expense-check-in-date"
            name="accommodation.checkInDate"
            type="date"
            value={values.accommodation?.checkInDate ?? ''}
            legend="Check-in date"
            max={values.accommodation?.checkOutDate}
            onChange={handleChange}
          />
          <FieldText
            id="expense-check-out-date"
            name="accommodation.checkOutDate"
            type="date"
            value={values.accommodation?.checkOutDate ?? ''}
            legend="Check-out date"
            min={values.accommodation?.checkInDate}
            onChange={handleChange}
          />
        </>
      )}
      {isTransportation && (
        <>
          <FieldText
            id="expense-transportation-mode"
            name="transportation.mode"
            value={values.transportation?.mode ?? ''}
            legend="Transportation mode"
            onChange={handleChange}
          />
          <FieldText
            id="expense-transportation-route"
            name="transportation.route"
            value={values.transportation?.route ?? ''}
            legend="Route"
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
}

export default ExpenseFormTravel;