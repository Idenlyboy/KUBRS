import { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import { format } from 'date-fns';

interface InSelecData {
  onChange: (value: number) => void;
}

interface InOption {
  value: string;
  label: string;
}

export const DataSelector: FC<InSelecData> = ({ onChange }) => {
  const [time_range, setTimeRange] = useState<string>();
  const [currentOption, setCurrentOption] = useState<InOption[]>([]);

  useEffect(() => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);
    setTimeRange(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay()));
    const options: InOption[] = [];

    // Добавляем сегодняшнюю дату
    options.push({
      value: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`,
      label: `${format(today, 'EEEE')} ${today.getDate()} ${today.getFullYear()}`,
    });

    while (nextDay <= endOfWeek) {
      options.push({
        value: `${nextDay.getDate()}-${nextDay.getMonth() + 1}-${nextDay.getFullYear()}`,
        label: `${format(nextDay, 'EEEE')} ${nextDay.getDate()} ${nextDay.getFullYear()}`,
      });
      nextDay.setDate(nextDay.getDate() + 1);
    }

    setCurrentOption(options);
  }, []);

  return (
    <Select options={currentOption} onChange={onChange}/>
  );
};