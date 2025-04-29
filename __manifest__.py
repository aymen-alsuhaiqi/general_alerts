{
    'name': 'Global Alert',
    'version': '1.0',
    'description': 'Global Alert',
    'summary': 'this is a global alert app for create global notifications that shows in home menu page',
    'author': 'AMT',
    'license': 'LGPL-3',
    'category': '',
    'depends': [
        'base','web_enterprise'
    ],
    "data": [
        "security/ir.model.access.csv",
        "views/alerts_view.xml",
    ],
    'application': True,
    'assets': {
        'web.assets_backend': [
            "global_alert/static/src/**/*",
        ],
    }
}
