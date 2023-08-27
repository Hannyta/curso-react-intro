import'./TodoItem.css';
import {RiCheckboxBlankCircleFill} from 'react-icons/ri';
import {RiCloseLine} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
          <i className={`Icon icon-UnCheck ${props.completed && 'icon-uncheck--active'}`}>
            <RiCheckboxBlankCircleFill/>
          </i> 
          <i className={`Icon icon-Check ${props.completed && 'icon-Check--active'}`}>
            <FaCheck/>
          </i> 
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}
          </p>
          <i className='Icon icon-close'>
            <RiCloseLine/>
          </i>
        </li>
    );
  }

  export { TodoItem };