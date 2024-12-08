"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { memo, useState, useEffect } from "react";

type Todo = { todo: string; isDone: boolean };

const todoLists: Todo[] = [
  { todo: "Information about the Kalari center", isDone: false },
  { todo: "History of Kalaripayattu", isDone: false },
  { todo: "Services and programs offered", isDone: false },
  { todo: "Class schedules and timetables", isDone: false },
  { todo: "Training hubs and locations", isDone: false },
  { todo: "Contact information", isDone: false },
  { todo: "Instructor profiles", isDone: false },
  { todo: "Equipment and attire used", isDone: false },
  { todo: "Student testimonials", isDone: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : todoLists;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-orange-50 border-orange-200">
      <CardHeader className="bg-orange-100 border-b border-orange-200">
        <CardTitle className="text-2xl font-bold text-orange-800">
          Kalari Center App Todo
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Checkbox
                id={`todo-${index}`}
                checked={todo.isDone}
                onCheckedChange={() => handleToggle(index)}
                className="border-orange-300 text-orange-600"
              />
              <label
                htmlFor={`todo-${index}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                  todo.isDone ? "line-through text-orange-500" : "text-orange-800"
                }`}
              >
                {todo.todo}
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default memo(TodoList);
