"use client";
import { useState } from "react";
import { AddToDo } from "./_component/AddToDo";
import { ToDoList } from "./_component/ToDoList";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn JavaScript projects", completed: false, dueDate: "" },
    { id: 2, text: "Make a to do list app", completed: false, dueDate: "" },
    {
      id: 3,
      text: "Host it on online server",
      completed: true,
      dueDate: "2025-05-10",
    },
    { id: 4, text: "Link it to your resume", completed: false, dueDate: "" },
    {
      id: 5,
      text: "Get a software job",
      completed: false,
      dueDate: "2025-06-01",
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setTaskDueDate = (id: number, dueDate: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, dueDate } : task))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do List ✨</h1>
      <AddToDo />
      <ToDoList
        tasks={tasks}
        toggleTask={(id: number) => {
          toggleTask(id);
        }}
        setTaskDueDate={(id: number, dueDate: string): void => {
          setTaskDueDate(id, dueDate);
        }}
        deleteTask={(id: number): void => {
          deleteTask(id);
        }}
      />
    </div>
  );
}
