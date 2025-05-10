import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { MUTATIONS } from "@/server/db/queries/queries";

export const todoRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ task: z.string().min(1), dueDate: z.date() }))
    .mutation(async ({ input }) => {
      await MUTATIONS.TODO.createTask({
        task: input.task,
        completed: false,
        dueDate: input.dueDate,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        dueDate: z.date().optional(),
        task: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      await MUTATIONS.TODO.updateTask(input.id, {
        dueDate: input.dueDate,
        task: input.task,
      });
    }),

  toggle: publicProcedure
    .input(z.object({ id: z.number(), completed: z.boolean() }))
    .mutation(async ({ input }) => {
      await MUTATIONS.TODO.toggleTask(input.id, input.completed);
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await MUTATIONS.TODO.deleteTask(input.id);
    }),

  getSecretMessage: publicProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
