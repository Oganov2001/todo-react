import ToDo from "./ToDo";

const ToDoList = ({ list, deleteFunc, editFunc }) => {
    return (
        <ul className="todo-list">
            {list.map(el => <ToDo id={el.id} key={el.id} handleDelete={deleteFunc} handleEdit={editFunc}>{el.task}</ToDo>)}
        </ul>
    );
};

export default ToDoList;