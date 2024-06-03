import {FC} from 'react';
import Select from 'react-select';

interface InSelecTime{
	onChange: (value: string) => void;
}


export const TimeSelector: FC<InSelecTime> = ({ onChange }) => {
  const options = [];
  for (let hour = 8; hour <= 21; hour++) {
    options.push({ value: `${hour}:00`, label: `${hour}:00` });
  }

	


  return (
    <Select options={options} onChange={onChange} />
  );
};
