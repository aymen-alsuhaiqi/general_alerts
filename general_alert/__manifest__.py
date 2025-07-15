{
    'name': 'General Alert',
    'version': '17.0.1.0',
    'description': 'General Alert',
    'summary': 'this is a general alert app for create general notifications that shows in home menu page',
    'author': 'AMT',
    'license': 'LGPL-3',
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
            "general_alert/static/src/**/*",
        ],
    }
}
