import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { News } from "./News";
import { Todo } from "./todos/Todo";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('todos');
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    });

    return (
        <Router>

            {/* The user interface */}
            <header className="text-gray-400 bg-slate-800 body-font">

                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

                        <span className="ml-3 text-xl"><FontAwesomeIcon style={{color: "#ff5555"}} icon={faDragon} /> Daily</span>

                    </Link>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        <Link to="/home" className="mr-10 hover:text-white cursor-pointer">Home</Link>
                        <Link to="/news" className="mr-10 hover:text-white cursor-pointer">News</Link>
                        <Link to="/about" className="mr-10 hover:text-white cursor-pointer">About</Link>

                    </nav>

                </div>

            </header>


            {/* Managing Routes */}
            <Routes>
                <Route path="/home" element={<Todo todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />} />
                <Route path="/news" element={<News />} />

            </Routes>

        </Router>
    );
};