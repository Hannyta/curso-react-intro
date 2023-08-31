import'./CreateTodoButton.css';
import {BsFillFileEarmarkPlusFill} from 'react-icons/bs';


function CreateTodoButton() {
    return (
        <div className='CreateTodo'>
            <h3>Create new To-Do</h3>
            <button 
                className='Icon CreateTodoButton' 
                onClick={
                    (event) => {
                        console.log('le diste click');
                        console.log(event);
                        console.log(event.target);
                    }
                }
                ><BsFillFileEarmarkPlusFill/>
            </button>
        </div>
    )
}

export { CreateTodoButton };