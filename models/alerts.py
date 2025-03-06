from odoo import fields,models,api,_

class Alerts(models.Model):
    _name = 'alerts.alerts'
    _description = 'alerts'

    alert = fields.Char(_('Alert Message'),help=_('write alert message here'),required=True)
    alert_status = fields.Boolean(_('Alert Status'))
    alert_type = fields.Selection([
        ('primary', 'primary'),
        ('success', 'success'),
        ('danger', 'danger'),
        ('info','info'),
        ('warning','warning'),
        ('secondary','secondary'),
    ],_('Alert Type'),required=True,default='primary')
    