"use client";

import { ToDo } from "@/data/schema";

type ToDoItemProps = {
  todo: ToDo;
};

export function ToDoItem({ todo }: ToDoItemProps) {
  return (
    <li
      key={todo.id}
      className="flex items-center justify-between p-2 bg-gray-800 rounded-md"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={false}
          // onChange={() => toggleTask()}
          className="mr-2 w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
        />
        <span className={`${false ? "line-through text-gray-500" : ""}`}>
          {todo.task}
        </span>
      </div>
      <div className="flex items-center">
        <input
          type="date"
          value={todo.dueDate?.toISOString().split("T")[0] || ""}
          // onChange={(e) => setTaskDueDate(e.target.value)}
          className="mr-2 p-1 bg-gray-700 border border-gray-600 rounded-md text-sm"
        />
        <button
          // onClick={() => deleteTask()}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
