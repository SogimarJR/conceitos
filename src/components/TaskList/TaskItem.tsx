import { FiTrash } from "react-icons/fi";
import { TaskItemsProps } from "./taskList.spec";

export default function TaskItems(props: TaskItemsProps) {
  const { task, handleToggleTaskCompletion, handleRemoveTask } = props;

  return (
    <li>
      <div className={task.isComplete ? "completed" : ""} data-testid="task">
        <label className="checkbox-container">
          <input
            type="checkbox"
            readOnly
            checked={task.isComplete}
            onClick={() => handleToggleTaskCompletion(task.id)}
          />
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>

      <button
        type="button"
        data-testid="remove-task-button"
        onClick={() => handleRemoveTask(task.id)}
      >
        <FiTrash size={16} />
      </button>
    </li>
  );
}
