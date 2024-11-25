/** @odoo-module **/

import { Counter } from "../src/counter/counter";
import { click, getFixture, mount } from "@web/../tests/helpers/utils";

let target;

Qunit.module("Components", (hooks) => {
  hooks.beforeEach(async () => {
    target = getFixture();
  });

  Qunit.module("Counter");

  Qunit.test("Counter is correctly incremented", async (assert) => {
    await mount(Counter, target);
    assert.strictEqual(
      target.querySelector("body > p").innerHTML,
      "Counter: 1"
    );
    await click(target, ".btn-primary");
    assert.strictEqual(
      target.querySelector("body > p").innerHTML,
      "Counter: 2"
    );
  });
});
