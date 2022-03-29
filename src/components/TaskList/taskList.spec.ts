export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface TaskItemsProps {
  task: Task;
  handleRemoveTask: Function;
  handleToggleTaskCompletion: Function;
}
