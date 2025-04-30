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
            const currentDate = new Date()
            this.state.isStillAvailable = currentDate.toISOString().replace('T', ' ').replace('Z','')
            const alerts = await this.orm.searchRead('general.alerts',[['alert_status','=','1']
                ,['until_date','>',this.state.isStillAvailable]])
            alerts.forEach(alert => {
                alert.hidden = false
            });
            this.state.alerts = alerts
        })

        
    },
    dismiss(a){
        a.hidden = true
    }
})