import { TodoList } from './TodoList';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

export const TodoForm = ({ todos, setTodos, setInputText, inputText }) => {

    const uniqueId = uuid();
    const mainId = uniqueId.slice(0, 8);

    // Input event listener function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: mainId,
                }
            ]);
        }
        setInputText('');
    };

    return (
        <div className='flex-col'>
            <form className="my-5">
                <div className="flex items-center border-b border-cyan-500 py-2 ">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-800 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add todo" id="input" value={inputText} onChange={inputTextHandler} />
                    <button className="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={submitTodoHandler}>
                        <FontAwesomeIcon icon={faMeteor} />
                    </button>
                </div>
            </form>

            <div className='my-6 flex'>
                <TodoList setTodos={setTodos} todos={todos} />
            </div>
        </div>
    );
};
