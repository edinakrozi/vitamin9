// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TaskForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') return;

    dispatch({
      type: 'ADD_TASK',
      payload: task
    });

    setTask(''); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
}

export default TaskForm;
