import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(() => {
    return [];
  }),
});

export type AppRouter = typeof appRouter;
