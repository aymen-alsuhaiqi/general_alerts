from odoo import fields,models,api,_

class Alerts(models.Model):
    _name = 'alerts.alerts'
    _description = 'alerts'
    _rec_name = 'alert_title'

    alert_title = fields.Char(_('title'),help=_('write alert title here'))
    alert = fields.Text(_('Alert Message'),help=_('write alert message here'),required=True)
    alert_status = fields.Boolean(_('Active alert'))
    alert_type = fields.Selection([
        ('info','info'),
        ('success', 'success'),
        ('danger', 'danger'),
        ('primary', 'primary'),
        ('warning','warning'),
        ('secondary','secondary'),
    ],_('Alert Type'),required=True,default='info')
    until_date = fields.Datetime(required=True)
    alert_const = fields.Boolean(_('Allow user close alert'),default=True)