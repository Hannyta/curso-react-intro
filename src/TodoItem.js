import'./TodoItem.css';
import {BsCircle} from 'react-icons/bs';
import {RiCloseLine} from 'react-icons/ri';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
          <i className={`Icon icon-check ${props.completed && 'icon-check--active'}`}>
            <BsCircle/>
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