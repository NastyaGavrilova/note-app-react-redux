import React, { FC } from 'react';
interface ColorProps {
  color?: string,
  // showArchived: MouseEventHandler<SVGSVGElement>
}
const DeleteHeaderIcon: FC<ColorProps> = ({ color }) => {
  return (
    <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="header-delete__icon">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
        <g id="icon-26-trash-can" fill={color}>
          <path
            d="M21,6 L25,6 L25,7 L8,7 L8,6 L12,6 L12,5 C12,3.88772964 12.8942627,3 13.9973917,3 L19.0026083,3 C20.1041422,3 21,3.8954305 21,5 L21,6 L21,6 Z M8,8 L8,26.9986131 C8,28.6562333 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6569187 25,26.9986131 L25,8 L8,8 L8,8 Z M9,9 L9,27.0092049 C9,28.1086907 9.89339733,29 10.9918842,29 L22.0081158,29 C23.1082031,29 24,28.1017876 24,27.0092049 L24,9 L9,9 L9,9 Z M12,11 L12,27 L13,27 L13,11 L12,11 L12,11 Z M16,11 L16,27 L17,27 L17,11 L16,11 L16,11 Z M20,11 L20,27 L21,27 L21,11 L20,11 L20,11 Z M14.0029293,4 C13.4490268,4 13,4.44386482 13,5 L13,6 L20,6 L20,5 C20,4.44771525 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z"
            id="trash-can"></path>
        </g>
      </g>
    </svg>
  );
};

export default DeleteHeaderIcon;