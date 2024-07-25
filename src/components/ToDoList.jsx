import ToDo from "./ToDo";

const ToDoList = ({ list, deleteFunc }) => {
    return (
        <ul className="todo-list">
            {list.map(el => <ToDo id={el.id} key={el.id} handleDelete={deleteFunc}>{el.task}</ToDo>)}
        </ul>
    );
};

export default ToDoList;