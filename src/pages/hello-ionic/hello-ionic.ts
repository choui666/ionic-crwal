import {Component, OnInit} from '@angular/core';
import {DataServiceProvider} from "../../providers/data-service/data-service";
import {InAppBrowser, InAppBrowserObject} from "@ionic-native/in-app-browser";

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit{

    newsList:{title:string,href:string}[];
    browser:InAppBrowserObject;

    constructor(private service: DataServiceProvider,private iab: InAppBrowser) {

    }

    ngOnInit(){
       this.service.getNews().subscribe((res:any)=>{
           this.newsList = res ;
       })
    }

    openNews(url:string){
         this.browser = this.iab.create(url,'_blank', {location:'no',zoom:'yes'});
    }
}
