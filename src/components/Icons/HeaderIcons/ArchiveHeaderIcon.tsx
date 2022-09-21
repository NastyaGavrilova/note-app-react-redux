import React, { FC, MouseEventHandler } from 'react';
import { AppDispatch } from '../../../store/store';
import * as actions from '../../../store/actions/actions';
import { connect } from 'react-redux';

interface ColorProps {
  color?: string,
  showArchived: MouseEventHandler<SVGSVGElement>
}
const ArchiveHeaderIcon: FC<ColorProps> = ({ color, showArchived }) => {
  return (
    <svg width="28px" height="32px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" className="header-archive__icon" onClick={showArchived}>
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Rounded" transform="translate(-783.000000, -1485.000000)">
          <g id="Content" transform="translate(100.000000, 1428.000000)">
            <g id="-Round-/-Content-/-archive" transform="translate(680.000000, 54.000000)">
              <g transform="translate(0.000000, 0.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M20.54,5.23 L19.15,3.55 C18.88,3.21 18.47,3 18,3 L6,3 C5.53,3 5.12,3.21 4.84,3.55 L3.46,5.23 C3.17,5.57 3,6.02 3,6.5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.5 C21,6.02 20.83,5.57 20.54,5.23 Z M11.65,17.15 L6.5,12 L10,12 L10,10 L14,10 L14,12 L17.5,12 L12.35,17.15 C12.16,17.34 11.84,17.34 11.65,17.15 Z M5.12,5 L5.93,4 L17.93,4 L18.87,5 L5.12,5 Z"
                  id="🔹Icon-Color" fill={color}></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg >
  );
};
// export const DeleteIcon: FC<ColorProps> = ({ color }) => {
//   return (
//     <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       className="header-delete__icon">
//       <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
//         <g id="icon-26-trash-can" fill={color}>
//           <path
//             d="M21,6 L25,6 L25,7 L8,7 L8,6 L12,6 L12,5 C12,3.88772964 12.8942627,3 13.9973917,3 L19.0026083,3 C20.1041422,3 21,3.8954305 21,5 L21,6 L21,6 Z M8,8 L8,26.9986131 C8,28.6562333 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6569187 25,26.9986131 L25,8 L8,8 L8,8 Z M9,9 L9,27.0092049 C9,28.1086907 9.89339733,29 10.9918842,29 L22.0081158,29 C23.1082031,29 24,28.1017876 24,27.0092049 L24,9 L9,9 L9,9 Z M12,11 L12,27 L13,27 L13,11 L12,11 L12,11 Z M16,11 L16,27 L17,27 L17,11 L16,11 L16,11 Z M20,11 L20,27 L21,27 L21,11 L20,11 L20,11 Z M14.0029293,4 C13.4490268,4 13,4.44386482 13,5 L13,6 L20,6 L20,5 C20,4.44771525 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z"
//             id="trash-can"></path>
//         </g>
//       </g>
//     </svg>
//   )
// }
// export const EditIcon: FC<ColorProps> = ({ color }) => {
//   return (
//     <svg width="28px" height="32px" viewBox="0 0 18 18" version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink">

//       <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//         <g id="Rounded" transform="translate(-579.000000, -2771.000000)">
//           <g id="Image" transform="translate(100.000000, 2626.000000)">
//             <g id="-Round-/-Image-/-edit" transform="translate(476.000000, 142.000000)">
//               <g transform="translate(0.000000, 0.000000)">
//                 <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
//                 <path d="M3,17.46 L3,20.5 C3,20.78 3.22,21 3.5,21 L6.54,21 C6.67,21 6.8,20.95 6.89,20.85 L17.81,9.94 L14.06,6.19 L3.15,17.1 C3.05,17.2 3,17.32 3,17.46 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.13,5.12 L18.88,8.87 L20.71,7.04 Z" id="🔹-Icon-Color" fill={color}></path>
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </svg>
//   )
// }
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    showArchived: () => dispatch(actions.toggleShowArchived()),
  }
}

export default connect(null, mapDispatchToProps)(ArchiveHeaderIcon);



