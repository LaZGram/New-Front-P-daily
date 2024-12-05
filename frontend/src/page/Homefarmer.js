import React, { useState } from 'react';
import './Homefarmer.css';
import Gridbox from './page-com/Gridbox';
import Graphfarmer from "./page-com/graphfarmer";
import { useNavigate } from 'react-router-dom';

const divStyle = {
  color: '#082459',
  fontSize: '24px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  wordWrap: 'break-word'
};

export default function Homefarmer() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleClick = () => {
    navigate('/milk');
  };

  // Handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Handle toggling task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ margin: '12px' }}>
      <div style={divStyle}>ยินดีต้อนรับ</div>
      <p></p>
      <Gridbox />
      <p></p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
        
        {/* Left Side: To-Do List */}
        <div className="todo-container">
          <h3 className="todo-header">To-Do List</h3>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="todo-input"
          />
          <button onClick={addTask} className="todo-button">
            Add Task
          </button>
          <ul className="todo-list">
            {tasks.length === 0 ? (
              <p style={{ color: '#888' }}>No tasks added yet.</p>
            ) : (
              tasks.map((task, index) => (
                <li key={index} className="todo-item">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    className="todo-checkbox"
                  />
                  <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
                    {task.text}
                  </span>
                  <button onClick={() => deleteTask(index)} className="todo-delete-button">
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Right Side: Graphfarmer */}
        <div className="cards">
          <div className="toolss">
            <div className="circles">
              <span className="red box"></span>
            </div>
            <div className="circles">
              <span className="yellow box"></span>
            </div>
            <div className="circles">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <Graphfarmer />
            <br />
            <div style={{ display: 'flex', justifyContent: 'right', background: '#cae4ff' }}>
              <button onClick={handleClick}>
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
