const ToDo = (props) => {
    return (
        <li className="todo">
            <input type="checkbox"></input>
            <p>{props.children}</p>
            <button onClick={e => props.handleDelete(props.id)}>X</button>
        </li>
    );
};

export default ToDo;