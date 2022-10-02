import React, { FC } from 'react';
// import "./_header.scss";

interface Props {
  listItem?: JSX.Element | JSX.Element[] | string,
  btns?: JSX.Element | JSX.Element[],
  isStatisticsHeader: boolean

}

const Header: FC<Props> = ({ listItem, btns, isStatisticsHeader }) => {
  const headerWidth = {
    maxWidth: '900px',
    width: "100%"
  };
  const statisticsHeaderWidth = {
    width: "100%"
  }
  return (
    <header className='header'>
      <ul className='header__list' style={(isStatisticsHeader === false ? headerWidth : statisticsHeaderWidth)}>{listItem}</ul>
      {isStatisticsHeader === false ? <ul className='header__list-icons'>{btns}</ul> : null}
    </header>
  );
};

export default Header;