import React, { FC } from 'react';
import { JsxElement } from 'typescript';
import "./_header.scss";

interface Props {
  listItem?: JSX.Element | JSX.Element[],
  btns?: JSX.Element | JSX.Element[]
}

const Header: FC<Props> = ({ listItem, btns }) => {
  return (
    <header className='header'>
      <ul className='header__list'>{listItem}</ul>
      <ul className='header__list-icons'>{btns}</ul>
    </header>
  );
};

export default Header;