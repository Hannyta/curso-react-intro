import'./TodoItem.css';
import {FiCircle} from 'react-icons/fi';
import {RiCloseLine} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';
import {FaCircle} from 'react-icons/fa';

function TodoItem(props) {
  return (
      <li className='TodoItem'>
          <i className={`icon iconUnCheck ${props.completed && 'iconUnCheck--hidden'}`} onClick={props.onComplete}>
          <FiCircle/>
          </i> 
          <i className={`icon ${props.completed && 'iconBotoom iconCheck--hidden'}`}>
            <FaCircle/>
          </i> 
          <i className={`icon ${props.completed && 'iconBefore iconCheck--hidden'}`}>
            <FaCheck/>
          </i>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}
          </p>
          <i className='icon iconClose'>
            <RiCloseLine/>
          </i>
      </li>
    );
  }
  
  export { TodoItem };