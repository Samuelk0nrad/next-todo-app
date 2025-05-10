import { api } from "@/trpc/server";

export default async function TestApiPage() {
  const hello = await api.todo.hello({ text: "from tRPC" });

  return (
    <div>
      <h1>Test API Page</h1>
      <p>This is a sample page for testing API integration.</p>
      <p>{hello.greeting}</p>
    </div>
  );
}
