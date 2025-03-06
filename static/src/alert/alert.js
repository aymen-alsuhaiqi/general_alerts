/** @odoo-module **/

import { Component,useState,onWillStart } from '@odoo/owl';
import { useService } from '@web/core/utils/hooks';
import { HomeMenu } from "@web_enterprise/webclient/home_menu/home_menu";
import { patch } from "@web/core/utils/patch";

patch(HomeMenu.prototype,{
    setup(){
        super.setup();
        this.orm = useService('orm');
        this.state = useState({
            ...this.state,
            alerts:[]
        })

        onWillStart(async () => {
            const alerts = await this.orm.searchRead('alerts.alerts',[['alert_status','=','1']],['alert'])
            alerts.forEach(alert => {
                alert.hidden = true
            });
            this.state.alerts = alerts
        })

        
    },
    dismiss(a){
        a.hidden = false
    }
})