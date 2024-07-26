const ToDoCreate = (props) => {

    return (
        <form className="create-todo" onSubmit={e => props.createFunc(e, props.input)}>
            <input type="text" placeholder="What are you going to do today?" value={props.input} onChange={e => props.inputFunc(e)}></input>
            <button>+</button>
        </form>
    );
};

export default ToDoCreate;