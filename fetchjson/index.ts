import axios from "axios";

const today: Date[] = [new Date()];
let point: { x: number; y: number } = { x: 10, y: 20 };

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data;
  const {
    completed,
    id,
    title
  }: { completed: boolean; id: number; title: string } = todo;

  logTodo({ id, title, completed });
});

const logTodo: ({
  id,
  title,
  completed
}: {
  id: number;
  title: string;
  completed: boolean;
}) => void = ({
  id,
  title,
  completed
}: {
  id: number;
  title: string;
  completed: boolean;
}) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${completed}
  `);
};
