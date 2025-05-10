"use client";

import { ToDo } from "@/server/db/schema";
import { api } from "@/trpc/react";
import { useState } from "react";

type ToDoItemProps = {
  todo: ToDo;
};

export function ToDoItem({ todo }: ToDoItemProps) {
  const [completed, setCompleted] = useState(todo.completed ?? false);
  const [dueDate, setDueDate] = useState(todo.dueDate ?? null);

  const deleteDbTask = api.todo.delete.useMutation();
  const updateDueDateDbTask = api.todo.update.useMutation();
  const toggleDbTask = api.todo.toggle.useMutation();

  const toggleTask = async () => {
    setCompleted(!completed);
    await toggleDbTask.mutateAsync({
      id: todo.id,
      completed: !completed,
    });
  };

  function setTaskDueDate(value: string): void {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      console.error("Invalid date");
      return;
    }
    setDueDate(date);
    updateDueDateDbTask.mutateAsync({
      id: todo.id,
      dueDate: date,
    });
  }

  const deleteTask = async () => {
    await deleteDbTask.mutateAsync({ id: todo.id });
  };

  return (
    <li
      key={todo.id}
      className="flex items-center justify-between p-2 bg-gray-800 rounded-md"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask()}
          className="mr-2 w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
        />
        <span className={`${completed ? "line-through text-gray-500" : ""}`}>
          {todo.task}
        </span>
      </div>
      <div className="flex items-center">
        <input
          type="date"
          value={dueDate?.toISOString().split("T")[0] || ""}
          onChange={(e) => setTaskDueDate(e.target.value)}
          className="mr-2 p-1 bg-gray-700 border border-gray-600 rounded-md text-sm"
        />
        <button
          onClick={deleteTask}
          className="text-red-500 hover:text-red-400"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
