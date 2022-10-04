import React, { FC } from 'react';

export interface Props {
  listItem?: JSX.Element | JSX.Element[] | string,
  btns?: JSX.Element | JSX.Element[],
  isStatisticsHeader: boolean

}

export const Header: FC<Props> = ({ listItem, btns, isStatisticsHeader }) => {
  const headerWidth = {
    maxWidth: '900px',
    width: "100%"
  };
  const statisticsHeaderWidth = {
    width: "100%"
  }
  return (
    <header className='bg-grey p-5 flex justify-between rounded mb-5'>
      <ul className='flex justify-between items-center' style={(isStatisticsHeader === false ? headerWidth : statisticsHeaderWidth)}>{listItem}</ul>
      {isStatisticsHeader === false ? <ul className='max-w-[100px] w-full flex justify-between items-center'>{btns}</ul> : null}
    </header>
  );
};
