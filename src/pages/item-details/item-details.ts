import {Component, OnInit} from '@angular/core';

import {NavController, NavParams, ViewController} from 'ionic-angular';
import {DataServiceProvider} from "../../providers/data-service/data-service";


@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage implements OnInit {
    selectedItem: { title: string, id: string, icon: string };
    GroupbyAvaragePrice: { name: string,value:number }[] = [];
    GroupbyTotalPrice: { name: string,value:number }[] = [];
    GroupbySquare: { name: string,value:number }[] = [];

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };


    constructor(public navCtrl: NavController,private viewCtrl:ViewController,public navParams: NavParams, private service: DataServiceProvider) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }

    ngAfterViewInit(){
        //this.navCtrl.getActive().getNavbar().setBackButtonText('返回');
        //this.viewCtrl.getNavbar().setBackButtonText('kaesu');
    }



    ngOnInit() {
        this.service.getCountGroupbyAvaragePrice(this.selectedItem.id).subscribe(res => {
            if(res){
                let _arr = [];
                for(let key in res){
                    _arr.push({
                        "name":key,
                        "value":res[key] as number
                    })
                };
                this.GroupbyAvaragePrice = [..._arr];
            }
        });
        this.service.getCountGroupbyTotalPrice(this.selectedItem.id).subscribe(res => {
            if(res){
                let _arr = [];
                for(let key in res){
                    _arr.push({
                        "name":key,
                        "value":res[key] as number
                    })
                };
                this.GroupbyTotalPrice = [..._arr];
            }

        });
        this.service.getCountGroupbySquare(this.selectedItem.id).subscribe(res => {
            if(res){
                let _arr = [];
                for(let key in res){
                    _arr.push({
                        "name":key,
                        "value":res[key] as number
                    })
                };
                this.GroupbySquare = [..._arr];
            }

        });


    }

}
