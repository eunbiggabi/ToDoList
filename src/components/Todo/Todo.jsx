import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
    const  {text, status } = todo;
    const handleChange = (e) => {
        onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'})
    }
    const handleDelete = () => onDelete(todo);
    return (
        <li>
            <input type="checkbox" id='checkbox' checked={status === 'completed'} onChange={handleChange}/>
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}><FaTrashAlt /></button>
        </li>
    );
}