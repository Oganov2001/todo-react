const ToDoCreate = () => {
    return (
        <form className="create-todo" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="What are you going to do today?"></input>
            <button>+</button>
        </form>
    );
};

export default ToDoCreate;