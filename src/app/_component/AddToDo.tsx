import { db } from "@/data/db";
import { todoTable } from "@/data/schema";

export function AddToDo() {
  return (
    <div className="flex w-full max-w-md mb-4">
      <form
        action={async (e) => {
          "use server";

          const task = e.get("task") as string;
          const dueDate = e.get("dueDate") as string;
          console.log(task, dueDate);

          await db.insert(todoTable).values({
            task,
            dueDate: new Date(dueDate),
          });
        }}
      >
        <input
          type="text"
          name="task"
          placeholder="Add your task"
          className="flex-1 p-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="dueDate"
          className="p-2 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
