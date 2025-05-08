import { ToDo } from "@/data/schema";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
  tasks: ToDo[];
}

export function ToDoList({ tasks }: ToDoListProps) {
  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <ToDoItem key={task.id} todo={task} />
      ))}
    </ul>
  );
}
