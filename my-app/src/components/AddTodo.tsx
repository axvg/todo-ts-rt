type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void;
    deleteTodo: (_id: string) => void;
};

const Todo = () => {
    return (
        <div className='Card'>
            <h1>Todo Name</h1>
        </div>
    );
};

export default Todo;
