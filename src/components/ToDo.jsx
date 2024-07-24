const ToDo = (props) => {
    return (
        <li className="todo">
            <input type="checkbox"></input>
            <p>{props.children}</p>
            <button>X</button>
        </li>
    );
};

export default ToDo;