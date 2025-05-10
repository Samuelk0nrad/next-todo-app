import "server-only";
import { db } from "..";
import { todoTable } from "../schema";
import { eq } from "drizzle-orm";

export const TODO_QUERIES = {};

export const TODO_MUTATIONS = {
  createTask: async function (input: {
    task: string;
    completed: boolean;
    dueDate: Date;
  }) {
    return await db.insert(todoTable).values({
      task: input.task,
      completed: input.completed,
      dueDate: input.dueDate,
    });
  },
  updateTask: async function (
    id: number,
    input: { task?: string; dueDate?: Date }
  ) {
    return await db
      .update(todoTable)
      .set({
        task: input.task,
        dueDate: input.dueDate,
      })
      .where(eq(todoTable.id, id));
  },
  toggleTask: async function (id: number, completed: boolean) {
    return await db
      .update(todoTable)
      .set({ completed })
      .where(eq(todoTable.id, id));
  },
  deleteTask: async function (id: number) {
    return await db.delete(todoTable).where(eq(todoTable.id, id));
  },
};
