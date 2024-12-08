'use client'
import dynamic from "next/dynamic";

const TodoList = dynamic(() => import("@/components/TodoList"), { ssr: false });

const page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Kalari Center App Development
      </h1>
      <TodoList />
    </main>
  );
};

export default page;
