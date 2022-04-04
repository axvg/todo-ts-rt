type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void;
    deleteTodo: (_id: string) => void;
};

const Todo = () => {
    return (
        <div className='Card'>
            <button>Complete</button>
        </div>
    );
};

export default Todo;
