/** @odoo-module **/

import { registry } from "@web/core/registry";
import { LazyComponent } from "@web/core/assets";

import { Component, xml } from "@odoo/owl";

class AwesomeDashboardLoader extends Component {}

AwesomeDashboardLoader.template = xml`
<LazyComponent bundle="'awesome_tshirt.dashboard'" Component="'AwesomeDashboard'" props="props"/>
`;
AwesomeDashboardLoader.components = { LazyComponent };

registry
  .category("actions")
  .add("awesome_tshirt.dashboard", AwesomeDashboardLoader);
