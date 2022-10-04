import React from 'react';
import { Header } from '../Header/Header';
import StatiscticsListItem from './StatiscticsListItem/StatiscticsListItem';
// import "./_statisticsList.scss";

export const ActiveArchive = () => {
  const activeArchive = ["Note Category", 'Active', 'Archive'];
  return (
    <>
      {activeArchive.map((item, i) => (
        <li className={i === 0 ? "max-w-[800px] w-full text-base font-normal text-white" : "max-w-[110px] w-full text-base font-normal text-white"} key={`header__list-item-1-${i}`}>{item}</li>
      ))}
    </>
  )
}
const StatisticsList = () => {

  return (
    <div className='statistics'>
      <Header listItem={<ActiveArchive />} isStatisticsHeader={true} />
      <ul className='statistics__list'>
        <StatiscticsListItem />
      </ul>
    </div>
  );
};

export default StatisticsList;