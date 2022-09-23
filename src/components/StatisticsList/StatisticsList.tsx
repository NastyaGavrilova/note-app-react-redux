import React from 'react';
import Header from '../Header/Header';
import StatiscticsListItem from './StatiscticsListItem/StatiscticsListItem';
import "./_statisticsList.scss";

const ActiveArchive = () => {
  const activeArchive = ["Note Category", 'Active', 'Archive'];
  return (
    <>
      {activeArchive.map((item, i) => (
        <li className={`header__list-item header__list-item-${i}`} key={`header__list-item-1-${i}`}>{item}</li>
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