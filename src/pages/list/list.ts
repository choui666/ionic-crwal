import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {DataServiceProvider} from "../../providers/data-service/data-service";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    icons: string[];
    items: Array<{ title: string, id: string, icon: string }>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private service: DataServiceProvider) {
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.getAllCity();
    }

    getAllCity() {
        this.service.getAllCity().subscribe((res: { name: string, id: string }[]) => {
            console.log('getAllCity--result', res);
            this.items = [];
            for (let i = 0; i < res.length; i++) {
                this.items.push({
                    title: res[i].name,
                    id: res[i].id,
                    icon: this.icons[Math.floor(Math.random() * this.icons.length)]
                });
            }
        })
    }

    itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    }
}
