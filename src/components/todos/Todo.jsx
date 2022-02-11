import { TodoForm } from "./TodoForm";

export const Todo = ({ todos, setTodos, setInputText, inputText }) => {
  return (
        <div className="align-middle justify-center flex">
            <TodoForm todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
        </div>
    );
};
