import { useState } from "react";
import "../../styles/tasklist.scss";
import { FiCheckSquare } from "react-icons/fi";
import { Task } from "./taskList.spec";
import TaskItems from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTitle, setInputTitle] = useState("");

  const handleCreateNewTask = () => {
    if (inputTitle) {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          title: inputTitle,
          isComplete: false,
        },
      ]);

      setInputTitle("");
    }
  };

  const handleToggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      })
    );
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo to do"
            onChange={handleChangeInputTitle}
            value={inputTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <TaskItems
              key={task.id}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleToggleTaskCompletion={handleToggleTaskCompletion}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}
