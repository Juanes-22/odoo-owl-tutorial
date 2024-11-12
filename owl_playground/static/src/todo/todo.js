/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {
  static props = {
    id: { type: Number },
    description: { type: String },
    done: { type: Boolean },
    toggleTodo: { type: Function },
    removeTodo: { type: Function },
  };
  static template = "owl_playground.Todo";

  onInputClick() {
    this.props.toggleTodo(this.props.id);
  }

  onRemoveClick() {
    this.props.removeTodo(this.props.id);
  }
}
