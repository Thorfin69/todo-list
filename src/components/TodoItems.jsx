import React from 'react';

const TodoItem = ({ todo, onToggleCompleted, onDelete }) => {
    return (
        <li
            className={`flex items-center justify-between py-2 px-4 rounded-md ${todo.completed ? 'bg-gray-200' : 'bg-white'
                }`}
        >
            <span className={`text-sm font-medium ${todo.completed && 'line-through'}`}>
                {todo.text}
            </span>
            <div className="flex space-x-2">
                <button
                    className={`text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={() => onToggleCompleted(todo)}
                >
                    {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                    className={`text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                    onClick={() => onDelete(todo)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
