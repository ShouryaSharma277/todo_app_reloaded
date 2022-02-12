import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import "./todoStorage.css";

export const TodoStorage = ({ setTodos, todos, text, todo }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(
            todos.map((element) => {
                if (element.id === todo.id) {
                    return {
                        ...element, completed: !element.completed
                    };
                }
                else {
                    return element;
                }
            })
        );
    };

    return (
        <div className={`dynamicCss ${todo.completed ? "dynamicCssCompleted" : ""}`}>
            <div className='flex mb-5 flex-col items-center dark:bg-neutral-800 dark:text-white shadow-md md:flex-row md:max-w-xl'>
                <div className='flex flex-col md:flex-row justify-between p-4 lg:w-96 md:w-80 '>
                    <li className='mb-2 mr-40 text-lg'>{text}</li>
                    <div className='flex space-x-4 text-lg'>
                        <button className='my-2' style={{ color: "#2ba13d" }} onClick={completeHandler}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </button>
                        <button className='my-2' style={{ color: "#a32c2c" }} onClick={deleteHandler}>
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
