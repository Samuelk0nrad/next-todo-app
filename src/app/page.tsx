import { db } from "@/data/db";
import { AddToDo } from "./_component/AddToDo";
import { ToDoList } from "./_component/ToDoList";
import { todoTable } from "@/data/schema";

export default async function Home() {
  const tasks = await db.select().from(todoTable).execute();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do List ✨</h1>
      <AddToDo />
      <ToDoList tasks={tasks} />
    </div>
  );
}
