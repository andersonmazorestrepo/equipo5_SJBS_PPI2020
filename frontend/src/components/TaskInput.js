import React, { useState } from "react";

import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


import TaskInput from "./TaskInput";
import Task from "./Task";

export default () => {
  const [tasks, setTasks] = useState([
    {
      text: "Read about React Hooks",
      complete: false
    },
    {
      text: "Write a tutorial about Hooks",
      complete: false
    }
  ]);

  const toggleComplete = i => {
    const findTask = (task, k) =>
      k === i ? { ...task, complete: !task.complete } : task;

    setTasks(tasks.map(findTask));
  };

  return (
    <div className="App">
      <TaskInput
        onSubmit={text => setTasks([{ text, complete: false }, ...tasks])}
      />

      <h2>Things to do</h2>
      <ul class="task__list">
        {tasks.map((task, i) => (
          <Task {...task} onClick={() => toggleComplete(i)} />
        ))}
      </ul>
      <hr />
      <button class="btn btn-sm btn-dark" onClick={() => setTasks([])}>
        Clear tasks
      </button>
    </div>
  );
};
