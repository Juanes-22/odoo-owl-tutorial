/** @odoo-module **/

import { KanbanController } from "@web/views/kanban/kanban_controller";
import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { useInterval } from "../utils";

class AutoreloadKanbanController extends KanbanController {
  setup() {
    super.setup();
    useInterval(() => {
      this.model.load();
      console.log("Auto loading kanban view...")
    }, 30_000);
  }
}

export const AutoreloadKanbanView = {
  ...kanbanView,
  Controller: AutoreloadKanbanController,
};

registry.category("views").add("autoreloadkanban", AutoreloadKanbanView);
