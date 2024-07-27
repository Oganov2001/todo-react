import { useState } from "react";

const ToDo = (props) => {
    const [ editMode, setEditMode ] = useState(false);
    const [ input, setInput ] = useState(props.children);

    const onEditClick = (e) => {
        setEditMode(!editMode)
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const edit = () => {
        setEditMode(false);
        props.handleEdit(props.id, input);
    };

    return (
        <li className="todo">
            <input type="checkbox" name="task-check"></input>
            {   
                editMode 
                ? 
                <input type="text" name="todo-edit" onBlur={edit} defaultValue={input} onChange={e => handleChange(e)}></input> 
                : 
                <p>{input}</p>
            }
            <div className="buttons-area">
                <button className="edit-button" onClick={e => onEditClick(e)}>Edit</button>
                <button className="delete-button" onClick={e => props.handleDelete(props.id)}>X</button>
            </div>
        </li>
    );
};

export default ToDo;