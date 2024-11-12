/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Card extends Component {
  static props = {
    slots: {
      type: Object,
      shape: {
        default: Object,
        title: { type: Object, optional: true },
      },
    },
  };
  static template = "owl_playground.Card";
}
