/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Todo } from "../todo/todo";

import { useAutofocus } from "../utils";

export class TodoList extends Component {
  static template = "owl_playground.TodoList";
  static components = { Todo };

  setup() {
    this.todos = useState([
      { id: 1, description: "study programming", done: true },
      { id: 2, description: "do exercise", done: true },
      { id: 3, description: "play guitar", done: false },
    ]);
    this.counter = useState({ value: 4 });

    useAutofocus("input");
  }

  handleTodoInput(e) {
    const todoDescription = e.target.value;

    if (e.keyCode === 13 && todoDescription) {
      this.addTodo({
        description: todoDescription,
        done: false,
      });
      e.target.value = "";
    }
  }

  addTodo({ description, done }) {
    const todo = {
      id: this.counter.value++,
      description: description,
      done: done,
    };
    console.log(todo);
    this.todos.push(todo);
  }

  toggleTodo(todoId) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}
