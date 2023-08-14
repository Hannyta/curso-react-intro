import'./CreateTodoButton.css';
import {BsFillFileEarmarkPlusFill} from 'react-icons/bs';


function CreateTodoButton() {
    return (
        <div className='CreateTodo'>
            <h3>Create new To-Do</h3>
            <button className='CreateTodo-button'><BsFillFileEarmarkPlusFill size='32px' color='#44cac6'/></button>
        </div>
    )
}

export { CreateTodoButton };