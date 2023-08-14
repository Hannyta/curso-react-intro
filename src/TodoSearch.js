import'./TodoSearch.css';
import {BiSearchAlt} from 'react-icons/bi';

function TodoSearch() {
    return (
        <div className='Search'>
            <input className='Search-bar'placeholder="Cortar cebolla..."/>
            <button className='Search-icon'><BiSearchAlt size='25px' color='#44cac6'/></button>
        </div>
    );
}

export { TodoSearch };