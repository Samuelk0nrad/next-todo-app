import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
  tasks: { id: number; text: string; completed: boolean; dueDate: string }[];
  toggleTask: (id: number) => void;
  setTaskDueDate: (id: number, dueDate: string) => void;
  deleteTask: (id: number) => void;
}

export function ToDoList({
  tasks,
  toggleTask,
  setTaskDueDate,
  deleteTask,
}: ToDoListProps) {
  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          todo={task}
          toggleTask={() => {
            toggleTask(task.id);
          }}
          setTaskDueDate={(dueDate: string) => {
            setTaskDueDate(task.id, dueDate);
          }}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}
