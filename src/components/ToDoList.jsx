import ToDo from "./ToDo";

const ToDoList = ({ list }) => {
    return (
        <ul className="todo-list">
            {list.map(el => <ToDo>{el.task}</ToDo>)}
        </ul>
    );
};

export default ToDoList;