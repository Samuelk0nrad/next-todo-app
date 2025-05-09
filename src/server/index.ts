import { db } from "@/data/db";
import { router, publicProcedure } from "./trpc";
import { todoTable } from "@/data/schema";

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return db.select().from(todoTable);
  }),
});

export type AppRouter = typeof appRouter;
