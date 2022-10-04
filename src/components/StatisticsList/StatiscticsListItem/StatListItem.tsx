import React, { FC } from 'react';

export interface Props {
  categoryName: string[],
  counterArchived: number,
  counterActive: number,
  key: number
}
export const StatListItem: FC<Props> = ({ categoryName, counterArchived, counterActive, key }) => {
  return (
    <li className='bg-item mb-4 p-4 rounded flex justify-between items-center' key={key}>
      <p className='max-w-[800px] w-full truncate text-base font-semibold' >{categoryName}</p>
      <p className='max-w-[80px] w-full text-base font-normal'>{counterActive}</p>
      <p className='max-w-[80px] w-full text-base font-normal'>{counterArchived}</p>
    </li>
  );
};

