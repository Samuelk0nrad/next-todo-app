import { pgTable, boolean, serial, text, timestamp } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
  completed: boolean("completed").default(false).notNull(),
  dueDate: timestamp("dueDate"),
});

export type InsertToDo = typeof todoTable.$inferInsert;
export type ToDo = typeof todoTable.$inferSelect;
