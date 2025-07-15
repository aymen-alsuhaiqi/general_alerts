/** @odoo-module **/

import { Component,useState,onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { HomeMenu } from "@web_enterprise/webclient/home_menu/home_menu";
import { patch } from "@web/core/utils/patch";
import { cookie } from "@web/core/browser/cookie";


patch(HomeMenu.prototype,{
    setup(){
        super.setup();
        this.orm = useService('orm');
        this.state = useState({
            ...this.state,
            alerts:[]
        })

        onWillStart(async () => {
            const currentDate = new Date()
            this.state.isStillAvailable = currentDate.toISOString().replace('T', ' ').replace('Z','')
            const cookieValueAlerts = cookie.get("hide_general_alert")
            let intIds = []
            if (cookieValueAlerts){
                intIds = cookieValueAlerts.split(',').map(id => parseInt(id.trim(),10))
            }
            const alerts = await this.orm.searchRead('general.alerts',[['alert_status','=','1']
                ,['until_date','>',this.state.isStillAvailable],['id','not in',intIds]])
            alerts.forEach(alert => {
                alert.hidden = false
            });
            this.state.alerts = alerts
        })
        
        
    },
    dismiss(a){
        a.hidden = true
        let ids_alert_hide = new Set();
        const cookieValueAlerts = cookie.get("hide_general_alert")
        if (cookieValueAlerts){
            ids_alert_hide = new Set(cookieValueAlerts.split(','))
        }
        ids_alert_hide.add(a.id.toString())
        const updateCookieValues = Array.from(ids_alert_hide).join(',')

        cookie.set("hide_general_alert", updateCookieValues, 24 * 60 * 60);
    }
})