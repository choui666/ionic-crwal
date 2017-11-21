import {Component, OnInit} from '@angular/core';
import {DataServiceProvider} from "../../providers/data-service/data-service";

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage implements OnInit{

    newsList:{title:string,href:string}[];

    constructor(private service: DataServiceProvider) {

    }

    ngOnInit(){
       this.service.getNews().subscribe((res:any)=>{
           this.newsList = res ;
       })
    }

    openNews(url:string){
        console.log(url);
    }
}
