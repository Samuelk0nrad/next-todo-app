"use client";

type ToDoItemProps = {
  todo: { id: number; text: string; completed: boolean; dueDate: string };
  toggleTask: () => void;
  setTaskDueDate: (dueDate: string) => void;
  deleteTask: () => void;
};

export function ToDoItem({
  todo,
  toggleTask,
  setTaskDueDate,
  deleteTask,
}: ToDoItemProps) {
  return (
    <li
      key={todo.id}
      className="flex items-center justify-between p-2 bg-gray-800 rounded-md"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTask()}
          className="mr-2 w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
        />
        <span
          className={`${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex items-center">
        <input
          type="date"
          value={todo.dueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          className="mr-2 p-1 bg-gray-700 border border-gray-600 rounded-md text-sm"
        />
        <button
          onClick={() => deleteTask()}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
