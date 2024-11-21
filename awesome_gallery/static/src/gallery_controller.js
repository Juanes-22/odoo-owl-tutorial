/** @odoo-module **/

import { Component } from "@odoo/owl";

export class GalleryController extends Component {
  setup() {
    super.setup();
    console.log("GalleryController loaded");
  }
}

GalleryController.template = "awesome_gallery.View";
