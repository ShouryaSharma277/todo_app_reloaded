import { TodoStorage } from "./TodoStorage";

export const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <TodoStorage
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        text={todo.text}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
};
