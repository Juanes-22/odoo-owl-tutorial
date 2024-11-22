from odoo.tests import HttpCase
from odoo.tests.common import tagged


@tagged("post_install", "-at_install")
class TestOrderTour(HttpCase):
    def test_order_tour(self):
        self.start_tour("/web", "order_tour", login="admin", watch=True)
