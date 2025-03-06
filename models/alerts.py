from odoo import fields,models,api,_

class Alerts(models.Model):
    _name = 'alerts.alerts'
    _description = 'alerts'

    alert = fields.Char(_('Alert Message'),help=_('write alert message here'),required=True)
    alert_status = fields.Selection([
        ('1', 'yes'),
        ('0', 'no'),
    ],_('Alert Status'),required=True)
    