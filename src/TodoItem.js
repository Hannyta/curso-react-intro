import'./TodoItem.css';
import {BsFillCircleFill} from 'react-icons/bs';
import {RiCloseLine} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';


function TodoItem(props) {
    return (
        <li className='TodoItem'>
          <i className={`Icon icon-check ${props.completed && 'icon-check--active'}`}>
            <BsFillCircleFill/>
          </i> 
          <i className={`Icon icon-check ${props.completed && 'icon-check--active'}`}>
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