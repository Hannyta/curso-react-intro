import React from 'react';
import'./TodoSearch.css';
import {BiSearchAlt} from 'react-icons/bi';

function TodoSearch() {
    conts [searchValue, setSearchValue] = React.useState('');

    return (

        <div className='Search'>
            <input 
                className='Search-bar'
                placeholder="Cortar cebolla..."
                value={searchValue}
                onChange={
                    (event) => {
                        setSearchValue(event.target.value);
                    }
                }
            />
            <button 
                className='Search-icon'
                onClick={
                    (event) => {
                        console.log('Diste click a Search');
                        console.log(event.target);
                    }
                }
                ><BiSearchAlt/>
            </button>
        </div>
    );
}

export { TodoSearch };